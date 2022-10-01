import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkoutForm: {
    marginVertical: 20,
  },
  deliveryTitle: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 20,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    color: "#333",
  },
  couponInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: "60%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: "#333",
  },
  formGroup: {
    marginBottom: 20,
  },
  textarea: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    color: "#333",
    paddingBottom: 50,
  },
  orderConfirm: {
    marginTop: 20,
    backgroundColor: "#ff3252",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    
    marginBottom: 120,
  },applyCouponBtn:{
    backgroundColor: "#ff3252",
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  StoreName: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 20,
    alignItems: "center",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  CartGroup: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 20,
  },
  paymentMethod: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonMethod: {
    backgroundColor: "#ddd",
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonMethodActive: {
    backgroundColor: "#ddd",
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    color: "#fff",
  },
  mergeGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardForm: {
    marginTop: 10,
  },
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  couponContainer: {
    elevation: 3,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 16,
  },
  coupon: {
    padding: 10,
  },
  couponForm: {
    flexDirection: "row",
    marginTop: 10,
    
    justifyContent: "space-between",
  },
  dFlex:{
    flexDirection: "row",
    alignItems: "center",
  },shurjoPay:{
    width: "75%",
    height: 50,
    alignSelf:"flex-start",
    resizeMode: "contain",
    marginVertical:10
  } ,
  terms:{
    width: "80%",
    flexDirection: "row",
    alignItems	:"center",
    justifyContent: "flex-start"

  }
});

export default styles;
