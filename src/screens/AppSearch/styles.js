import { StatusBar, StyleSheet } from "react-native";
import res from "../../utils/responsive";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight + 10,

  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  input: {
    backgroundColor: "#F9F9F9",
    width: res.wp("82%"),
    height: 40,
    marginLeft: 12,
    borderRadius: 6,
    elevation: 2,
  },
  searchResultContainer: {
    width: "100%",
  },
  searchResult: {
    marginLeft: 12,

    height: 40,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hconatiner: {
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    flex: 1,
    paddingVertical: 5,
  },
  dFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  renderfeaured: {
    marginRight: 15,
    marginTop: 10,
    paddingBottom: 10,
  },
  renderfeaureds: {
    marginTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 100,
  },
  marginBottomView: {
    marginTop: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paddingLeft: {
    marginBottom: 10,
  },
  imageWidth: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  badge: {
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "#E8F9FD",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderTopRightRadius: 10,
  },
  productTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  productContentFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  paddingHorizontal5: {
    paddingHorizontal: 5,
  },
  renderCategory: {
    marginRight: 15,
    marginBottom: 15,
    marginTop: 15,
  },
  renderBg: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  categoryBgImg: {
    width: 150,
    height: 150,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryImageStyle: {
    borderRadius: 15,
  },
  categoryNameStyle: {
    backgroundColor: "#C01C27",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  renderItemStyle: {
    marginRight: 15,
    marginBottom: 15,
    marginTop: 15,
  },
  renderItemContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  renderItemImg: {
    width: 190,
    height: 150,
    borderRadius: 5,
  },
  renderItemBadge: {
    position: "absolute",
    bottom: 15,
    color: "#fff",
    left: 15,
    backgroundColor: "#C01C27",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  restuarantSearchResultContainer: {
    alignItems: "center",
    marginVertical: 24,
    marginHorizontal: 12,
  },
  singleFood: {
    width: res.wp("90%"),
  },
  searchResultBtnContainer: {
    marginTop: 10,
    padding: 12,
    width: "100%",
  },
  foodImage: {
    backgroundColor: "#C01C27",
    width: "30%",
    resizeMode: "contain",
    height: 50,
    borderRadius: 5,
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: res.wp("50%"),
    padding: 6,
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 5,
    marginBottom: 10,
    marginTop:2,
    marginLeft: 0.5,
    marginRight: 10,
  },titleContainer:{
    marginLeft: 10,
    justifyContent: "space-between",
   padding: 2,
    height: "100%",
  }
});

export default styles;
