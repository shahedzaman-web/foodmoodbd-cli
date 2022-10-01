import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customMap: {
    width: width,
    height: height,
  },
  searchContent: {
    position: 'absolute',
    top: -50,
    left: 0,
    right: 0,
    width: '100%',
    flexDirection: 'row',
  },
  searchInput: {
    backgroundColor: '#fff',
    width: width,
    height: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 20,
    paddingRight: 60,
    color: '#222',
    fontWeight: '600',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  currentLocation: {
    position: 'absolute',

    top: -50,
    right: 10,
  },
  autocompleteArea: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: width,
    height: 80,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 15,
  },
  marginRight10: {
    marginRight: 10,
  },
  btnArea: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
  },
  btnContentArea: {
    width: width - 36,
    height: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    backgroundColor: '#C01C27',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTouchAble: {
    width: width - 30,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
