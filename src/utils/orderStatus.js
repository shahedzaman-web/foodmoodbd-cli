const returnOrderStatus = (status) => {
  let orderStatus = parseFloat(status);

  if (orderStatus === 3) return "Accepted";
  else if (orderStatus === 2) return "Pending";
  else if (orderStatus === 1) return "Complete";
  else return "Cancelled";
};

export default returnOrderStatus;
