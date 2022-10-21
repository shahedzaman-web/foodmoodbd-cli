import { ScrollView, View,  } from "react-native";
import React from "react";
import FlatText from "../../components/FlatText";
import styles from "./styles";
export default function RefundAndReturnPolicy() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
    <View style={styles.mainContainer}>
    <View style={styles.gap} />
    <View style={styles.gap} />
      <FlatText
        text="Refund & Return Policy"
        font="extrabold"
        color="#333333"
        size={24}
        textalign="center"
      />
      <View style={styles.gap} />
      <FlatText
        text="What refund options are available?"
        font="extrabold"
        color="#7e7e7e"
        size={20}
        textalign="center"
      />
      <View style={styles.gap} />
      <FlatText
        textalign={"center"}
        text="If your product is eligible for a refund, we will refund or re-credit your debit or credit card with the full amount within 14 days, which includes the initial delivery charge (where applicable) that you paid for the delivery of the Goods or the Services, as applicable:"
        font="q_regular"
        color="#333333"
        size={16}
      />
      <View style={styles.gap} />
      <FlatText
        textalign={"center"}
        text="Bkash"
        font="q_bold"
        color="#333333"
        size={16}
      />
       <FlatText
        textalign={"center"}
        text="Rocket"
        font="q_bold"
        color="#333333"
        size={16}
      />
       <FlatText
        textalign={"center"}
        text="Mixed card"
        font="q_bold"
        color="#333333"
        size={16}
      />
      <View style={styles.gap} />
      <View style={styles.gap} />
      <FlatText
        text="Disclaimer"
        font="extrabold"
        color="#7e7e7e"
        size={20}
        textalign="center"
      />
      <View style={styles.gap} />

      <FlatText
        textalign={"center"}
        text="The information and services available may include inaccuracies or typographical errors. Changes are periodically added to the information herein. 'foodmoodbd' may make improvements and/or changes at any time. We do not warrant that our services will be uninterrupted or error-free, that defects will be corrected, or that the site or the server that makes it available is free of viruses or other harmful components. We do not warrant or represent that the use of the store or the materials made available, will be correct, accurate, timely, or otherwise reliable. foodmoodbd shall have no liability to you for any interruption or delay in access to the site irrespective of the cause. The information, services, products, and materials contained here are provided on an 'as is' basis without warranty of any kind. We hereby disclaim all warranties and conditions with regard to the service, including all implied warranties and conditions of merchantability, fitness for a particular purpose, title, and non-infringement. No advice or information, whether spoken or written, which you obtain from us shall create any warranty not expressly made herein. You understand and agree that any material and/or data downloaded or otherwise obtained through the use of the service is done at your own discretion and risk and you will be solely responsible for any damage to your computer systems or loss of data that results from the download of such material and/or data. Restaurant listing, price, discounts, schemes, promotions, and availability of information/data are subject to change without notice."
        font="q_regular"
        color="#333333"
        size={16}
      />
      <View style={styles.gap} />
      <View style={styles.gap} />
      <View style={styles.gap} />
      <View style={styles.gap} />
      </View>
      </ScrollView>
  );
}
