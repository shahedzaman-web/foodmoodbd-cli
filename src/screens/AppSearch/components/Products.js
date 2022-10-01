import { View, Image, } from "react-native";

import React from "react";
import config from "../../../utils/config";
import FlatText from "../../../components/FlatText";
import styles from "../styles";
export default function Products({ item }) {
console.log({item})
  return (
    <View style={styles.productContainer}>
      {/* <TouchableOpacity onPress={onClickAddCart}> */}

      <Image
        style={styles.foodImage}
        source={{ uri: "http:" + item.preview.content }}
      />
      <View style={styles.titleContainer}>
        <View style={styles.foodTitle}>
          <FlatText text={item.title} font="q_bold" size={16} color="#2A2B44" />
        </View>
        <View style={styles.foodPrice}>
          <FlatText
            font="q_regular"
            size={14}
            color="#333"
            text={config.CURRENCY_CODE + " " + item?.price?.price}
          />
        </View>
      </View>

      {/* </TouchableOpacity> */}
    </View>
  );
}
