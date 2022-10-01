import React from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Toast from 'react-native-toast-message';
import Header from '../sectionComponent/Header';
import FlatText from '../../components/FlatText';
import {useSelector} from 'react-redux';
import {useLogoutUserMutation} from '../../store/services/authApi';
import {ActivityIndicator} from 'react-native-paper';

export default function Account({navigation}) {
  const userInfo = useSelector(state => state.userInfo);
  const [logoutUser, {isLoading}] = useLogoutUserMutation();

  const logout = async () => {
    try {
      const res = await logoutUser();

      if (res.data.message === 'logout success') {
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
    <View style={styles.flex}>
      <Header />
      <ScrollView style={styles.flex}>
        <View style={styles.conatiner}>
          <Image
            style={styles.profileImg}
            source={{
              uri: userInfo.avatar,
            }}
          />
          <View style={styles.username}>
            <FlatText text={userInfo.name} font="q_regular" size={22} />
          </View>
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
                    color="#666"
                  />
                  <FlatText text=" Homepage" font="q_regular" size={18} />
                </View>
                <Ionicons name="ios-arrow-forward" size={24} color="#666" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.singleList}>
            <TouchableOpacity onPress={() => navigation.navigate('Order')}>
              <View style={styles.flexDirection}>
                <View style={styles.flexContain}>
                  <Octicons
                    style={styles.icon}
                    name="list-unordered"
                    size={20}
                    color="#666"
                  />
                  <FlatText text=" All Orders" font="q_regular" size={18} />
                </View>
                <Ionicons name="ios-arrow-forward" size={24} color="#666" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.singleList}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <View style={styles.flexDirection}>
                <View style={styles.flexContain}>
                  <Feather
                    style={styles.icon}
                    name="settings"
                    size={20}
                    color="#666"
                  />
                  <FlatText text="Settings" font="q_regular" size={18} />
                </View>
                <Ionicons name="ios-arrow-forward" size={24} color="#666" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.singleList}>
            <TouchableOpacity onPress={logout}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#666" />
              ) : (
                <View style={styles.flexDirection}>
                  <View style={styles.flexContain}>
                    <AntDesign
                      style={styles.icon}
                      name="logout"
                      size={20}
                      color="#666"
                    />
                    <FlatText text=" Logout" font="q_regular" size={18} />
                  </View>

                  <Ionicons name="ios-arrow-forward" size={24} color="#666" />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
