import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    elevation: 5,
  
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  mr12: {
    marginRight: 12,
  },
  chatContainer: {
    flex: 1,
    margin: 0,
  },
  modalContainer: {
    
    marginTop: "50%",
    width: "80%",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 6,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 12,
  },btn:{
    
      flexDirection:"row",
      justifyContent:"space-around",
      padding:6,
      borderRadius:2,
      elevation:2
  },btnDelete:{
    backgroundColor:"#dc3545",
  },btnClose:{
    backgroundColor:"#333",
  }
});
export default styles;
