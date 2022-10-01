import { FlatList, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FlatText from '../../components/FlatText'
import RestaurantsWithOffer from './components/RestaurantsWithOffer'
import styles from './styles'
import RestaurantByCategory from './components/RestaurantByCategory'
import { useTranslation } from 'react-i18next'
export default function HomeHeader({data}) {
    const {t}= useTranslation()
  return (
    <>
    <View>
      <FlatText
        text={t('availableOffer')}
        size={20}
        color="#333"
        font="q_regular"
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data?.offerables?.data}
        renderItem={({ item }) => (
          <RestaurantsWithOffer item={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
    <View style={styles.marginBottomView}>
      <FlatText
        text={t('browseByCategory')}
        color="#333"
        size={20}
        font="q_regular"
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={data?.categories}
        renderItem={({ item }) => (
          <RestaurantByCategory item={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
    <View>
      <View style={styles.row}>
        <FlatText
          text={t('allRestaurants')}
          size={20}
          font="q_regular"
          color="#333"
        />
      
      </View>
    </View>
  </>
  )
}