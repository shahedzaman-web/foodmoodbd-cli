import {StatusBar, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 20,
    backgroundColor: '#C01C27',
  },
  viewAllNotification: {
    width: '80%',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#C01C27',
  },
  cardContainer: {
    width: wp('95%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    margin: 10,
    elevation: 10,
  },
  cardImg: {
    width: wp('90%'),
    height: 280,
    resizeMode: 'cover',
    marginTop: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  dFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '98%',
  },
  textContainer: {
    width: wp('85%'),
  },
  headerTitle: {
    width: wp('85%'),
  },
});
export default styles;
