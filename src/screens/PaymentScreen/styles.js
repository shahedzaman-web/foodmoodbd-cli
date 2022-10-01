import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: "#fff",
    },headerContainer:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ff3252',
        width:'100%',
        height:50,
    },image:{
        width:'100%',
        height:300,
        resizeMode:'contain',
     
    },container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      
        },btn:{
            backgroundColor:'#ff3252',
            width:'90%',
            height:50,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
            marginTop:10,
            marginBottom:10,
            elevation:2,
        }
});
export default styles;