import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import FlatText from "../../components/FlatText";

export default function PaymentCancel({ navigation }) {
  return (
    <View style={styles.flex}>
      <View style={styles.container}>
        <FlatText
          textalign={"center"}
          text="Payment Cancelled"
          font="bold"
          size={24}
          color="#C01C27"
        />
        <Image
          source={require("../../../assets/cancel.gif")}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Home")}
        >
          <FlatText text="Go Bact To Home" font="bold" color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
