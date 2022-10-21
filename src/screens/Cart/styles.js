import {StyleSheet, Dimensions} from 'react-native';
import res from '../../utils/responsive';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  cartItemImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  singleCartItem: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    paddingBottom: 12,
    paddingTop: 12,
    borderBottomColor: '#ddd',
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cartRightSection: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  widthSection: {
    width: width - 140,
    paddingLeft: 10,
  },
  qualityCart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomButton: {
    alignItems: 'center',
    backgroundColor: '#C01C27',
    paddingVertical: 20,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollHeight: {
    flex: 1,
  },
  cartImg: {
    width: res.wp('80%'),
    height: res.hp('35%'),
    resizeMode: 'contain',
  },
});

export default styles;
