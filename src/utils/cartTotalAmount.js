export default function cartTotalAmount(cart) {
  let totalAmount = 0;
  cart.forEach((x) => {
    totalAmount = totalAmount + x.quantity * x.price;
  });

  return totalAmount;
}
