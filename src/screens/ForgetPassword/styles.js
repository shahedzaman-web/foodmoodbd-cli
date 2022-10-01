import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 20,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginTop: 16,
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#C01C27",
    paddingVertical: 20,
    borderRadius: 5,
  },
  flex: {
    flex: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    marginBottom: 12,
    alignSelf: "center",
  },

  textCenter: {
    alignItems: "center",
    marginTop: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  inputText: {
    width: 40,
    height: 60,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: "center",
  },
  btnContainer: {
    marginTop: 30,
  },
  headerContainer: {
    marginVertical: 16,
  },
});

export default styles;
