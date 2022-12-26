import config from './config';

function checkIfStartsWithHttps(str) {
  if (str !== null) {
    const result = str?.lastIndexOf(config.https, 0) === 0;
    if (result === true) {
      return str;
    } else {
      return config.https + str;
    }
  } else {
    return config.https + '//foodmoodbd.com/uploads/store.jpg';
  }
}
export default checkIfStartsWithHttps;
