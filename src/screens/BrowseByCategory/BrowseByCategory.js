import {View, FlatList} from 'react-native';
import React from 'react';
import {useRestaurantByCategoryQuery} from '../../store/services/api';
import styles from './styles';
import Header from '../sectionComponent/Header';
import {ActivityIndicator} from 'react-native-paper';
import FlatText from '../../components/FlatText';
import RestaurantCard from './RestaurantCard';
import {useTranslation} from 'react-i18next';
export default function BrowseByCategory({route}) {
  const {t} = useTranslation();
  const {name} = route.params;
  const lowerCaseName = name.toLowerCase();
  const RestaurantByCategory = lowerCaseName.split(' ')[0];
  const {data, inLoading, error} =
    useRestaurantByCategoryQuery(RestaurantByCategory);
  if (inLoading) {
    return (
      <View style={styles.flex}>
        <Header />
        <View style={styles.mainContainer}>
          <ActivityIndicator size="large" color="#333333" />
        </View>
      </View>
    );
  } else if (error || data?.restaurants?.store_categories.length === 0) {
    return (
      <View style={styles.flex}>
        <Header />
        <View style={styles.mainContainer}>
          <FlatText
            text={error?.data !== undefined ? error.data : t('notFound')}
            size={20}
            color="#333333"
            font="q_bold"
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.flex}>
        <Header />
        <View style={styles.hconatiner}>
          <View style={styles.row}>
            <FlatList
              data={data?.restaurants?.store_categories}
              renderItem={({item}) => <RestaurantCard item={item.users} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    );
  }
}
