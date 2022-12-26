import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  mainContainer: {
    paddingTop:50,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    marginBottom: 7,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
    color: '#333',
  },
  formGroup: {
    marginBottom: 20,
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#C01C27",
    paddingVertical: 20,
    borderRadius: 5,
  },
  textCenter: {
    alignItems: "center",
    marginVertical: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flexEnd: {
    alignItems: "flex-end",
  },
  orContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    marginVertical: 20,
  },
  divider: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginVertical: 10,
    marginHorizontal: 20,
    width: "44%",
    height: 1,
  },
  facebookBtn: {
    flexDirection: "row",
    backgroundColor: "#3b5998",
    paddingVertical: 20,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  googleBtn: {
    flexDirection: "row",
    backgroundColor: "#dd4b39",
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    marginRight: 10,
  },
});

export default styles;
