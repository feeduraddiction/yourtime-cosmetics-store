import { cartPropTypes } from "@assets/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface userState {
  user: {
    id: string,
    username: string;
    email: string;
    isAdmin: boolean;
    metadata: {
      cart: cartPropTypes[];
    };
  };
}

const initialState = {
  user: {
    id: "",
    username: "",
    isAdmin: false,
    email: "",
    metadata: {
      cart: {},
    },
  },
} as userState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authorizeUser(
      state,
      action: PayloadAction<{
        id: string,
        username: string;
        isAdmin: boolean;
        email: string;
        metadata: {
          cart: cartPropTypes[];
        };
      }>
    ) {
      if (action.payload.isAdmin) {
        state.user.username = action.payload.username;
        state.user.isAdmin = action.payload.isAdmin;
      } else {
        state.user.id = action.payload.id;
        state.user.username = action.payload.username;
        state.user.isAdmin = action.payload.isAdmin;
        state.user.email = action.payload.email;
        state.user.metadata.cart = action.payload.metadata.cart;
      }
    },
    logout: () => initialState,
  },
});

export const authorizeUserAction = userSlice.actions.authorizeUser;
export const logoutAction = userSlice.actions.logout;
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
