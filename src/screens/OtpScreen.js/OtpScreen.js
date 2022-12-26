import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../sectionComponent/Header';
import FlatText from '../../components/FlatText';
import {useOtpVerifyMutation} from '../../store/services/authApi';
import Toast from 'react-native-toast-message';
import {ActivityIndicator} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
export default function OtpScreen({navigation, route}) {
  const {t} = useTranslation();
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const [value4, setValue4] = React.useState('');
  const [value5, setValue5] = React.useState('');
  const [value6, setValue6] = React.useState('');

  const {phoneNumber} = route.params;
  const [otpVerify, {isLoading}] = useOtpVerifyMutation();
  const handleOtpVerify = async () => {
    if (
      value1 === '' ||
      value2 === '' ||
      value3 === '' ||
      value4 === '' ||
      value5 === '' ||
      value6 === ''
    ) {
      Toast.show({
        text1: 'Please enter all the fields',
        type: 'error',
      });
    } else {
      try {
        const payload = {
          phone_number: phoneNumber,
          otp: `${value1}${value2}${value3}${value4}${value5}${value6}`,
        };
        const {data,error} = await otpVerify(payload);

        if (data?.message === 'Otp Successful') {
          navigation.replace('App');
          Toast.show({
            text1: 'Registered Successfully',
            type: 'success',
          });
        } else {
          Toast.show({
            text1: error.data.message,
            type: 'error',
          });
        }
      } catch (err) {
        // console.log(err);
        Toast.show({
          text1: 'Something went wrong!',
          type: 'error',
        });
      }
    }
  };
  return (
    <View style={styles.flex}>
      <Header />
      <View style={styles.mainContainer}>
        <View style={styles.title}>
          <FlatText
            text={t('otpTitle')}
            textAlign="center"
            font="bold"
            size={20}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <View style={styles.otpContainer}>
              <TextInput
                value={value1}
                onChangeText={text => setValue1(text)}
                style={styles.inputText}
                placeholder=""
                placeholderTextColor="#666"
                maxLength={1}
                keyboardType="numeric"
              />
              <TextInput
                value={value2}
                onChangeText={text => setValue2(text)}
                style={styles.inputText}
                placeholder=""
                placeholderTextColor="#666"
                maxLength={1}
                keyboardType="numeric"
              />
              <TextInput
                value={value3}
                onChangeText={text => setValue3(text)}
                style={styles.inputText}
                placeholder=""
                placeholderTextColor="#666"
                maxLength={1}
                keyboardType="numeric"
              />
              <TextInput
                value={value4}
                onChangeText={text => setValue4(text)}
                style={styles.inputText}
                placeholder=""
                placeholderTextColor="#666"
                maxLength={1}
                keyboardType="numeric"
              />
              <TextInput
                value={value5}
                onChangeText={text => setValue5(text)}
                style={styles.inputText}
                placeholderTextColor="#666"
                placeholder=""
                maxLength={1}
                keyboardType="numeric"
              />
              <TextInput
                value={value6}
                onChangeText={text => setValue6(text)}
                style={styles.inputText}
                placeholderTextColor="#666"
                placeholder=""
                maxLength={1}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={handleOtpVerify}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <FlatText
                  text={t('verify')}
                  font="q_semibold"
                  size={18}
                  color="#fff"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
