import {View, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import styles from '../styles';
import FlatText from '../../../components/FlatText';
import config from '../../../utils/config';

export default function RenderFoodItem({item, open, setSelectedItem}) {
  const onClickAddCart = () => {
    setSelectedItem(item);
    open();
  };

  return (
    <View style={styles.singleFood}>
      <TouchableOpacity onPress={onClickAddCart}>
        <View>
          <Image
            style={styles.foodImage}
            source={{uri: 'http:' + item.preview.content}}
          />
          <View style={styles.foodTitle}>
            <FlatText
              text={item.title}
              font="q_bold"
              size={16}
              color="#2A2B44"
            />
          </View>
          <View style={styles.foodPrice}>
            <View>
              <FlatText
                font="q_semibold"
                size={16}
                color="#333"
                text={config.CURRENCY_CODE + ' ' + item.price.price}
              />
            </View>
            <View>
              <Entypo name="squared-plus" size={30} color="#ff3252" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
