function checkIfStartsWithHttps(str) {
  if (str !== null) {
    const result = str?.lastIndexOf('https:', 0) === 0;
    if (result === true) {
      return str;
    } else {
      return 'https:' + str;
    }
  } else {
    return 'https://foodmoodbd.com/uploads/store.jpg';
  }
}
export default checkIfStartsWithHttps;
