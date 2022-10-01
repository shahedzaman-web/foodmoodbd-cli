import { View, Text, Button } from "react-native";
import React from "react";
import styles from "./styles";
import FlatText from "../../components/FlatText";
import { WebView } from "react-native-webview";
import { useChangePaymentStatusMutation } from "../../store/services/api";
import config from "../../utils/config";
export default function PaymentScreen({ route, navigation }) {
  const paymentUrl = route.params.url;

  const token = route.params.token;
  let orderId = route.params.shurjoPayOrderId;
  const [changePaymentStatus] = useChangePaymentStatusMutation();
  const handleWebViewNavigationStateChange = async (e) => {
    try {
      let url = e.url;
      console.log("url=====================>",url,e)
      if (url.includes("success")) {
        const raw = {
          order_id: orderId,
        };

        var requestOptions = {
          method: "POST",
          body: JSON.stringify(raw),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await fetch(
          config.spayBaseUrl + "/api/payment-status",
          requestOptions
        );
        const json = await res.json();

        if (json[0]?.bank_status === "Success") {
          // console.log("Success")
          const sendData = {
            order_id: route.params.orderId,
            status: "complete",
          };
          const { data, error } = await changePaymentStatus(sendData);
          // console.log({ data, error });
          navigation.navigate("Thanks", {
            orderId: route.params.orderId,
          });
        } else {
          // console.log("failed")
          const sendData = {
            order_id: route.params.orderId,
            status: "cancel",
          };
          const { data, error } = await changePaymentStatus(sendData);
          // console.log({ data, error });
          navigation.navigate("PaymentCancel");
        }
        // console.log({ json });
      } else if (url.includes("cancel")) {
        const sendData = {
          order_id: route.params.orderId,
          status: "cancel",
        };
        const { data, error } = await changePaymentStatus(sendData);
        // console.log({ data, error });
        navigation.navigate("PaymentCancel");
      }
    } catch (err) {
      alert("Error: " + err.message);
      console.log({ err });
    }
  };
  return (
    <View style={styles.flex}>
      <View style={styles.headerContainer}>
        <FlatText text="Payment" font="q_semibold" color="#fff" />
      </View>

      <WebView
        onNavigationStateChange={handleWebViewNavigationStateChange}
        source={{ uri: paymentUrl }}
      />
    </View>
  );
}
