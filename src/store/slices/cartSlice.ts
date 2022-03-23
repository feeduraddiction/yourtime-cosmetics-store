import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface cartState {
  cart: {}[];
}

const initialState = {
  cart: [],
} as cartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{}>) {
      state.cart.push(action.payload);
    },
  },
});

export const AddToCartAction= cartSlice.actions.addToCart;

export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
