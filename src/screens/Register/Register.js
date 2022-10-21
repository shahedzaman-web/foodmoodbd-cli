import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native-paper';
import FlatText from '../../components/FlatText';
import {useRegisterMutation} from '../../store/services/authApi';
import Toast from 'react-native-toast-message';
import styles from './styles';
import {useTranslation} from 'react-i18next';
export default function Register({navigation}) {
  const {t} = useTranslation();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [register, {isLoading}] = useRegisterMutation();
  const handleRegister = async () => {
    if (name === '' || email === '' || password === '' || confirmPass === '') {
      Toast.show({
        text1: 'Please enter all the fields',
        type: 'error',
      });
    } else if (password !== confirmPass) {
      Toast.show({
        text1: 'Password and confirm password does not match',
        type: 'error',
      });
    } else {
      try {
        const payload = {
          name,
          email,
          password,
          phone_number: phoneNumber,
        };
        const {data} = await register(payload);

        if (data.status === 'success') {
          navigation.navigate('OtpScreen', {
            phoneNumber: phoneNumber,
          });
        } else {
          Toast.show({
            text1: data.error,
            type: 'error',
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <View style={styles.flex}>
      <ScrollView style={styles.flex}>
        <View>
          <View style={styles.mainContainer}>
            <View style={styles.title}>
              <FlatText text={t('registerTitle')} font="q_semibold" size={20} />
            </View>
            <View style={styles.formGroup}>
              <FlatText text={t('name')} font="q_regular" size={17} />
              <TextInput
                style={styles.textInput}
                value={name}
                placeholder={t('enterName')}
                autoCapitalize="none"
                onChangeText={text => setName(text)}
              />
            </View>
            <View style={styles.formGroup}>
              <FlatText text={t('email')} font="q_regular" size={17} />
              <TextInput
                style={styles.textInput}
                value={email}
                placeholder={t('enterEmail')}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={text => setEmail(text)}
              />
            </View>
            <View style={styles.formGroup}>
              <FlatText text={t('phone')} font="q_regular" size={17} />
              <TextInput
                style={styles.textInput}
                value={phoneNumber}
                keyboardType="numeric"
                placeholder={t('enterPhone')}
                onChangeText={text => setPhoneNumber(text)}
              />
            </View>
            <View style={styles.formGroup}>
              <FlatText text={t('password')} font="q_regular" size={17} />
              <TextInput
                style={styles.textInput}
                value={password}
                placeholder={t('enterPassword')}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
              />
            </View>
            <View style={styles.formGroup}>
              <FlatText
                text={t('confirmPassword')}
                font="q_regular"
                size={17}
              />
              <TextInput
                style={styles.textInput}
                value={confirmPass}
                placeholder={t('enterConfirmPassword')}
                secureTextEntry={true}
                onChangeText={text => setConfirmPass(text)}
              />
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleRegister}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <FlatText
                  text={t('register')}
                  font="q_semibold"
                  size={18}
                  color="#fff"
                />
              )}
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={styles.textCenter}
                onPress={() => navigation.navigate('Login')}>
                <FlatText
                  text={t('alreadyHaveAccount')}
                  font="q_regular"
                  size={16}
                 color="#333333"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
