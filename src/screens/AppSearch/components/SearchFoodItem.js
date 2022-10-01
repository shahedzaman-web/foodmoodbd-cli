import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import styles from '../styles';
import FlatText from '../../../components/FlatText';

import {useNavigation} from '@react-navigation/native';
import checkIfStartsWithHttps from '../../../utils/checkIfStartsWithHttps';
import Products from './Products';

// import {  Portal } from 'react-native-portalize';
export default function SearchFoodItem({item}) {
  const [photo, setPhoto] = React.useState('');
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    const preview = item.avatar;
    setPhoto(checkIfStartsWithHttps(preview));
  }, [item.avatar]);

  return (
    <View style={styles.singleFood}>
      <TouchableOpacity
        style={styles.renderfeaureds}
        onPress={() =>
          navigation.navigate('Details', {
            id: item.id,
          })
        }>
        <View>
          <Image style={styles.imageWidth} source={{uri: photo}} />
          <View style={styles.badge}>
            <FlatText
              text={item.time}
              color="#333"
              font="q_semibold"
              textalign="center"
            />
            <FlatText
              text="MIN"
              color="#333"
              font="q_semibold"
              textalign="center"
            />
          </View>
          <View>
            <View style={styles.productTitle}>
              <FlatText
                text={item.name}
                size={16}
                font="q_semibold"
                color="#333"
              />
              <View>
                <View style={styles.productContentFlex}>
                  <Entypo
                    style={styles.paddingHorizontal5}
                    name="star"
                    size={15}
                    color="#C01C27"
                  />
                  <FlatText
                    text={item.avg_ratting}
                    size={15}
                    font="q_semibold"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={item.products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Products item={item} />}
      />
    </View>
  );
}
