import React from 'react';
import {View, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import FlatText from '../../components/FlatText';
import {useSignInUserMutation} from '../../store/services/authApi';
import Toast from 'react-native-toast-message';
import styles from './styles';
import GoogleLogin from './GoogleLogin';
import {useTranslation} from 'react-i18next';

import {useDispatch} from 'react-redux';
import {provider} from '../../store/slices/authSlice';
import requestUserPermission from '../../utils/notificationService';
import FacebookLogin from './FacebookLogin';

export default function Login({navigation}) {
  const {t} = useTranslation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [signInUser, {isLoading}] = useSignInUserMutation();
  const [expoPushToken, setExpoPushToken] = React.useState('');
  const dispatch = useDispatch();
  console.log({expoPushToken});
  React.useEffect(() => {
    const getDeviceId = async () => {
      const res = await requestUserPermission();
      setExpoPushToken(res);
    };
    getDeviceId();
  }, []);
  const login = async () => {
    if (!email || !password) {
      Toast.show({
        text1: 'Please enter all the fields',
        type: 'error',
      });
      return;
    } else {
      try {
        const sendData = {
          email,
          password,
          token: expoPushToken !== undefined ? expoPushToken : '123',
        };
        dispatch(provider('api'));
        const res = await signInUser(sendData);

        if (res?.data?.token) {
          navigation.replace('App');
          Toast.show({
            text1: 'Successfully logged in!',
            type: 'success',
          });
        } else {
          Toast.show({
            text1: 'Please enter valid credentials!',
            type: 'error',
          });
        }
      } catch (error) {
        Toast.show({
          text1: 'Something went wrong. Please try again.',
          type: 'error',
        });
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.flex}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.title}>
            <FlatText text={t('loginTitle')} font="q_semibold" size={20} />
          </View>
          <View style={styles.formGroup}>
            <FlatText text={t('email')} font="q_regular" size={17} />
            <TextInput
              placeholderTextColor="#666"
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
              placeholder={t('enterEmail')}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}
            style={styles.flexEnd}>
            <FlatText text={t('forgetPassword')} font="q_regular" size={17} />
          </TouchableOpacity>
          <View style={styles.formGroup}>
            <FlatText text={t('password')} font="q_regular" size={17} />
            <TextInput
              keyboardType="default"
              value={password}
              placeholderTextColor="#666"
              autoCapitalize="none"
              style={styles.textInput}
              placeholder={t('enterPassword')}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.btn} onPress={() => login()}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <FlatText
                  text={t('login')}
                  font="q_semibold"
                  size={18}
                  color="#fff"
                />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.textCenter}
              onPress={() => navigation.navigate('Register')}>
              <FlatText
                text={t('donHaveAccount')}
                font="q_regular"
                size={16}
                color="#333333"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.orContainer}>
            <View style={styles.divider} />
            <FlatText text={t('or')} font="q_regular" size={16} />
            <View style={styles.divider} />
          </View>
          <View>
            <FacebookLogin expoPushToken={expoPushToken} />
            <GoogleLogin expoPushToken={expoPushToken} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
