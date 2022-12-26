import React from 'react';
import {View, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import FlatText from '../../components/FlatText';
import {useProfileUpdateMutation} from '../../store/services/authApi';
import Header from '../sectionComponent/Header';
import styles from './styles';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
export default function Settings() {
  const {t} = useTranslation();
  const userName = useSelector(state => state.userInfo.name);
  const [name, setName] = React.useState(userName);
  const [current_password, setCurrent_password] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password_confirmation, setPassword_confirmation] = React.useState('');
  const [profileUpdate, {isLoading}] = useProfileUpdateMutation();
  const handleProfileUpdate = async () => {
    if (
      name === '' ||
      current_password === '' ||
      password === '' ||
      password_confirmation === ''
    ) {
      Toast.show({
        text1: 'Please enter all the fields',
        type: 'error',
      });
    } else if (password !== password_confirmation) {
      Toast.show({
        text1: 'Password and confirm password does not match',
        type: 'error',
      });
    } else {
      try {
        const payload = {
          name: name,
          current_password: current_password,
          password: password,
          password_confirmation: password_confirmation,
        };
        const {data} = await profileUpdate(payload);
        // console.log({ data });

        if (data?.error) {
          Toast.show({
            text1: data.error,
            type: 'error',
          });
        } else {
          Toast.show({
            text1: 'Profile updated successfully',
            type: 'success',
          });
          setCurrent_password('');
          setPassword('');
          setPassword_confirmation('');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <View style={styles.flex}>
      <Header />
      <ScrollView style={styles.flex}>
        <View style={styles.card}>
          <View style={styles.title}>
            <FlatText text={t('passwordChange')} font="bold" size={20} />
          </View>
          <View style={styles.formGroup}>
            <FlatText text={t('name')} font="q_semibold" size={16} />
            <TextInput
              style={styles.inputText}
              placeholder={t('enterName')}
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.formGroup}>
            <FlatText text={t('currentPassword')} font="q_semibold" size={16} />
            <TextInput
              style={styles.inputText}
              placeholder={t('enterCurrentPassword')}
              onChangeText={text => setCurrent_password(text)}
              secureTextEntry={true}
              placeholderTextColor="#666"
            />
          </View>
          <View style={styles.formGroup}>
            <FlatText text={t('password')} font="q_semibold" size={16} />
            <TextInput
              style={styles.inputText}
              placeholder={t('enterNewPass')}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              placeholderTextColor="#666"
            />
          </View>
          <View style={styles.formGroup}>
            <FlatText text={t('confirmPassword')} font="q_semibold" size={16} />
            <TextInput
              style={styles.inputText}
              placeholder={t('enterConfirmPassword')}
              onChangeText={text => setPassword_confirmation(text)}
              secureTextEntry={true}
              placeholderTextColor="#666"
            />
          </View>
          <View style={styles.formGroup}>
            <TouchableOpacity style={styles.btn} onPress={handleProfileUpdate}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <FlatText
                  text={t('update')}
                  font="q_semibold"
                  size={17}
                  color="#fff"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
