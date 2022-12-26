import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  productContainer: {
    flex: 1,
    width: width,
    zIndex: -1,
    evaluation: 5,
  },
  main: {
    width: width,
  },
  footer: {
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    height: 300,
    width: width,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  foodList: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    // flex: 1,
  },
  singleFood: {
    width: width / 2 - 20 - 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 20,
    marginBottom: 20,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    marginLeft: 20,
    width: width / 2 - 20 - 10,
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    evaluation: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 20,
    marginBottom: 20,
    elevation: 5,
  },
  foodImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  foodTitle: {
    marginTop: 5,
    marginBottom: 5,
  },
  menuTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartBar: {
    backgroundColor: '#ff3252',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'center',
  },
  leftCartBar: {
    flexDirection: 'row',
  },
  rightCarBar: {
    flexDirection: 'row',
  },
  carBarIcon: {
    marginTop: 5,
    marginLeft: 5,
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsImageContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 15,
  },
  backBtn: {
    elevation: 5,
  },
  shareBtn: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },
  infoBtn: {
    elevation: 5,
  },
  bgImageInfoArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryTime: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  marginTop: {
    marginTop: 10,
  },
  reviewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 5,
  },
  renderMenuItem: {
    marginHorizontal: 20,
  },
  height70: {
    height: 75,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addOneContainer: {
    padding: 10,
    zIndex: 100,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    borderWidth: 1,
    marginVertical: 10,
    borderBottomColor: '#ced4da',
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
  },
  singleAddon: {
    marginTop: 10,
  },
  optionalContainer: {
    padding: 10,
    backgroundColor: '#c5c4c4',
    borderRadius: 5,
    marginTop: 10,
    // width: "25%",c
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ced4da',
    color: '#333',
    padding: 2,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
  },
  addToCartButton: {
    backgroundColor: '#ff3252',
    padding: 16,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  favoriteBtn: {
    marginRight: 10,
  },
});
export default styles;
