import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Linking,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './styles';
import Geolocation from 'react-native-geolocation-service';

import Geocoder from 'react-native-geocoding';
import {storeLocation} from '../../store/slices/locationSlice';
import {setScreenViewed} from '../../store/slices/welcomeSlice';
import FlatText from '../../components/FlatText';
import {useTranslation} from 'react-i18next';
import config from '../../utils/config';

Geocoder.init(config.GOOGLE_MAP_API_KEY_Geocoder);
export default function Welcome({navigation}) {
  const {t} = useTranslation();
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
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
  };

  const getCurrentPosition = React.useCallback(async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      async pos => {
        setPosition(pos);
        const {latitude, longitude} = pos.coords;
        console.log({position});
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
        dispatch(storeLocation(storedData));
        dispatch(setScreenViewed());
        console.log({storedData});
        navigation.navigate('Root');
        setLoading(false);
      },
      error => alert('GetCurrentPosition Error', JSON.stringify(error)),
    );
  }, [position]);
  console.log({position});
  const currentLocation = async () => {
    try {
      setLoading(true);
      if (position === null) {
        getCurrentPosition();
      }
    } catch (e) {
      setLoading(false);
      console.log({e});
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.bannerImage}
        source={require('./../../../assets/delivery.gif')}
      />
      <View style={styles.marginBottom}>
        <View>
          <FlatText
            text={t('welcomeTitle')}
            font="q_regular"
            size={17}
            textalign="center"
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.currenLocationBtn}
          onPress={() => currentLocation()}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <FlatText
              text={t('useCurrentLocation')}
              font="q_regular"
              size={18}
              color="#fff"
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.selectButton}></View>
    </View>
  );
}
