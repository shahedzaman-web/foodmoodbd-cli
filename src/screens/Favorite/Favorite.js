import { View, Text, FlatList, RefreshControl } from "react-native";
import React from "react";
import styles from "./styles";
import Header from "../sectionComponent/Header";
import { useAllFavoriteRestaurantsListQuery } from "../../store/services/api";
import AllRestaurants from "./components/AllRestaurants";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
export default function Favorite() {
  const { data, isLoading, refetch } = useAllFavoriteRestaurantsListQuery();
  if (isLoading) {
    return (
      <View style={styles.flex}>
        <Header />
        <LoadingScreen />
      </View>
    );
  }
  return (
    <View style={styles.flex}>
      <Header />
      <View style={{ marginHorizontal: 12 }}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={()=>refetch()}
            />
          }
          data={data?.stores}
          renderItem={({ item }) => <AllRestaurants item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
