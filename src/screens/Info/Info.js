import React from 'react';
import {
  View,
  ImageBackground,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';
import FlatText from '../../components/FlatText';
export default function Info({route, navigation}) {
  const {preview, name, about, shopday, reviews, latitude, longitude, avg} =
    route?.params;

  return (
    <View style={styles.flex}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{uri: preview}}
        accessibilityLabel="Image">
        <View style={styles.overlay} />
        <View style={styles.InfoImgBgConTent}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="ios-arrow-back-circle"
                size={42}
                color="#C01C27"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.infoTitle}>
        <FlatText text={name} size={17} font="q_semibold" color="#333333" />
        <View style={styles.infoFlex}>
          <Entypo
            style={styles.marginRight5}
            name="star"
            size={17}
            color="#333333"
          />
          <FlatText text={avg} font="q_semibold" size={17} color="#333333" />
          <FlatText
            text={'(' + reviews.length + ')'}
            font="q_semibold"
            size={17}
            color="#333333"
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.infoArea}>
          <View style={styles.flexContainer}>
            <FlatText text={about.description} font="q_regular" size={15} />
          </View>
          <View style={styles.flexContainer1}>
            <EvilIcons
              style={styles.locationIcon}
              name="location"
              size={24}
              color="#333333"
            />
            <FlatText
              text={about.full_address}
              style={styles.marginTop5}
              font="q_regular"
              size={15}
            />
          </View>
          <View style={styles.flexContainer}>
            <EvilIcons
              style={styles.locationIcon}
              name="envelope"
              size={24}
              color="#333333"
            />
            <FlatText
              text={' ' + about.email1}
              style={styles.locationIcon1}
              font="q_regular"
              size={15}
            />
          </View>
          <View style={styles.flexContainer}>
            <EvilIcons
              style={styles.locationIcon}
              name="envelope"
              size={24}
              color="#333333"
            />
            <FlatText
              text={' ' + about.email2}
              style={styles.locationIcon1}
              font="q_regular"
              size={15}
            />
          </View>
          <View style={styles.flexContainer}>
            <AntDesign
              name="phone"
              size={20}
              color="#333333"
              style={styles.locationIcon}
            />
            <FlatText
              text={' ' + about.phone1}
              style={styles.locationIcon1}
              font="q_regular"
              size={15}
            />
          </View>
          <View style={styles.flexContainer}>
            <AntDesign
              name="phone"
              size={20}
              color="#333333"
              style={styles.locationIcon}
            />
            <FlatText
              text={' ' + about.phone2}
              style={styles.locationIcon1}
              font="q_regular"
              size={15}
            />
          </View>
          <View style={styles.flexContainer}>
            <EvilIcons
              style={styles.locationIcon}
              name="clock"
              size={24}
              color="black"
            />
            <FlatText text={'Opening Time'} font="q_regular" size={15} />
          </View>
          <View style={styles.flexContainer}>
            <FlatList
              data={shopday}
              renderItem={({item}) => _renderTime(item)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
        <View style={styles.mapArea}>
          <MapView
            style={styles.mapHeight}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.015 * 5,
              longitudeDelta: 0.0121 * 5,
            }}>
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              title={name}
            />
          </MapView>
        </View>
      </ScrollView>
    </View>
  );
}

const _renderTime = item => {
  if (item.status == '1') {
    return (
      <View style={styles.marginBottom}>
        <FlatText
          text={item.day + ': ' + item.opening + '-' + item.close}
          font="q_regular"
          size={16}
        />
      </View>
    );
  }
};
