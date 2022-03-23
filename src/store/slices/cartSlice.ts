import { cartPropTypes } from "@assets/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface cartState {
  cart: cartPropTypes[];
}

const initialState = {
  cart: [],
} as cartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<cartPropTypes>) {
      const indexToFind = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexToFind !== -1) {
        state.cart[indexToFind].quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
  },
});

export const addToCartAction = cartSlice.actions.addToCart;

export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
