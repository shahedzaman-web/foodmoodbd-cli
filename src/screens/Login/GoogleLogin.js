import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import FlatText from '../../components/FlatText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useSocialLoginMutation} from '../../store/services/authApi';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {provider} from '../../store/slices/authSlice';
import config from '../../utils/config';

export default function GoogleLogin({expoPushToken}) {
  const [socialLogin, {isLoading, error}] = useSocialLoginMutation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  React.useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: config.webClientId,
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER

      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.

      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  }, []);
  const signIn = async () => {
    try {
      if (GoogleSignin.isSignedIn()) {
        GoogleSignin.signOut();
      }

      const userInfo = await GoogleSignin.signIn();

      const sendData = {
        provider: 'Google',
        provider_user_id: userInfo.serverAuthCode,
        name: userInfo.user.name,
        email: userInfo.user.email,
        avatar: userInfo.user.photo,
        token: expoPushToken,
      };
      const {data, error} = await socialLogin(sendData);

      if (data?.login_id !== undefined) {
        dispatch(provider('google'));
        navigation.replace('App');
      } else {
        alert('Something went Wrong. Try Again.');
      }
    } catch (error) {
      alert(error);
      console.log({error});
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={signIn} style={styles.googleBtn}>
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <>
            <View style={styles.iconContainer}>
              <AntDesign name="google" size={24} color="white" />
            </View>
            <FlatText text="Google" font="q_semibold" size={18} color="#fff" />
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}
