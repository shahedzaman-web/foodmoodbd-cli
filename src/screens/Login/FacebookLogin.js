import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import FlatText from '../../components/FlatText';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useSocialLoginMutation} from '../../store/services/authApi';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native-paper';
import {provider} from '../../store/slices/authSlice';
import auth from '@react-native-firebase/auth';

import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
export default function FacebookLogin({expoPushToken}) {
  const [socialLogin, {isLoading}] = useSocialLoginMutation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  async function onFacebookButtonPress() {
    try {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccesToken
      const getData = await AccessToken.getCurrentAccessToken();

      if (!getData) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        getData.accessToken,
      );

      // Sign-in the user with the credential
      const receiveData = await auth().signInWithCredential(facebookCredential);
      console.log('receiveData', JSON.stringify(receiveData));
      const sendData = {
        provider: 'facebook',
        provider_user_id: receiveData.user.uid,
        name: receiveData.additionalUserInfo.profile.name,
        email: receiveData.user.email,
        avatar: receiveData.additionalUserInfo.profile.picture.data.url,
        token: expoPushToken,
      };
      console.log('sendData', sendData);
      const {data, error} = await socialLogin(sendData);

      if (data?.token !== undefined) {
        dispatch(provider('facebook'));
        navigation.replace('App');
      } else {
        alert('Something went wrong!');
      }
    } catch ({message}) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  return (
    <TouchableOpacity
      onPress={() =>
        onFacebookButtonPress().then(() =>
          console.log('Signed in with Facebook!'),
        )
      }
      style={styles.facebookBtn}>
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          <View style={styles.iconContainer}>
            <Fontisto name="facebook" size={24} color="white" />
          </View>
          <FlatText text="Facebook" font="q_semibold" size={18} color="#fff" />
        </>
      )}
    </TouchableOpacity>
  );
}
