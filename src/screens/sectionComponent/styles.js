import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 6,
    paddingHorizontal: 20,
    backgroundColor: "#C01C27",
    paddingBottom: 15,
  },
  profileImg: {
    width: 45,
    height: 45,
    borderRadius: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  location: {
    fontSize: 14,
    color: "#FFF",
  },
  dFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    paddingLeft: 5,
    paddingTop: 1,
  },
  locationIcon: {
    marginTop: 4,
    marginRight: 5,
  },
  profileContainer: {
    width: 45,
    height: 45,
  },
  locationContainer: {
    paddingLeft: 10,
    width: "90%",
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: "#fff",
    width: "100%",
    height: 40,

    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: 20,
    paddingRight: 60,
   
    marginTop: 4,
    marginBottom: 4,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },mt2:{
    marginTop: 2
  },searchContainer:{
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "#fff",
    width: "100%",
    height: 40,
    borderRadius: 20,
    justifyContent: "space-between",
    paddingHorizontal: 12,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 4,
    marginBottom: 4,
    marginHorizontal: "auto",

  }
});
export default styles;
