import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import FlatText from '../../components/FlatText';
import Header from '../sectionComponent/Header';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import config from '../../utils/config';
import {useGetUserPerviousOrdersQuery} from '../../store/services/api';
import returnOrderStatus from '../../utils/orderStatus';
import {useTranslation} from 'react-i18next';

export default function Order({navigation}) {
  const {t} = useTranslation();
  const {isLoading, data, error, isFetching, refetch} =
    useGetUserPerviousOrdersQuery();
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = () => {
    refetch();
    isFetching ? setRefreshing(true) : setRefreshing(false);
  };

  if (isLoading) {
    return (
      <View style={styles.flex}>
        <Header />
        <View style={styles.mainContainer}>
          <ActivityIndicator size="large" color="#333" />
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
      if (data?.length > 0) {
        return (
          <View style={styles.flex}>
            <Header />
            <ScrollView
              style={StyleSheet.flex}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  title="Pull to refresh"
                />
              }>
              <View style={styles.container}>
                <View style={styles.headerTitle}>
                  <FlatText text={t('allOrder')} font="q_regular" size={22} />
                </View>
                {data?.map((order, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() =>
                        navigation.navigate('OrderView', {id: order.id})
                      }>
                      <View style={styles.singleOrder}>
                        <View>
                          <View>
                            <FlatText
                              text={t('orderNumber') + ': #' + order.id}
                              font="bold"
                              size={22}
                            />
                          </View>
                          <View style={styles.orderPrice}>
                            <FlatText
                              text={
                                config.CURRENCY_CODE +
                                ' ' +
                                `${
                                  parseFloat(order.grand_total) +
                                  parseFloat(order.shipping)
                                }`
                              }
                              font="q_semibold"
                              size={16}
                            />
                          </View>
                          <View style={styles.orderPrice}>
                            <FlatText
                              text={`Status: ${returnOrderStatus(
                                order.status,
                              )}`}
                              font="q_regular"
                              size={16}
                            />
                          </View>
                        </View>
                        <View style={styles.viewOrderBtn}>
                          <Feather name="eye" size={24} color="#fff" />
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        );
      } else {
        return (
          <View style={styles.flex}>
            <Header />
            <View style={styles.mainContainer}>
              <FlatText text={t('noOrderFound')} font="q_regular" size={22} />
            </View>
          </View>
        );
      }
    }
  }
}
