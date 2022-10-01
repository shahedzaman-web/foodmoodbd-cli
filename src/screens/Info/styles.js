import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: 250,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  infoArea: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  flexContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  locationIcon: {
    marginTop: 5,
    paddingTop: 5,
    textAlign: 'justify',
    marginRight: 5,
  },

  locationIcon1: {
    marginHorizontal: 20,
  },

  marginTop: {
    marginTop: 20,
  },
  mapHeight: {
    height: 250,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapArea: {
    paddingVertical: 20,
  },
  marginBottom: {
    marginBottom: 20,
  },
  InfoImgBgConTent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  backBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
  },
  infoTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  infoFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight5: {
    marginRight: 5,
  },
  marginTop5: {
    marginTop: 5,
  },
});

export default styles;
