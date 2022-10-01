import { TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import FlatText from "../../components/FlatText";
import { useForgotPasswordMutation } from "../../store/services/authApi";
import { ActivityIndicator } from "react-native-paper";
import Toast from "react-native-toast-message";
import { useTranslation } from "react-i18next";

export default function ForgetPassword({ navigation }) {
  const { t } = useTranslation();
  const [email, setEmail] = React.useState("");
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const handleContinue = async () => {
    if (email === "") {
      Toast.show({
        text1: "Please enter email",
        type: "error",
      });
      return;
    } else {
      try {
        const payload = {
          email,
        };
        const { data, error } = await forgotPassword(payload);

        if (data?.message === "Otp Send") {
          Toast.show({
            text1: "Otp Send",
            type: "success",
          });
          navigation.navigate("VerifyOtpRestPassword", {
            email,
          });
        } else {
          Toast.show({
            text1: "Please enter valid email / password",
            type: "error",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <FlatText
          text={t("forgetPasswordTitle")}
          textAlign="center"
          font="bold"
          size={20}
        />
      </View>
      <View style={styles.formGroup}>
        <FlatText text={t("emailOrPhone")} font="q_regular" size={17} />
        <TextInput
          placeholderTextColor="#666"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
          placeholder={t("enterEmail")}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={handleContinue}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <FlatText
              text={t("continue")}
              font="q_semibold"
              size={18}
              color="#fff"
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
