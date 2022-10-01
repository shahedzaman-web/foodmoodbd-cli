import React from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

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
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setPosition(pos);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
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

          response.results.forEach(element => {
            element.address_components.forEach(element => {
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
        alert(JSON.stringify(e));
        console.log('e=====================>', e);
      }
    };
    getLocation();
  }, [dispatch, isLocationAvailable, position]);

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
