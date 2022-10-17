import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  restaurantId: null,
  restaurantLocation: null,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartItems: (state, { payload }) => {
      const { id, item, location, addOnes } = payload;
      if (addOnes !== undefined) {
        if (state.cart.length === 0) {
          state.restaurantId = id;
          state.restaurantLocation = location;

          state.cart.push(item);
          state.cart.push(addOnes);
        } else if (state.restaurantId !== id) {
          state.cart = [];
          state.restaurantId = id;
          state.restaurantLocation = location;
          state.cart.push(item);
          state.cart.push(addOnes);
        } else if (state.restaurantId === id) {
          const existingItem = state.cart.find((x) => x.title === item.title);
   
          const existingAddOnes = state.cart.find(
            (x) => x.title === addOnes.title
          );
          if (existingItem && existingAddOnes) {
            existingAddOnes.quantity = existingAddOnes.quantity + 1;

            existingItem.quantity = item.quantity;
          } else if (existingItem && !existingAddOnes) {
            state.cart.push(addOnes);

            existingItem.quantity = item.quantity;
          } else if (!existingItem && existingAddOnes) {
            state.cart.push(item);
            existingAddOnes.quantity = existingAddOnes.quantity + 1;
          } else {
            state.cart.push(item);
            state.cart.push(addOnes);
          }
        } else {
          state.cart.push(item);
        }
      } else {
        if (state.cart.length === 0) {
          state.restaurantId = id;
          state.restaurantLocation = location;
          state.cart.push(item);
        } else if (state.restaurantId !== id) {
          state.cart = [];
          state.restaurantId = id;
          state.restaurantLocation = location;
          state.cart.push(item);
        } else if (state.restaurantId === id) {
          const existingItem = state.cart.find((x) => x.title === item.title);
          if (existingItem) {
            existingItem.quantity = item.quantity;
          } else {
            state.cart.push(item);
          }
        }
      }
    },
    addOneItem: (state, { payload }) => {

      const { id, title, price, preview, quantity } = payload;
      const itemTitle = title;
      if (state.cart.length === 0) {
        state.restaurantId = id;
        let newItem = {
          quantity: 1,
          price: price,
          food_id: id,
          title: title,
          preview: preview.content || null,
        };
        state.cart.push(newItem);
      } else if (state.restaurantId !== id) {
        state.cart = [];
        state.restaurantId = id;
        state.cart.push({
          quantity: 1,
          price: price,
          food_id: id,
          title: title,
          preview: preview.content || null,
        });
      } else if (state.restaurantId === id) {
        const existingItem = state.cart.find(
          (item) => item.title === itemTitle
        );
        if (existingItem) {
          existingItem.quantity = existingItem.quantity + 1;
        } else {
          let newCart = {
            quantity: 1,
            price: price,
            food_id: id,
            title: title,
            preview: preview.content || null,
          };
          state.cart.push(newCart);
        }
      } else {
        state.cart.push({
          quantity: 1,
          price: price,
          food_id: id,
          title: title,

          preview: preview.content || null,
        });
      }
    },
    removeOneItemFromCart: (state, { payload }) => {
      const item = state.cart.find((item) => item.title === payload.title);
      if (item.quantity === 1) {
        state.cart.splice(state.cart.indexOf(item), 1);
      } else {
        item.quantity = item.quantity - 1;
      }
    },
    removeAllItemFromCart: (state) => {
      (state.cart = []),
        (state.restaurantId = null)
       
    },
  },
});

export const {
  addToCart,
  removeAllItemFromCart,
  removeOneItemFromCart,
  addOneItem,
  addToCartItems,
} = cartSlice.actions;
