import {View, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import styles from '../styles';
import FlatText from '../../../components/FlatText';
import {useNavigation} from '@react-navigation/native';

export default function RestaurantByCategory({item}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('BrowseByCategory', {
          name: item.name,
        })
      }
      style={styles.renderCategory}>
      <View style={styles.renderBg}>
        <ImageBackground
          style={styles.categoryBgImg}
          imageStyle={styles.categoryImageStyle}
          source={{uri: item.avatar}}>
          <View style={styles.overlay} />
          <View style={styles.categoryNameStyle}>
            <FlatText
              color="#fff"
              font="q_semibold"
              text={item.name}
              size={14}
            />
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}
