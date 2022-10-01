import {View, TouchableOpacity, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import FlatText from '../../../components/FlatText';
import styles from '../styles';
import {useNavigation} from '@react-navigation/native';
import checkIfStartsWithHttps from '../../../utils/checkIfStartsWithHttps';
export default function AllRestaurants({item}) {
  const [photo, setPhoto] = React.useState('');
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    const preview = item.restaurants.preview?.content;
    setPhoto(checkIfStartsWithHttps(preview));
  }, [item.restaurants.preview?.content]);
  let totalRates = item.restaurants.ratting.content;
  return (
    <TouchableOpacity
      style={styles.renderfeaureds}
      onPress={() =>
        navigation.navigate('Details', {
          id: item.restaurants.id,
        })
      }>
      <View>
        <Image style={styles.imageWidth} source={{uri: photo}} />
        <View style={styles.badge}>
          <FlatText
            text={item.restaurants.delivery.content}
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
              text={item.restaurants.name}
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
                  text={item.restaurants.avg_ratting.content}
                  size={15}
                  font="q_semibold"
                />
                <FlatText
                  text={'(' + totalRates + ')'}
                  size={15}
                  font="q_regular"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
