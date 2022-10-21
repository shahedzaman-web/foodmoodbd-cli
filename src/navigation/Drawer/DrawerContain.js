import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-toast-message';
import FlatText from '../../components/FlatText';
import {useSelector} from 'react-redux';
import {ActivityIndicator, Badge} from 'react-native-paper';
import {useLogoutUserMutation} from '../../store/services/authApi';
import {useTranslation} from 'react-i18next';
import {useNewNotificationQuery} from '../../store/services/api';
export default function DrawerContain({navigation}) {
  const {t} = useTranslation();
  const userInfo = useSelector(state => state.userInfo);
  const [logoutUser, {isLoading}] = useLogoutUserMutation();
  const provider = useSelector(state => state.auth.provider);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const {data, error} = useNewNotificationQuery();
  const notification = useSelector(state => state.notification.notifications);

  const logout = async () => {
    try {
      const res = await logoutUser();

      if (res?.data?.message === 'logout success') {
        navigation.navigate('Login');
        Toast.show({
          text1: 'Logout successfully!',
          type: 'success',
        });
      } else {
        Toast.show({
          text1: 'Something went wrong! Try again.',
          type: 'error',
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerBox}>
          <Image
            style={styles.profileImg}
            source={
              isAuthenticated
                ? {uri: userInfo.avatar}
                : require('./../../../assets/avater.png')
            }
          />
          <FlatText
            text={
              isAuthenticated
                ? t('welcome') + ' ' + userInfo.name + '!'
                : t('welcome') + ' User !'
            }
            size={18}
            font="q_regular"
            color="#fff"
          />
        </View>
      </View>
      <View style={styles.conatiner}>
        {!isAuthenticated && (
          <View>
            <View style={styles.singleList}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={styles.flexDirection}>
                  <View style={styles.flexContain}>
                    <AntDesign
                      style={styles.icon}
                      name="login"
                      size={20}
                      color="#333333"
                    />
                    <FlatText
                      text={t('login')}
                      font="q_regular"
                      size={18}
                      color="#333333"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.singleList}>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <View style={styles.flexDirection}>
                  <View style={styles.flexContain}>
                    <Entypo
                      style={styles.icon}
                      name="login"
                      size={20}
                      color="#333333"
                    />
                    <FlatText
                      text={t('register')}
                      font="q_regular"
                      size={18}
                      color="#333333"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {isAuthenticated && (
          <View style={styles.singleList}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('HomeTab', {
                  screen: 'Home',
                })
              }>
              <View style={styles.flexDirection}>
                <View style={styles.flexContain}>
                  <AntDesign
                    style={styles.icon}
                    name="home"
                    size={20}
                    color="#333333"
                  />
                  <FlatText
                    text={t('homePage')}
                    font="q_regular"
                    size={18}
                    color="#333333"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {isAuthenticated && (
          <View style={styles.singleList}>
            <TouchableOpacity onPress={() => navigation.navigate('Order')}>
              <View style={styles.flexDirection}>
                <View style={styles.flexContain}>
                  <Octicons
                    style={styles.icon}
                    name="list-unordered"
                    size={20}
                    color="#333333"
                  />
                  <FlatText
                    text={t('allOrder')}
                    font="q_regular"
                    size={18}
                    color="#333333"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {provider === 'api' && (
          <View style={styles.singleList}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <View style={styles.flexDirection}>
                <View style={styles.flexContain}>
                  <Feather
                    style={styles.icon}
                    name="settings"
                    size={20}
                    color="#333333"
                  />
                  <FlatText
                    text={t('settings')}
                    font="q_regular"
                    size={18}
                    color="#333333"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.singleList}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RefundAndReturnPolicy')}>
            <View style={styles.flexDirection}>
              <View style={styles.flexContain}>
                <MaterialCommunityIcons
                  name="cash-refund"
                  style={styles.icon}
                  size={20}
                  color="#333333"
                />

                <FlatText
                  text={t('refundAndReturn')}
                  font="q_regular"
                  size={18}
                  color="#333333"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.singleList}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PrivacyPolicy')}>
            <View style={styles.flexDirection}>
              <View style={styles.flexContain}>
                <MaterialIcons
                  name="privacy-tip"
                  style={styles.icon}
                  size={20}
                  color="#333333"
                />
                <FlatText
                  text={t('privacyPolicy')}
                  font="q_regular"
                  size={18}
                  color="#333333"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.singleList}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TermsAndCondition')}>
            <View style={styles.flexDirection}>
              <View style={styles.flexContain}>
                <Ionicons
                  name="ios-document-text-outline"
                  style={styles.icon}
                  size={20}
                  color="#333333"
                />
                <FlatText
                  text={t('termsAndConditions')}
                  font="q_regular"
                  size={18}
                  color="#333333"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.singleList}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangeLanguage')}>
            <View style={styles.flexDirection}>
              <View style={styles.flexContain}>
                <Fontisto
                  name="language"
                  style={styles.icon}
                  size={20}
                  color="#333333"
                />
                <FlatText
                  text={t('changeLanguage')}
                  font="q_regular"
                  size={18}
                  color="#333333"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {isAuthenticated && (
          <View style={styles.singleList}>
            <TouchableOpacity onPress={() => navigation.navigate('HelpCenter')}>
              <View style={styles.flexDirection}>
                <View style={styles.flexContain}>
                  <MaterialIcons
                    name="message"
                    style={styles.icon}
                    size={20}
                    color="#333333"
                  />

                  <FlatText
                    text={t('helpCenter')}
                    font="q_regular"
                    size={18}
                    color="#333333"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {isAuthenticated && (
          <View style={styles.singleList}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Notification', {
                  newNotification: data?.notifications,
                })
              }>
              <View style={styles.flexDirection}>
                <View style={styles.flexContain}>
                  <View style={styles.badge}>
                    {notification !== 0 && <Badge>{notification}</Badge>}
                  </View>
                  <MaterialCommunityIcons
                    name="bell"
                    style={styles.icon}
                    size={20}
                    color="#333333"
                  />

                  <FlatText
                    text={t('notification')}
                    font="q_regular"
                    size={18}
                    color="#333333"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {isAuthenticated && (
          <View style={styles.singleList}>
            <TouchableOpacity onPress={logout}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#333333" />
              ) : (
                <View style={styles.flexDirection}>
                  <View style={styles.flexContain}>
                    <AntDesign
                      style={styles.icon}
                      name="logout"
                      size={20}
                      color="#333333"
                    />
                    <FlatText
                      text={t('logout')}
                      font="q_regular"
                      size={18}
                      color="#333333"
                    />
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
