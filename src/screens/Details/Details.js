import React from 'react';
import {
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import FlatText from '../../components/FlatText';
import Header from '../sectionComponent/Header';
import {
  useFavouritesListQuery,
  useGetRestaurantDetailsByIdQuery,
  useGetRestaurantProductsWithStoreIdQuery,
} from '../../store/services/api';
import {Modalize} from 'react-native-modalize';
import {RadioButton} from 'react-native-paper';
import {useModalize} from 'react-native-modalize/lib/utils/use-modalize';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import RenderProducts from './components/RenderProducts';
import {useDispatch, useSelector} from 'react-redux';
import config from '../../utils/config';
import {addToCartItems} from '../../store/slices/cartSlice';
import checkIfStartsWithHttps from '../../utils/checkIfStartsWithHttps';
import {useIsFocused} from '@react-navigation/native';
import {Portal} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import cartTotalAmount from '../../utils/cartTotalAmount';
import cartTotalQuantity from '../../utils/cartTotalQuantity';
export default function Details({navigation, route}) {
  const {isFetching, data, error} = useGetRestaurantDetailsByIdQuery(
    route.params.id,
  );
  const {ref, open, close} = useModalize();
  const [selectedItem, setSelectedItem] = React.useState({});
  const getRestaurantProductsWithStoreId =
    useGetRestaurantProductsWithStoreIdQuery(route.params.id);
  const [selectedAddOne, setSelectedAddOne] = React.useState({});
  const [photo, setPhoto] = React.useState('');
  const [isRestaurantFavorite, setIsRestaurantFavorite] = React.useState(false);
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cart);
  const {t} = useTranslation();
  const [productQuantity, setProductQuantity] = React.useState(1);
  const favouritesList = useFavouritesListQuery();
  const restaurantId = route.params.id;
  const token = useSelector(state => state.auth.token);

  const isFocused = useIsFocused();
  React.useLayoutEffect(() => {
    if (data !== undefined && !isFetching) {
      const preview = checkIfStartsWithHttps(data?.info?.info?.preview);

      setPhoto(preview);
    }
  }, [data?.info?.info?.preview, route.params.id, isFetching, data]);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  React.useEffect(() => {
    if (Object.keys(selectedItem).length !== 0) {
      let existingItem = cartData.cart.find(
        x => x.title === selectedItem.title,
      );

      if (existingItem !== undefined) {
        setProductQuantity(existingItem?.quantity);
      } else {
        setProductQuantity(1);
      }
    }
  }, [cartData.cart, selectedItem]);

  const handleAddToCart = () => {
    // dispatch(removeAllItemFromCart())
    let payload;

    if (Object.keys(selectedAddOne).length !== 0 && productQuantity > 0) {
      payload = {
        item: {
          quantity: productQuantity,
          price: selectedItem.price.price,
          food_id: selectedItem.id,
          title: selectedItem.title,
          preview: selectedItem.preview.content,
        },
        id: route.params.id,
        location: data?.info?.info?.location,
        addOnes: {
          quantity: 1,
          price: selectedAddOne.price.price,
          food_id: selectedAddOne.id,
          title: selectedAddOne.title,
          preview: 'addOne',
        },
      };
    } else {
      payload = {
        item: {
          quantity: productQuantity,
          price: selectedItem.price.price,
          food_id: selectedItem.id,
          title: selectedItem.title,
          preview: selectedItem.preview.content,
        },
        id: route.params.id,
        location: data?.info?.info?.location,
      };
    }
    dispatch(addToCartItems(payload));
    // dispatch(removeAllItemFromCart())
    setSelectedAddOne({});
    close();
    // setProductQuantity(1);
  };

  const checkForFavorite = React.useCallback(() => {
    if (favouritesList?.data !== undefined) {
      const currentRestaurant = route.params.id;

      const isFavorite = favouritesList?.data?.store_list.find(
        item => item === currentRestaurant,
      );

      if (isFavorite !== undefined) {
        setIsRestaurantFavorite(true);
      } else {
        setIsRestaurantFavorite(false);
      }
    }
  }, [favouritesList?.data, route.params.id]);

  React.useEffect(() => {
    checkForFavorite();
  }, [checkForFavorite]);
  const handleMakeFavorite = async () => {
    try {
      let url = config.base_url + `/add-favourite/${restaurantId}`;
      await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      favouritesList.refetch();
    } catch (err) {
      console.log('err=================>', err);
    }
  };
  const handleRemoveFromFavorite = async () => {
    try {
      await axios.get(config.base_url + `/remove-favourite/${restaurantId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      favouritesList.refetch();
    } catch (err) {
      console.log('err=================>', err);
    }
  };

  if (isFetching) {
    return (
      <View style={styles.flex}>
        <Header />
        <LoadingScreen />
      </View>
    );
  } else {
    if (error) {
      return (
        <View style={styles.flex}>
          <Header />
          <View style={styles.mainContainer}>
            <FlatText text={t('wrong')} font="q_regular" size={22} />
          </View>
        </View>
      );
    } else {
      const {name, delivery, reviews, avg_ratting, location, shopday, about} =
        data?.info?.info;
      return (
        <Portal.Host>
          <View style={styles.flex}>
            <ImageBackground
              style={styles.backgroundImage}
              source={{uri: photo}}>
              <View style={styles.overlay} />
              <View style={styles.detailsImageContent}>
                <View>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons
                      style={styles.backBtn}
                      name="ios-arrow-back-circle"
                      size={42}
                      color="#C01C27"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.flexRow}>
                  {isAuthenticated && (
                    <>
                      {isRestaurantFavorite ? (
                        <TouchableOpacity
                          style={styles.favoriteBtn}
                          onPress={handleRemoveFromFavorite}>
                          <MaterialIcons
                            name="favorite"
                            size={36}
                            color="#C01C27"
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={handleMakeFavorite}
                          style={styles.favoriteBtn}>
                          <MaterialIcons
                            name="favorite-border"
                            size={36}
                            color="#C01C27"
                          />
                        </TouchableOpacity>
                      )}
                    </>
                  )}
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Info', {
                        preview: photo,
                        name: name,
                        about: about,
                        shopday: shopday,
                        reviews: reviews,
                        latitude: parseFloat(location.latitude),
                        longitude: parseFloat(location.longitude),
                        ratting: reviews.length,
                        avg: avg_ratting,
                      })
                    }>
                    <Ionicons
                      name="ios-information-circle"
                      size={36}
                      color="#C01C27"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.bgImageInfoArea}>
                <FlatText
                  text={name}
                  size={22}
                  font="q_semibold"
                  color="#fff"
                />
                <View style={styles.deliveryTime}>
                  <FlatText
                    text={t('delivery') + ' ' + delivery + ' min'}
                    font="q_semibold"
                    color="#fff"
                    size={16}
                  />
                </View>
                <View style={styles.marginTop}>
                  <View style={styles.reviewContent}>
                    <Entypo
                      style={styles.marginRight}
                      name="star"
                      size={18}
                      color="#fff"
                    />
                    <FlatText
                      text={avg_ratting}
                      font="q_semibold"
                      size={18}
                      color="#fff"
                    />
                    <FlatText
                      text={'(' + reviews?.length + ')'}
                      font="q_semibold"
                      size={18}
                      color="#fff"
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
            <Portal>
              {isFocused && (
                <Modalize
                  ref={ref}
                  scrollViewProps={{
                    keyboardShouldPersistTaps: 'handled',
                    scrollEnabled: false,
                  }}
                  disableScrollIfPossible
                  adjustToContentHeight>
                  <View style={styles.addOneContainer}>
                    <View style={styles.row}>
                      <FlatText
                        text={selectedItem?.title}
                        font="q_bold"
                        size={17}
                        color="#2A2B44"
                      />
                      <FlatText
                        font="q_semibold"
                        size={18}
                        color="#333"
                        text={
                          config.CURRENCY_CODE +
                          ' ' +
                          selectedItem?.price?.price
                        }
                      />
                    </View>
                    {selectedItem?.addons?.length > 0 && (
                      <>
                        <View style={styles.divider} />
                        <View style={styles.row}>
                          <View>
                            <FlatText
                              font="q_semibold"
                              size={18}
                              color="#333"
                              text={
                                t('addOnes') + ' ' + `${selectedItem.title}`
                              }
                            />
                            <FlatText
                              font="q_regular"
                              size={16}
                              color="#333"
                              text={t('select')}
                            />
                          </View>
                          <View style={styles.optionalContainer}>
                            <FlatText
                              font="q_bold"
                              size={16}
                              color="#fff"
                              text={t('optional')}
                            />
                          </View>
                        </View>
                        {selectedItem?.addons?.map((addon, i) => {
                          return (
                            <View style={styles.singleAddon} key={i}>
                              <View style={styles.row}>
                                <View style={styles.flexRow}>
                                  <RadioButton
                                    color="#C01C27"
                                    uncheckedColor="#333"
                                    value={selectedAddOne}
                                    status={
                                      selectedAddOne === addon
                                        ? 'checked'
                                        : 'unchecked'
                                    }
                                    onPress={() => setSelectedAddOne(addon)}
                                  />
                                  <FlatText
                                    text={addon.title}
                                    font="q_semibold"
                                    size={15}
                                  />
                                </View>
                                <FlatText
                                  text={
                                    config.CURRENCY_CODE +
                                    ' ' +
                                    addon.price.price
                                  }
                                  font="q_semibold"
                                  size={15}
                                  color="#666"
                                />
                              </View>
                            </View>
                          );
                        })}
                      </>
                    )}
                    <View style={styles.divider} />
                    <FlatText
                      font="q_semibold"
                      size={18}
                      color="#333"
                      text={t('specialInstructions')}
                    />
                    <FlatText
                      font="q_regular"
                      size={14}
                      color="#333"
                      text={t('instructionsDetails')}
                    />
                    <TextInput
                      multiline={true}
                      numberOfLines={6}
                      style={styles.textInput}
                    />
                    <View style={[styles.row, styles.marginTop]}>
                      {productQuantity > 1 ? (
                        <TouchableOpacity
                          onPress={() =>
                            setProductQuantity(prevState => prevState - 1)
                          }>
                          <Entypo
                            name="circle-with-minus"
                            size={28}
                            color="#C01C27"
                          />
                        </TouchableOpacity>
                      ) : (
                        <View />
                      )}

                      {
                        <FlatText
                          text={' ' + productQuantity + ' '}
                          font="q_semibold"
                          size={19}
                          color="#666"
                        />
                      }
                      <TouchableOpacity
                        onPress={() =>
                          setProductQuantity(prevState => prevState + 1)
                        }>
                        <Entypo
                          name="circle-with-plus"
                          size={28}
                          color="#C01C27"
                        />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={styles.addToCartButton}
                        onPress={handleAddToCart}>
                        <Feather
                          style={{paddingRight: 10}}
                          name="shopping-cart"
                          size={20}
                          color="#fff"
                        />
                        <FlatText
                          text={t('addToCart')}
                          font="q_semibold"
                          size={18}
                          color="#fff"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modalize>
              )}
            </Portal>
            <View style={styles.productContainer}>
              {getRestaurantProductsWithStoreId?.data?.products?.length > 0 ? (
                <FlatList
                  data={getRestaurantProductsWithStoreId?.data?.products}
                  numColumns={2}
                  renderItem={({item}) => (
                    <RenderProducts
                      item={item}
                      open={open}
                      setSelectedItem={setSelectedItem}
                      restaurantId={route.params.id}
                      restaurantLocation={data?.info?.info?.location}
                    />
                  )}
                  keyExtractor={item => item.id}
                />
              ) : (
                <View style={styles.mainContainer}>
                  <FlatText text={t('noProducts')} size={22} font="q_regular" />
                </View>
              )}
              <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                  <View style={styles.cartBar}>
                    <View style={styles.leftCartBar}>
                      <FlatText
                        text={cartTotalQuantity(cartData.cart) + ' Items'}
                        font="q_semibold"
                        color="#fff"
                        size={17}
                      />
                      <FlatText
                        text=" | "
                        font="q_semibold"
                        color="#fff"
                        size={17}
                      />
                      <FlatText
                        text={
                          config.CURRENCY_SYMBOL +
                          cartTotalAmount(cartData.cart)
                        }
                        font="q_semibold"
                        color="#fff"
                        size={17}
                      />
                    </View>
                    <View style={styles.rightCarBar}>
                      <FlatText
                        text={t('viewCart')}
                        font="q_semibold"
                        color="#fff"
                        size={17}
                      />
                      <View style={styles.carBarIcon}>
                        <Feather name="shopping-cart" size={20} color="#fff" />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Portal.Host>
      );
    }
  }
}
