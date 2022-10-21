import React from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {storeLocation} from '../../store/slices/locationSlice';
import FlatText from '../../components/FlatText';
import HeadText from '../../components/HeadText';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useSendUserInfoMutation} from '../../store/services/authApi';
import {useTranslation} from 'react-i18next';
import config from '../../utils/config';

Geocoder.init(config.GOOGLE_MAP_API_KEY_Geocoder);
export default function Header() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const storedAddress = useSelector(state => state.location.address);
  const isLocationAvailable = useSelector(
    state => state.location.isLocationAvailable,
  );
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const [sendUserInfo] = useSendUserInfoMutation();
  const [position, setPosition] = React.useState(null);
  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert(
        `Turn on Location Services to allow "${config.displayName}" to determine your location.`,
        '',
        [
          {text: 'Go to Settings', onPress: openSetting},
          {text: "Don't Use Location", onPress: () => {}},
        ],
      );
    }

    return false;
  };

  const hasLocationPermission = async () => {
    try {
      if (Platform.OS === 'ios') {
        const hasPermission = await hasPermissionIOS();
        return hasPermission;
      }

      if (Platform.OS === 'android' && Platform.Version < 23) {
        return true;
      }

      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (hasPermission) {
        return true;
      }

      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (status === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }

      if (status === PermissionsAndroid.RESULTS.DENIED) {
        ToastAndroid.show(
          'Location permission denied by user.',
          ToastAndroid.LONG,
        );
      } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        ToastAndroid.show(
          'Location permission revoked by user.',
          ToastAndroid.LONG,
        );
      }

      return false;
    } catch (e) {
      alert(e.message);
    }
  };
  const getCurrentPosition = async () => {
    try {
      const hasPermission = await hasLocationPermission();

      if (!hasPermission) {
        return;
      }

      Geolocation.getCurrentPosition(
        pos => {
          setPosition(pos);
        },
        error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } catch (e) {
      alert(e.message);
    }
  };

  React.useEffect(() => {
    const getUserInfo = async () => {
      if (isAuthenticated) {
        await sendUserInfo();
      }
    };
    getUserInfo();
  }, [isAuthenticated, sendUserInfo]);

  const [address, setAddress] = React.useState('');

  React.useEffect(() => {
    const getLocation = async () => {
      try {
        if (position !== null) {
          const {latitude, longitude} = position.coords;

          const response = await Geocoder.from({latitude, longitude});

          let formattedAddress = [];
          response.results.forEach(element => {
            if (element.address_components[0].types[0] !== 'plus_code') {
              formattedAddress.push(element.formatted_address);
            }
          });
          let city, state, country, premise, route;

          response.results.forEach(elements => {
            elements.address_components.forEach(element => {
              if (element.types[0] === 'locality') {
                city = element.long_name;
              }
              if (element.types[0] === 'administrative_area_level_1') {
                state = element.long_name;
              }
              if (element.types[0] === 'country') {
                country = element.long_name;
              }
              if (element.types[0] === 'premise') {
                premise = element.long_name;
              }
              if (element.types[0] === 'route') {
                route = element.long_name;
              }
            });
          });

          const storedData = {
            latitude,
            longitude,
            address: formattedAddress[0],
            city: city,
            state: state,
            country: country,
            premise: premise,
            route: route,
          };

          !isLocationAvailable && dispatch(storeLocation(storedData));
          setAddress(formattedAddress[0]);
        } else {
          getCurrentPosition();
        }
      } catch (e) {
        alert(JSON.stringify(e?.message));
        console.log('e=====================>', e);
      }
    };
    getLocation();
  }, [dispatch, getCurrentPosition, isLocationAvailable, position]);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.menuContainer}>
          <MaterialIcons name="menu" size={24} color="white" />
        </TouchableOpacity>

        <View style={styles.locationContainer}>
          <FlatText
            style={styles.deliverTo}
            text={t('deliveryTo')}
            font="q_semibold"
            color="#ddd"
            size={14}
          />
          <View style={[styles.dFlex, styles.mt2]}>
            <SimpleLineIcons
              style={styles.locationIcon}
              name="location-pin"
              size={15}
              color="#ddd"
            />
            <View
              style={{
                width: '80%',
              }}>
              <HeadText
                text={storedAddress}
                font="q_medium"
                color="#ddd"
                size={12}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.dFlex}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AppSearch')}
          style={styles.searchContainer}>
          <FlatText
            style={styles.search}
            text={t('search')}
            font="q_semibold"
            color="black"
            size={14}
          />
          <SimpleLineIcons name="magnifier" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
