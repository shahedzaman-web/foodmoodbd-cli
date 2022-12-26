import {TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FlatText from '../../components/FlatText';
import styles from './styles';
import Toast from 'react-native-toast-message';
import {useResetPasswordMutation} from '../../store/services/authApi';
import {ActivityIndicator} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
export default function EnterNewPassword({navigation, route}) {
  const {t} = useTranslation();
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const {email} = route.params;

  const [resetPassword, {isLoading}] = useResetPasswordMutation();
  const handleConfirmPassword = async () => {
    if (password === '' || confirmPassword === '') {
      Toast.show({
        text1: 'Please enter all the fields',
        type: 'error',
      });
      return;
    } else if (password !== confirmPassword) {
      Toast.show({
        text1: 'Password does not match',
        type: 'error',
      });
      return;
    } else {
      try {
        const payload = {
          phone_number: email,
          password: password,
          confirm_password: confirmPassword,
        };
        const {data, error} = await resetPassword(payload);
        console.log({data, error});
        if (data.message === 'Password Changed') {
          Toast.show({
            text1: 'Password Changed',
            type: 'success',
          });
          navigation.replace('Login');
        } else {
          Toast.show({
            text1: 'Something went wrong. Please try again.',
            type: 'error',
          });
        }
      } catch (error) {
        console.log(error);
        Toast.show({
          text1: 'Something went wrong. Please try again.',
          type: 'error',
        });
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <FlatText
          text={t('enterNewPasswordTitle')}
          textAlign="center"
          font="bold"
          size={20}
        />
      </View>
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
      <View style={styles.formGroup}>
        <FlatText text={t('confirmPassword')} font="q_regular" size={17} />
        <TextInput
          keyboardType="default"
          value={confirmPassword}
          placeholderTextColor="#666"
          autoCapitalize="none"
          style={styles.textInput}
          placeholder={t('enterConfirmPassword')}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={handleConfirmPassword}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <FlatText
              text={t('submit')}
              font="q_semibold"
              size={18}
              color="#fff"
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
