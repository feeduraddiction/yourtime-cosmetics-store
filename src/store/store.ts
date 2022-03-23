import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import cartReducer from './slices/cartSlice';
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
  },
});


store.subscribe(() => {
    saveState({
      cart: store.getState().cart
    });
  });


export type RootState = ReturnType<typeof store.getState>;
export default store;
