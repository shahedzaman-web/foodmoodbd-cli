import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import FlatText from '../../components/FlatText';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Geolocation from 'react-native-geolocation-service';
import styles from './styles';
import mapStyle from './mapStyle';
import Geocoder from 'react-native-geocoding';
Geocoder.init(config.GOOGLE_MAP_API_KEY_Geocoder);
import {storeLocation} from '../../store/slices/locationSlice';

import {useTranslation} from 'react-i18next';
import config from '../../utils/config';
export default function Search({navigation}) {
  const {t} = useTranslation();
  const storedLocation = useSelector(state => state.location);
  const {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;

  const LATITUDE_DELTA = 0.007;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const dispatch = useDispatch();
  const {latitude, longitude} = storedLocation;
  const [pin, setPin] = React.useState({
    latitude: latitude,
    longitude: longitude,
  });
  const [region, setRegion] = React.useState({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [detailsLocation, setDetailsLocation] = React.useState({});
  const [address, setAddress] = React.useState('');
  const [position, setPosition] = React.useState(null);

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setPosition(pos);
      },
      error => alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  React.useEffect(() => {
    getCurrentPosition();
  }, []);
  const handleSetLocation = async () => {
    const {lat, lng} = detailsLocation.geometry.location;

    const response = await Geocoder.from({lat, lng});
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
      latitude: lat,
      longitude: lng,
      address: address,
      city: city,
      state: state,
      country: country,
      premise: premise,
      route: route,
    };

    dispatch(storeLocation(storedData));
    navigation.navigate('Home');
  };

  const currentLocation = async () => {
    try {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      setRegion({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
      const response = await Geocoder.from({latitude: lat, longitude: lon});
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
        latitude: lat,
        longitude: lon,
        address: formattedAddress[0],
        city: city,
        state: state,
        country: country,
        premise: premise,
        route: route,
      };
      dispatch(storeLocation(storedData));
      setAddress(formattedAddress[0]);
      navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.customMap}
          initialRegion={{
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LATITUDE_DELTA,
          }}
          customMapStyle={mapStyle}
          region={{
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LATITUDE_DELTA,
          }}>
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
          />
          <Marker
            coordinate={pin}
            pinColor="black"
            draggable={true}
            onDragStart={e => {
              // console.log("Drag start", e.nativeEvent.coordinates);
            }}
            onDragEnd={e => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}>
            <Callout>
              <Text>I'm here</Text>
            </Callout>
          </Marker>
          <Circle center={pin} radius={1000} />
        </MapView>
        <View style={styles.searchContent}>
          <GooglePlacesAutocomplete
            placeholder={address !== '' ? address : 'Search'}
            fetchDetails={true}
            enablePoweredByContainer={false}
            GooglePlacesSearchQuery={{
              rankby: 'distance',
            }}
            onPress={(data, details = null) => {
              setDetailsLocation(details);

              setAddress(data.description);

              setRegion({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LATITUDE_DELTA,
              });
            }}
            query={{
              key: config.GOOGLE_MAP_API_KEY_Geocoder,
              language: 'en',
              components: 'country:bd',
              types: 'establishment',
              radius: 300,
              location: `${region.latitude}, ${region.longitude}`,
            }}
            styles={{
              container: {
                flex: 0,
                top: 50,
                left: 0,
                right: 0,
                alignSelf: 'center',
                position: 'absolute',

                width: '100%',
                zIndex: 1,
              },
              textInput: {
                color: '#5d5d5d',
                fontSize: 16,
              },

              listView: {backgroundColor: 'white'},
            }}
          />
        </View>
        <View style={styles.btnArea}>
          <View style={styles.currentLocation}>
            <TouchableOpacity onPress={currentLocation}>
              <FontAwesome name="location-arrow" size={32} color="#666" />
            </TouchableOpacity>
          </View>
          <View style={styles.btnContentArea}>
            <TouchableOpacity
              style={styles.btnTouchAble}
              onPress={handleSetLocation}>
              <FlatText
                color="#fff"
                size={20}
                font="q_semibold"
                text={t('setLocation')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
