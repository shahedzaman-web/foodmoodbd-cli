import React from 'react';
import {View, ActivityIndicator, RefreshControl} from 'react-native';
import FlatText from '../../components/FlatText';
import Header from '../sectionComponent/Header';
import MapView, {Marker} from 'react-native-maps';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import {useGetUserOrderDetailsQuery} from '../../store/services/api';
import config from '../../utils/config';
import OrderLog from './OrderLog';
import {useTranslation} from 'react-i18next';
import RiderLog from './RiderLog';
import MapViewDirections from 'react-native-maps-directions';

export default function OrderView({route}) {
  const {t} = useTranslation();
  const [refresh, setRefresh] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [fullAddress, setFullAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const {id} = route.params;
  const {data, isLoading, error, refetch} = useGetUserOrderDetailsQuery(id);
  const MINUTE_MS = 10000;
  const mapRef = React.useRef();
  const check = React.useCallback(async () => {
    refetch();
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      check();
    }, MINUTE_MS);
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  const onRefresh = () => {
    refetch();
    isLoading ? setRefresh(true) : setRefresh(false);
  };
  React.useLayoutEffect(() => {
    if (data !== undefined && !isLoading) {
      let {full_address, phone1} = JSON.parse(data?.vendorinfo?.info?.content);
      setFullAddress(full_address);
      setPhone(phone1);
      if (data?.status) {
        let int_status = parseFloat(data.status);
        if (int_status == 2) {
          setStatus('Pending');
        } else if (int_status == 3) {
          setStatus('Accepted');
        } else if (int_status == 1) {
          setStatus('Complete');
        } else {
          setStatus('Cancelled');
        }
      }
    }
  }, [data, isLoading]);

  const NumberFormat = (number, decPlaces, decSep, thouSep) => {
    (decPlaces = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces),
      (decSep = typeof decSep === 'undefined' ? '.' : decSep);
    thouSep = typeof thouSep === 'undefined' ? ',' : thouSep;
    var sign = number < 0 ? '-' : '';
    var i = String(
      parseInt((number = Math.abs(Number(number) || 0).toFixed(decPlaces))),
    );
    var j = (j = i.length) > 3 ? j % 3 : 0;

    return (
      sign +
      (j ? i.substr(0, j) + thouSep : '') +
      i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, '$1' + thouSep) +
      (decPlaces
        ? decSep +
          Math.abs(number - i)
            .toFixed(decPlaces)
            .slice(2)
        : '')
    );
  };

  if (isLoading) {
    return (
      <View style={styles.flex}>
        <Header />
        <View style={styles.mainContainer}>
          <ActivityIndicator size="large" color="#333333" />
        </View>
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
      return (
        <View style={styles.flex}>
          <Header />
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refresh}
                onRefresh={onRefresh}
                title="Pull to refresh"
              />
            }>
            <View style={styles.orderContainer}>
              <View style={styles.card}>
                <View style={styles.title}>
                  <FlatText text={t('order')} font="bold" size={24} />
                </View>

                <View style={styles.marginBottom}>
                  <FlatText
                    text={t('orderNumber') + ': #' + id}
                    font="q_regular"
                    size={16}
                  />
                </View>

                <View style={styles.marginBottom}>
                  <FlatText
                    text={t('orderStatus') + ': ' + status}
                    font="semibold"
                    size={16}
                  />
                </View>
                <View style={styles.marginBottom}>
                  <FlatText
                    text={t('paymentMethod') + ': ' + data?.payment_method}
                    font="semibold"
                    size={16}
                  />
                </View>
                <View style={[styles.marginBottom, styles.box]}>
                  <View style={styles.boxWidth}>
                    <FlatText text={t('total')} font="q_semibold" size={16} />
                  </View>

                  <FlatText
                    text={
                      ': ' +
                      config.CURRENCY_CODE +
                      NumberFormat(parseFloat(data.total))
                    }
                    font="q_semibold"
                    size={16}
                  />
                </View>
                {data?.discount > 0 && (
                  <>
                    <View style={[styles.marginBottom, styles.box]}>
                      <View style={styles.boxWidth}>
                        <FlatText
                          text={t('discount')}
                          font="q_semibold"
                          size={16}
                        />
                      </View>
                      <FlatText
                        text={
                          ': ' +
                          config.CURRENCY_CODE +
                          ' ' +
                          NumberFormat(parseFloat(data?.discount))
                        }
                        font="q_semibold"
                        size={16}
                      />
                    </View>
                    <View style={[styles.marginBottom, styles.box]}>
                      <View style={styles.boxWidth}>
                        <FlatText
                          text={t('discountCode')}
                          font="q_semibold"
                          size={16}
                        />
                      </View>
                      <FlatText
                        text={': ' + data?.coupon?.title}
                        font="q_semibold"
                        size={16}
                      />
                    </View>
                  </>
                )}
                <View style={[styles.marginBottom, styles.box]}>
                  <View style={styles.boxWidth}>
                    <FlatText
                      text={t('subTotal')}
                      font="q_semibold"
                      size={16}
                    />
                  </View>

                  <FlatText
                    text={
                      ': ' +
                      config.CURRENCY_CODE +
                      NumberFormat(
                        parseFloat(data.total) - parseFloat(data.discount),
                      )
                    }
                    font="q_semibold"
                    size={16}
                  />
                </View>

                <View style={[styles.marginBottom, styles.box]}>
                  <View style={styles.boxWidth}>
                    <FlatText
                      text={t('deliveryFee')}
                      font="q_semibold"
                      size={16}
                    />
                  </View>
                  <FlatText
                    text={
                      ': ' +
                      config.CURRENCY_CODE +
                      ' ' +
                      NumberFormat(parseFloat(data.shipping))
                    }
                    font="q_semibold"
                    size={16}
                  />
                </View>
                <View style={[styles.marginBottom, styles.box]}>
                  <View style={styles.boxWidth}>
                    <FlatText
                      text={t('tax') + `( ${data.tax}%)`}
                      font="q_semibold"
                      size={16}
                    />
                  </View>
                  <FlatText
                    text={
                      ': ' +
                      config.CURRENCY_CODE +
                      ' ' +
                      NumberFormat(parseFloat(data?.total_tax))
                    }
                    font="q_semibold"
                    size={16}
                  />
                </View>
                <View style={styles.divider} />
                <View style={[styles.marginBottom, styles.box]}>
                  <View style={styles.boxWidth}>
                    <FlatText
                      text={t('total') + '(Incl. VAT): '}
                      font="bold"
                      size={16}
                    />
                  </View>
                  <FlatText
                    text={
                      ': ' +
                      config.CURRENCY_CODE +
                      ' ' +
                      `${NumberFormat(
                        parseFloat(data.grand_total) +
                          parseFloat(data.shipping),
                      )}`
                    }
                    font="bold"
                    size={16}
                  />
                </View>
              </View>

              <View style={styles.card}>
                <View style={styles.title}>
                  <FlatText text={t('orderItem')} font="bold" size={20} />
                </View>
                <View style={styles.marginBottom}>
                  <FlatList
                    data={data.orderlist}
                    renderItem={({item}) => _renderOrderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.title}>
                  <FlatText text={t('orderLog')} font="bold" size={20} />
                </View>
                {data?.orderlog !== undefined && (
                  <View style={styles.marginBottom}>
                    <OrderLog data={data?.orderlog} />
                  </View>
                )}
              </View>
              <View style={styles.card}>
                <View style={styles.title}>
                  <FlatText text={t('riderLog')} font="bold" size={20} />
                </View>
                {data?.riderlog !== undefined && (
                  <View style={styles.marginBottom}>
                    <RiderLog data={data?.riderlog_histories} />
                  </View>
                )}
              </View>
              <View style={styles.card}>
                <View style={styles.title}>
                  <FlatText text={t('restaurantInfo')} font="bold" size={20} />
                </View>
                <View style={styles.marginBottom}>
                  <FlatText
                    text={t('name') + ': ' + data?.vendorinfo?.slug}
                    font="q_regular"
                    size={16}
                  />
                </View>
                <View style={styles.marginBottom}>
                  <FlatText
                    text={t('phone') + ': ' + phone}
                    font="q_regular"
                    size={16}
                  />
                </View>
                <View style={styles.marginBottom}>
                  <FlatText
                    text={t('address') + ': ' + fullAddress}
                    font="q_regular"
                    size={16}
                  />
                </View>
              </View>
              <>
                {data?.riderinfo?.name !== '' && (
                  <View style={styles.card}>
                    <View style={styles.title}>
                      <FlatText text={t('riderInfo')} font="bold" size={20} />
                    </View>
                    <View style={styles.marginBottom}>
                      <FlatText
                        text={t('name') + ': ' + data?.riderinfo?.name}
                        font="q_regular"
                        size={16}
                      />
                    </View>
                    <View>
                      <FlatText
                        text={t('phone') + ': ' + data?.riderinfo?.phone_number}
                        font="q_regular"
                        size={16}
                      />
                    </View>
                  </View>
                )}
              </>
              {(() => {
                if (data?.vendorinfo?.location?.latitude !== null) {
                  let resData = JSON.parse(data.data);

                  let lat = parseFloat(data?.vendorinfo?.location?.latitude);
                  let long = parseFloat(data?.vendorinfo?.location?.longitude);
                  let userLat = parseFloat(resData.latitude);
                  let userLong = parseFloat(resData.longitude);

                  let coordinates = [
                    {
                      latitude: userLat,
                      longitude: userLong,
                    },
                    {
                      latitude: lat,
                      longitude: long,
                    },
                  ];
                  return (
                    <View style={styles.card}>
                      <View style={styles.title}>
                        <FlatText
                          text={t('orderTracking')}
                          font="bold"
                          size={20}
                        />
                      </View>

                      <MapView
                        ref={mapRef}
                        style={styles.mapHeight}
                        loadingEnabled={true}
                        initialRegion={{
                          latitude: lat,
                          longitude: long,
                          latitudeDelta: 0.015 * 1,
                          longitudeDelta: 0.0121 * 1,
                        }}>
                        <Marker
                          image={require('./../../../assets/locationMarker.png')}
                          coordinate={{
                            latitude: userLat,
                            longitude: userLong,
                          }}
                        />
                        <Marker
                          image={require('./../../../assets/shopMarker.png')}
                          coordinate={{
                            latitude: lat,
                            longitude: long,
                          }}
                        />
                        <MapViewDirections
                          origin={coordinates[0]}
                          waypoints={
                            coordinates.length > 2
                              ? coordinates.slice(1, -1)
                              : undefined
                          }
                          destination={coordinates[coordinates.length - 1]}
                          apikey={config.GOOGLE_MAP_API_KEY_Geocoder}
                          strokeWidth={3}
                          strokeColor="hotpink"
                          optimizeWaypoints={true}
                          onStart={params => {
                            console.log(
                              `Started routing between "${params.origin}" and "${params.destination}"`,
                            );
                          }}
                          onReady={result => {
                            mapRef.current.fitToCoordinates(
                              result.coordinates,
                              {
                                edgePadding: {
                                  right: 30,
                                  bottom: 300,
                                  left: 30,
                                  top: 100,
                                },
                              },
                            );
                          }}
                        />
                      </MapView>
                    </View>
                  );
                }

                return null;
              })()}
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

const _renderOrderItem = param => {
  return (
    <FlatText
      text={param.products.title + ' x' + param.qty + ' (' + param.total + ')'}
      font="q_regular"
      size={16}
    />
  );
};
