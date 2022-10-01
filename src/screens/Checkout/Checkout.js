import React from 'react';
import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import {ActivityIndicator, Checkbox} from 'react-native-paper';
import styles from './styles';
import config from '../../utils/config';
import Header from '../sectionComponent/Header';
import FlatText from '../../components/FlatText';
import {useDispatch, useSelector} from 'react-redux';
import {
  useApplyCouponMutation,
  useCreateOrderMutation,
  useGetDeliveryFeeQuery,
  useGetTaxQuery,
} from '../../store/services/api';
import Toast from 'react-native-toast-message';
import {removeAllItemFromCart} from '../../store/slices/cartSlice';
import {useTranslation} from 'react-i18next';
import {RadioButton} from 'react-native-paper';
import axios from 'axios';
import cartTotalAmount from '../../utils/cartTotalAmount';
import publicIP from 'react-native-public-ip';
import DistanceMap from './components/DistanceMap';
import FlatTextUnderLine from '../../components/FlatTextUnderLine';

export default function Checkout({navigation}) {
  const {t} = useTranslation();
  const userInfo = useSelector(state => state.userInfo);
  const storedLocation = useSelector(state => state.location.address);
  const [createOrder, {error, isLoading}] = useCreateOrderMutation();
  const [couponCode, setCouponCode] = React.useState('');
  const [address, setAddress] = React.useState(storedLocation);
  const [name, setName] = React.useState(userInfo.name);
  const [phone, setPhone] = React.useState(userInfo.phone);
  const [deliveryFee, setDeliveryFee] = React.useState(0);
  const [ip, setIp] = React.useState('');
  const [applyCouponBtnActive, setApplyCouponBtnActive] = React.useState(false);
  const [applyCoupon] = useApplyCouponMutation();
  const cartData = useSelector(state => state.cart);
  const [couponDiscount, setCouponDiscount] = React.useState(0);
  const location = useSelector(state => state.location);
  const taxPercentage = useGetTaxQuery();
  const {latitude, longitude} = location;
  const dispatch = useDispatch();
  const getDeliveryFee = useGetDeliveryFeeQuery();
  const {cart, restaurantId, restaurantLocation} = cartData;
  const total = cartTotalAmount(cart);
  const [checked, setChecked] = React.useState('cod');
  const [couponId, setCouponId] = React.useState(null);
  const [calculateDistance, setCalculateDistance] = React.useState(0);
  const [coordinates, setCoordinates] = React.useState([]);

  const [termsAndCondition, setTermsAndCondition] = React.useState(false);
  React.useEffect(() => {
    publicIP()
      .then(ip => {
        setIp(ip);
      })
      .catch(error => {
        console.log(error);
        // 'Unable to get IP address.'
      });
  }, []);

  React.useEffect(() => {
    setCoordinates([
      {
        latitude: latitude,
        longitude: longitude,
      },
      {
        latitude: restaurantLocation?.latitude,
        longitude: restaurantLocation?.longitude,
      },
    ]);
  }, [
    latitude,
    location,
    longitude,
    restaurantLocation?.latitude,
    restaurantLocation?.longitude,
  ]);

  let orderId;
  const getDeliveryFeeAmount = React.useCallback(() => {
    if (getDeliveryFee?.data !== undefined) {
      const delivery_fee = calculateDistance * getDeliveryFee?.data;

      let formatted_delivery_fee = parseInt(delivery_fee);
      setDeliveryFee(formatted_delivery_fee);
      return formatted_delivery_fee;
    } else {
      console.log('error======================');
    }
  }, [
    getDeliveryFee,
    latitude,
    longitude,
    restaurantLocation,
    calculateDistance,
    coordinates,
  ]);
  console.log('termsAndCondition', termsAndCondition);
  const handleApplyCoupon = React.useCallback(async () => {
    if (couponCode === '') {
      Toast.show({
        text1: 'Please enter all the fields',
        type: 'info',
      });
      return;
    } else {
      try {
        const payload = {
          code: couponCode,
          restaurant_id: restaurantId,
          total_amount: total,
        };
        const {data, error} = await applyCoupon(payload);

        if (data.message === 'Coupon Successfully Applied') {
          Toast.show({
            text1: 'Coupon Successfully Applied',
            type: 'success',
          });
          setApplyCouponBtnActive(false);
          setCouponDiscount(data.total_discount_amount);
          setCouponId(data.coupon_id);
        } else {
          Toast.show({
            text1: 'Coupon Failed!',
            type: 'error',
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [applyCoupon, couponCode, restaurantId, total]);
  const handleCreateOrder = async () => {
    try {
      if (address === '' || name === '' || phone === '' || !termsAndCondition) {
        Toast.show({
          text1: 'Please enter all the fields',
          type: 'error',
        });
      } else {
        const sendData = {
          vendor_id: restaurantId,
          payment_method: checked,
          coupon_id: couponId,
          order_type: 1,
          payment_status: 0,
          total: total,
          shipping: deliveryFee,
          commission: 0,
          discount: couponDiscount,
          status: 2,
          name: name,
          phone: phone,
          delivery_address: address,
          latitude: latitude,
          longitude: longitude,
          order_note: 'Lorem ispum',
          datacart: cart,
        };

        const response = await createOrder(sendData);

        if (response?.data?.message === 'Order Successful') {
          dispatch(removeAllItemFromCart());
          Toast.show({
            text1: 'Order Placed Successfully',
            type: 'success',
          });
          orderId = response.data.data.id;
          if (checked === 'cod') {
            navigation.navigate('Thanks', {
              orderId: response.data.data.id,
            });
          } else {
            const data = {
              username: config.spayUser,
              password: config.spayPassword,
            };
            const response = await axios.post(
              config.spayBaseUrl + '/api/get_token',
              data,
            );
            console.log({response});
            if (response.data.message === 'Ok') {
              let amount = Math.round(
                total -
                  couponDiscount +
                  deliveryFee +
                  total * taxPercentage?.data?.tax * 0.01,
              );
              let token = response.data.token;
              const formdata = new FormData();
              formdata.append('prefix', 'FMB');
              formdata.append('token', token);
              formdata.append(
                'return_url',
                config.spayBaseUrl + '/response/success',
              );
              formdata.append(
                'cancel_url',
                config.spayBaseUrl + '/response/cancel',
              );
              formdata.append('store_id', response.data.store_id);
              formdata.append('amount', amount.toString());
              formdata.append('order_id', orderId.toString());
              formdata.append('currency', 'BDT');
              formdata.append('customer_name', name);
              formdata.append('customer_address', address);
              formdata.append('customer_phone', phone.toString());
              formdata.append('customer_city', location.city);
              formdata.append('customer_post_code', 'null');
              formdata.append('client_ip', ip);

              var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow',
              };

              const res = await fetch(
                config.spayBaseUrl + '/api/secret-pay',
                requestOptions,
              );

              const result = await res.json();
              if (result?.checkout_url?.includes('spaycheckout')) {
                navigation.navigate('PaymentScreen', {
                  orderId: orderId,
                  shurjoPayOrderId: result.sp_order_id,
                  url: result.checkout_url,
                  token: token,
                });
                setTermsAndCondition(false);
              } else {
                alert(JSON.stringify(result));
              }
            } else {
              console.log({
                response,
              });
            }
          }
        } else {
          Toast.show({
            text1: 'Order Placing Failed',
            type: 'error',
          });
        }
      }
    } catch (e) {
      console.log('e=========================>', e);
      alert('Error: ' + e.message);
    }
  };

  React.useEffect(() => {
    getDeliveryFeeAmount();
  }, [getDeliveryFeeAmount]);
  if (getDeliveryFee?.isLoading) {
    return (
      <View style={styles.flex}>
        <Header />
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#ddd" />
        </View>
      </View>
    );
  } else if (error) {
    // console.log({ error });
    return (
      <View style={styles.flex}>
        <Header />
        <View style={styles.container}>
          <FlatText text={t('wrong')} font="q_regular" size={20} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={{marginBottom: 20}}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <View style={styles.StoreName}>
              <FlatText
                text={t('yourOrder') + ' ' + userInfo.name}
                font="q_bold"
                size={18}
              />
            </View>
            <View style={styles.CartGroup}>
              {cart.map((item, i) => {
                return (
                  <View style={styles.cartItem} key={i}>
                    <View>
                      <FlatText
                        text={item.quantity + ' * ' + item.title}
                        font="q_semibold"
                        color="#333"
                        size={16}
                      />
                    </View>
                    <View>
                      <FlatText
                        text={
                          config.CURRENCY_CODE +
                          ' ' +
                          item.price * item.quantity
                        }
                        font="q_semibold"
                        color="#333"
                        size={16}
                      />
                    </View>
                  </View>
                );
              })}
            </View>
            <View>
              <View style={styles.cartItem}>
                <View>
                  <FlatText
                    text={t('total')}
                    font="q_semibold"
                    color="#333"
                    size={16}
                  />
                </View>
                <View>
                  <FlatText
                    text={config.CURRENCY_CODE + ' ' + total}
                    font="q_semibold"
                    color="#333"
                    size={16}
                  />
                </View>
              </View>
              {couponDiscount !== 0 && (
                <View>
                  <View style={styles.cartItem}>
                    <View>
                      <FlatText
                        text={t('discount')}
                        font="q_semibold"
                        color="#333"
                        size={16}
                      />
                    </View>
                    <View>
                      <FlatText
                        text={config.CURRENCY_CODE + ' ' + couponDiscount}
                        font="q_semibold"
                        color="#333"
                        size={16}
                      />
                    </View>
                  </View>
                </View>
              )}
              <View style={styles.cartItem}>
                <View>
                  <FlatText
                    text={t('subTotal')}
                    font="q_semibold"
                    color="#333"
                    size={16}
                  />
                </View>
                <View>
                  <FlatText
                    text={
                      config.CURRENCY_CODE +
                      ' ' +
                      parseFloat(total - couponDiscount)
                    }
                    font="q_semibold"
                    color="#333"
                    size={16}
                  />
                </View>
              </View>
              <View style={styles.cartItem}>
                <View>
                  <FlatText
                    text={t('deliveryFee')}
                    font="q_semibold"
                    color="#333"
                    size={16}
                  />
                </View>
                <View>
                  <FlatText
                    text={config.CURRENCY_CODE + ' ' + deliveryFee}
                    font="q_semibold"
                    color="#333"
                    size={16}
                  />
                </View>
              </View>
              <View style={styles.cartItem}>
                <View>
                  <FlatText
                    text={
                      t('tax') + ` (${parseInt(taxPercentage?.data?.tax)}%)`
                    }
                    font="q_semibold"
                    color="#333"
                    size={16}
                  />
                </View>
                <View>
                  <FlatText
                    text={
                      config.CURRENCY_CODE +
                      ' ' +
                      total * taxPercentage?.data?.tax * 0.01
                    }
                    font="q_semibold"
                    color="#333"
                    size={16}
                  />
                </View>
              </View>
              <View style={styles.cartItem}>
                <View>
                  <FlatText
                    text={t('total') + '(Incl. VAT)'}
                    font="q_bold"
                    color="#333"
                    size={17}
                  />
                </View>
                <View>
                  <FlatText
                    text={
                      config.CURRENCY_CODE +
                      ' ' +
                      Math.round(
                        total +
                          deliveryFee +
                          total * taxPercentage?.data?.tax * 0.01 -
                          couponDiscount,
                      )
                    }
                    font="q_bold"
                    color="#333"
                    size={17}
                  />
                </View>
              </View>
            </View>
            {applyCouponBtnActive ? (
              <View style={styles.couponContainer}>
                <View style={styles.coupon}>
                  <FlatText
                    text={t('applyCoupon')}
                    font="q_semibold"
                    color="#ff3252"
                    size={16}
                  />
                  <View style={styles.couponForm}>
                    <TextInput
                      style={styles.couponInput}
                      placeholder={t('enterCoupon')}
                      onChangeText={text => setCouponCode(text)}
                      value={couponCode}
                    />
                    <TouchableOpacity
                      style={styles.applyCouponBtn}
                      onPress={handleApplyCoupon}>
                      <FlatText
                        text={'Apply'}
                        font="q_semibold"
                        color="#fff"
                        size={18}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.cardForm}
                onPress={() => {
                  setApplyCouponBtnActive(true);
                }}>
                <FlatText
                  text={t('applyCouponBtn')}
                  font="q_semibold"
                  color="#ff3252"
                  size={18}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.mainContainer}>
            <DistanceMap
              coordinates={coordinates}
              setCalculateDistance={setCalculateDistance}
            />
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.deliveryTitle}>
              <FlatText text={t('deliveryDetails')} font="q_bold" size={18} />
            </View>
            <View style={styles.checkoutForm}>
              <View style={styles.formGroup}>
                <FlatText
                  text={t('name')}
                  font="q_regular"
                  size={16}
                  color="#333"
                />
                <TextInput
                  value={name}
                  style={styles.inputText}
                  placeholder={t('name')}
                  placeholderTextColor="#333"
                  onChangeText={text => setName(text)}
                />
              </View>
              <View style={styles.formGroup}>
                <FlatText
                  text={t('phone')}
                  font="q_regular"
                  size={16}
                  color="#333"
                />
                <View>
                  <TextInput
                    value={phone}
                    style={styles.inputText}
                    keyboardType={'phone-pad'}
                    placeholder={t('phone')}
                    placeholderTextColor="#333"
                    onChangeText={text => setPhone(text)}
                  />
                </View>
              </View>
              <View style={styles.formGroup}>
                <FlatText
                  text={t('address')}
                  font="q_regular"
                  size={16}
                  color="#333"
                />
                <TextInput
                  multiline={true}
                  style={styles.textarea}
                  placeholder={t('address')}
                  placeholderTextColor="#333"
                  value={address}
                  selectTextOnFocus={false}
                  onChangeText={text => setAddress(text)}
                />
              </View>
              <View>
                <View style={styles.dFlex}>
                  <RadioButton
                    color="#ff3252"
                    value="cod"
                    status={checked === 'cod' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('cod')}
                  />
                  <Image
                    source={require('../../../assets/cod.png')}
                    style={styles.shurjoPay}
                  />
                </View>
                <View style={styles.dFlex}>
                  <RadioButton
                    value="shurjoPay"
                    color="#ff3252"
                    status={checked === 'shurjoPay' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('shurjoPay')}
                  />
                  <Image
                    source={require('../../../assets/shurjopay.png')}
                    style={styles.shurjoPay}
                  />
                </View>
              </View>
              <View>
                <View style={styles.terms}>
                  <Checkbox
                    color="#ff3252"
                    status={termsAndCondition ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setTermsAndCondition(!termsAndCondition);
                    }}
                  />

                  <View
                    style={{
                      width: '90%',
                      alignItems: 'baseline',
                    }}>
                    <View style={styles.dFlex}>
                      <FlatText
                        text={t('agree') + ' '}
                        font="q_semibold"
                        color="#333"
                        size={16}
                      />
                      <Pressable
                        style={{
                          width: 'auto',
                        }}
                        onPress={() =>
                          navigation.navigate('RefundAndReturnPolicy')
                        }>
                        <FlatTextUnderLine
                          text={t('conditions')}
                          font="q_semibold"
                          color="#ff3252"
                          size={16}
                        />
                      </Pressable>
                      <FlatText
                        text={', '}
                        font="q_semibold"
                        color="#333"
                        size={16}
                      />
                    </View>
                    <View style={styles.dFlex}>
                      <Pressable
                        style={{
                          width: 'auto',
                        }}
                        onPress={() => navigation.navigate('PrivacyPolicy')}>
                        <FlatTextUnderLine
                          text={t('privacy')}
                          font="q_semibold"
                          color="#ff3252"
                          size={16}
                        />
                      </Pressable>
                      <FlatText
                        text={' ' + t('and') + ' '}
                        font="q_semibold"
                        color="#333"
                        size={16}
                      />
                      <Pressable
                        onPress={() =>
                          navigation.navigate('RefundAndReturnPolicy')
                        }>
                        <FlatTextUnderLine
                          text={t('refund')}
                          font="q_semibold"
                          color="#ff3252"
                          size={16}
                        />
                      </Pressable>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.orderConfirm}
                  onPress={handleCreateOrder}>
                  {isLoading ? (
                    <ActivityIndicator color="#fff" size="small" />
                  ) : (
                    <FlatText
                      text={t('placeOrder')}
                      font="q_semibold"
                      color="#fff"
                      size={18}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{marginBottom: 200}} />
        <View style={{marginBottom: 200}} />
      </View>
    );
  }
}
