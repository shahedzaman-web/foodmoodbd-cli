import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 30,
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  username: {
    marginTop: 10,
    marginBottom: 20,
  },
  singleList: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  flexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  flexContain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
