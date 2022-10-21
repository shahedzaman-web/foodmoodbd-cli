import {FlatList, View} from 'react-native';
import React from 'react';
import styles from './../styles';
import RenderFoodItem from './RenderFoodItem';
import FlatText from '../../../components/FlatText';

export default function RenderProducts({
  item,
  restaurantId,
  restaurantLocation,
  setSelectedItem,
  open,
}) {
  return (
    <View style={styles.productContainer}>
      <View style={styles.main}>
        <View style={styles.height70}>
          <View style={styles.menuItem}>
            <View style={styles.menuTitle}>
              <FlatText
                text={item.name}
                font="q_bold"
                size={16}
                color="#2A2B44"
              />
            </View>
          </View>
        </View>

        <View style={styles.foodList}>
          <FlatList
            data={item.products}
            numColumns={2}
            renderItem={({item}) => (
              <RenderFoodItem
                open={open}
                restaurantId={restaurantId}
                item={item}
                restaurantLocation={restaurantLocation}
                setSelectedItem={setSelectedItem}
              />
            )}
            keyExtractor={index => index.toString()}
          />
        </View>
      </View>
    </View>
  );
}
