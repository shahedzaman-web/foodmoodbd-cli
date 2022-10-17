import React from 'react';
import {Dimensions, View, } from 'react-native';
import MapView, { Marker }  from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {useSelector} from 'react-redux';
import config from '../../../utils/config';

export default function DistanceMap({coordinates, setCalculateDistance}) {
  const {width, height} = Dimensions.get('window');
  const storedLocation = useSelector(state => state.location);
  const {latitude, longitude} = storedLocation;
  const ASPECT_RATIO = width / height;

  const LATITUDE_DELTA = 0.00922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const mapRef = React.useRef();

  return (
  <MapView
     
      ref={mapRef}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
      style={{
        alignSelf: 'center',
        width: width * 0.86,
        height: height * 0.4,
      }}>
      <Marker
        coordinate={coordinates[0]}
        image={require('./../../../../assets/locationMarker.png')}
      />
      <Marker
        coordinate={coordinates[1]}
        image={require('./../../../../assets/shopMarker.png')}
      />
      {coordinates.length >= 2 && (
        <MapViewDirections
          origin={coordinates[0]}
          waypoints={
            coordinates.length > 2 ? coordinates.slice(1, -1) : undefined
          }
          destination={coordinates[coordinates.length - 1]}
          apikey={config.GOOGLE_MAP_API_KEY_Geocoder}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
          // onStart={params => {
          //   console.log(
          //     `Started routing between "${params.origin}" and "${params.destination}"`,
          //   );
          // }}
          onReady={result => {
            setCalculateDistance(result.distance);
            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 30,
                bottom: 300,
                left: 30,
                top: 100,
              },
            });
          }}
        />
      )}
    </MapView>
  );
}
