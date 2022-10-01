import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  title: {
    marginBottom: 15,
  },
  marginBottom: {
    marginBottom: 10,
  },
  mapHeight: {
    height: 350,
    borderRadius: 5,
  },
  orderContainer: {
    marginBottom: 20,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    flexDirection: "row",
  },
  boxWidth: {
    width: width * 0.5,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: "#ddd",
    marginVertical: 10,
  },
});

export default styles;
