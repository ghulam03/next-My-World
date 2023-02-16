import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalItem: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state) => {
      state.totalItem += 1;
    },
    removeFromCart: (state) => {
      state.totalItem -= 1;
    },
   
  }
});
export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions

