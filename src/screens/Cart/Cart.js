import React from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Header from '../sectionComponent/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import FlatText from '../../components/FlatText';
import {useDispatch, useSelector} from 'react-redux';
import config from '../../utils/config';
import {addOneItem, removeOneItemFromCart} from '../../store/slices/cartSlice';
import {useTranslation} from 'react-i18next';

export default function Cart({navigation}) {
  const {t} = useTranslation();
  const cartData = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const {cart} = cartData;
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleCheckout = () => {
    isAuthenticated
      ? navigation.navigate('Checkout')
      : navigation.navigate('Login');
  };

  if (cart.length > 0) {
    return (
      <View style={styles.flex}>
        <Header />
        <ScrollView style={styles.scrollHeight}>
          {cart.map((item, i) => {
           
            return (
              <View style={styles.singleCartItem} key={i}>
                <Image
                  style={styles.cartItemImage}
                  source={
                    item.preview === 'addOne'
                      ? require('../../../assets/addon.png')
                      : {uri: config.https + item?.preview}
                  }
                />
                <View style={styles.widthSection}>
                  <View style={styles.cartRightSection}>
                    <FlatText
                      text={item.title}
                      font="q_regular"
                      size={18}
                      color="#333333"
                    />
                    <FlatText
                      text={
                        config.CURRENCY_CODE + ' ' + item.price * item.quantity
                      }
                      font="q_regular"
                      size={18}
                      color="#333333"
                    />
                  </View>
                  <View style={styles.cartRightSection}>
                    <FlatText
                      text={config.CURRENCY_CODE + ' ' + item.price}
                      font="q_regular"
                      size={17}
                      color="#333333"
                    />
                    <View style={styles.qualityCart}>
                      {item.quantity == 1 ? (
                        <TouchableOpacity
                          onPress={() => dispatch(removeOneItemFromCart(item))}>
                          <MaterialCommunityIcons
                            name="delete-circle"
                            size={28}
                            color="#C01C27"
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => dispatch(removeOneItemFromCart(item))}>
                          <Entypo
                            name="circle-with-minus"
                            size={28}
                            color="#C01C27"
                          />
                        </TouchableOpacity>
                      )}
                      <FlatText
                        text={' ' + item.quantity + ' '}
                        font="q_semibold"
                        size={19}
                        color="#333333"
                      />
                      <TouchableOpacity
                        onPress={() => dispatch(addOneItem(item))}>
                        <Entypo
                          name="circle-with-plus"
                          size={28}
                          color="#C01C27"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={handleCheckout}>
            <FlatText
              text={t('checkout')}
              font="q_semibold"
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.flex}>
        <Header />
        <View style={styles.mainContainer}>
          <Image
            style={styles.cartImg}
            source={require('./../../../assets/empty-cart.gif')}
          />
          <FlatText text={t('empty')} font="q_regular" size={22} />
        </View>
      </View>
    );
  }
}
