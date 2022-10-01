import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    padding: 12,
  },
  mainContainer: {
    flex: 1,
  },
  mt12: {
    marginTop: 12,
  },gap:{
    marginVertical:12,
  },row:{
    flexDirection:'row',
  },btn:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#ff3252",
    marginVertical:20,
    padding:12,
    borderRadius:12
  }
});
export default styles;
