export default function cartTotalQuantity(cart) {
  let totalQuantity = 0;
  cart.forEach((x) => {
    totalQuantity = totalQuantity + x.quantity;
  });

  return totalQuantity;
}
