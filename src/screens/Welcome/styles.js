import { StyleSheet,Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 30,
      backgroundColor: "#fff",
    },
    bannerImage: {
      width: width,
      height: height / 2,
    },
    selectButton: {
      marginTop: 20,
    },
    marginBottom: {
      marginBottom: 25
    },
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    currenLocationBtn: {
      backgroundColor: '#C01C27',
      paddingVertical: 15,
      paddingHorizontal: 20,
      width: width - 50,
      flexDirection: "row",
      justifyContent: "center",
      borderRadius: 5,
    }
  });

  export default styles