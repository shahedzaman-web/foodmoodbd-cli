import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 200,
    paddingHorizontal: 20,
    backgroundColor: "#C01C27",
    paddingBottom: 15,
  },
  headerBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  conatiner: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 2,
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  username: {
    marginTop: 10,
    marginBottom: 20,
  },
  singleList: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 5,
    paddingVertical: 10,
    justifyContent: "center",
    // marginBottom: 20
  },
  flexDirection: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  flexContain: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "relative",
  },
  icon: {
    marginRight: 30,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },badge:{
    top: -8,
    left: 6,
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 1,
  }
});

export default styles;
