import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import checkIfStartsWithHttps from "../../../utils/checkIfStartsWithHttps";
import FlatText from "../../../components/FlatText";

export default function RestaurantsWithOffer({ item }) {
  const [photo, setPhoto] = React.useState("");
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    const preview = item.offerables.restaurants.preview.content
    setPhoto(checkIfStartsWithHttps(preview));
  }, [item.offerables.restaurants.preview.content]);

  return (
    <TouchableOpacity
      style={styles.renderItemStyle}
      onPress={() =>
        navigation.navigate("Details", { id: item.offerables.restaurants.id })
      }
    >
      <View style={styles.renderItemContent}>
        <Image
          style={styles.renderItemImg}
          source={{ uri: photo }}
        />
        <View style={styles.renderItemBadge}>
          <FlatText
            color="#fff"
            font="q_semibold"
            text={item.offerables.restaurants.coupons.count + "% OFF"}
            size={12}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
