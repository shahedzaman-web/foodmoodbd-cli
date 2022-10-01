import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import FlatText from "../../components/FlatText";
import Header from "../sectionComponent/Header";
import styles from "./styles";
import { useTranslation } from "react-i18next";

export default function Thanks({ navigation,route }) {

  const { t } = useTranslation();
  return (
    <View style={styles.flex}>
      <Header />
      <View style={styles.container}>
        <Image
          source={require("../../../assets/animation_640_l4mcrt8o.gif")}
          style={styles.image}
        />
        <View style={styles.message}>
          <FlatText
            text={t("yourOrderConfirm")}
            font="q_semibold"
            size={18}
            color="#C01C27"
          />
        </View>
        <TouchableOpacity
          style={styles.btntext}
          onPress={() => navigation.navigate("OrderView", {id:route.params.orderId})}
        >
          <FlatText text={t("dashboard")} font="q_semibold" color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
