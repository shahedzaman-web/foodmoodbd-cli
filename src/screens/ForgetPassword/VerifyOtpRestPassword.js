import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import Toast from 'react-native-toast-message';
import { ActivityIndicator } from "react-native-paper";
import FlatText from "../../components/FlatText";
import { useVerifyPasswordOtpMutation } from "../../store/services/authApi";
export default function VerifyOtpRestPassword({ navigation, route }) {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [value4, setValue4] = React.useState("");
  const [value5, setValue5] = React.useState("");
  const [value6, setValue6] = React.useState("");
  const [verifyPasswordOtp, { isLoading }] = useVerifyPasswordOtpMutation();
  const { email } = route.params;

  const handleOtpVerify = async () => {
    if (
      value1 === "" ||
      value2 === "" ||
      value3 === "" ||
      value4 === "" ||
      value5 === "" ||
      value6 === ""
    ) {
      Toast.show({
        text1: "Please enter all the fields",
        type: "",
       
      });
    } else {
      try {
        const payload = {
          phone_number: email,
          otp: `${value1}${value2}${value3}${value4}${value5}${value6}`,
        };
        const { data, error } = await verifyPasswordOtp(payload);

        if (data.message === "Otp Matched Successful") {
          navigation.navigate("EnterNewPassword", { email });
          Toast.show({
            text1: "Otp Matched Successful",
            type: "success",
         
          });
        } else {
          Toast.show({
            text1: data.error,
            type: "error",
          
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <View style={styles.flex}>
      <View style={styles.mainContainer}>
        <View style={styles.title}>
          <FlatText
            text="Verify OTP"
            textAlign="center"
            font="bold"
            size={20}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <View style={styles.otpContainer}>
              <TextInput
                value={value1}
                onChangeText={(text) => setValue1(text)}
                style={styles.inputText}
                placeholder=""
                maxLength={1}
                keyboardType="numeric"
              />
              <TextInput
                value={value2}
                onChangeText={(text) => setValue2(text)}
                style={styles.inputText}
                placeholder=""
                maxLength={1}
                keyboardType="numeric"
              />
              <TextInput
                value={value3}
                onChangeText={(text) => setValue3(text)}
                style={styles.inputText}
                placeholder=""
                maxLength={1}
                keyboardType="numeric"
              />
              <TextInput
                value={value4}
                onChangeText={(text) => setValue4(text)}
                style={styles.inputText}
                placeholder=""
                maxLength={1}
                keyboardType="numeric"
              />
              <TextInput
                value={value5}
                onChangeText={(text) => setValue5(text)}
                style={styles.inputText}
                placeholder=""
                maxLength={1}
                keyboardType="numeric"
              />
              <TextInput
                value={value6}
                onChangeText={(text) => setValue6(text)}
                style={styles.inputText}
                placeholder=""
                maxLength={1}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={handleOtpVerify}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <FlatText
                  text={"Verify"}
                  font="q_semibold"
                  size={18}
                  color="#fff"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
