import React from 'react';
import {View, FlatList, ActivityIndicator, RefreshControl} from 'react-native';

import styles from './styles';
import Header from '../sectionComponent/Header';
import {useSelector} from 'react-redux';
import {
  useGetAreaIdQuery,
  useGetRestaurantsByAreaIdQuery,
} from '../../store/services/api';
import AllRestaurants from './components/AllRestaurants';
import HomeHeader from './HomeHeader';

export default function Home() {
  const location = useSelector(state => state.location);
  const city = location.state?.split(' ')[0];

  const getAreaId = useGetAreaIdQuery(city);

  const areaId = useSelector(state => state.areaId?.areaId);

  const {data, isFetching, refetch, error} =
    useGetRestaurantsByAreaIdQuery(areaId);

  const onRefresh = () => {
    refetch();
  };

  const LoadMore = () => {};

  if (isFetching) {
    return (
      <View style={styles.flex}>
        <Header />
        <View style={styles.mainContainer}>
          <ActivityIndicator size="large" color="#333" />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.flex}>
      <Header />

      <View style={styles.hconatiner}>
        <FlatList
          data={data?.all_resturants?.data}
          ListHeaderComponent={() => <HomeHeader data={data} />}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={onRefresh}
              title="Pull to refresh"
            />
          }
          renderItem={({item}) => <AllRestaurants item={item} />}
          keyExtractor={index => index.toString()}
          onEndReached={LoadMore}
          onEndReachedThreshold={100}
        />
      </View>
    </View>
  );
}
