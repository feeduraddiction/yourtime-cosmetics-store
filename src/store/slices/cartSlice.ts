import { cartPropTypes } from "@utils/types/componentsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { cartState } from "@utils/types/storeTypes";

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
    incrementCart(state, action: PayloadAction<string>) {
      const isExist = state.cart.find((item) => item.id === action.payload);
      if (isExist) {
        isExist.quantity++;
      }
    },
    decrementCart(state, action: PayloadAction<string>) {
      const isExist = state.cart.find((item) => item.id === action.payload);
      if (isExist) {
        if (isExist.quantity < 2) {
          isExist.quantity = 1;
        } else {
          isExist.quantity--;
        }
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    updateCart(state, action: PayloadAction<cartPropTypes[]>) {
      state.cart = [...state.cart, ...action.payload];
    },

    clearLocalCart: () => initialState,
  },
});

export const addToCartAction = cartSlice.actions.addToCart;
export const removeFromCartAction = cartSlice.actions.removeFromCart;
export const { decrementCart, incrementCart } = cartSlice.actions;
export const clearLocalCartAction = cartSlice.actions.clearLocalCart;
export const updateCartAction = cartSlice.actions.updateCart;
export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
