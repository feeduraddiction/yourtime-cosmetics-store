import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface userState {
  user: {
    username: string;
    email: string;
    isAdmin: boolean;
    metadata: {};
  };
}

const initialState = {
  user: {
    username: "",
    isAdmin: false,
    email: "",
    metadata: {},
  },
} as userState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authorizeUser(
      state,
      action: PayloadAction<{ username: string; isAdmin: boolean, email: string, metadata: {} }>
    ) {
      if (action.payload.isAdmin) {
        state.user.username = action.payload.username;
        state.user.isAdmin = action.payload.isAdmin;
      } else {
        state.user.username = action.payload.username;
        state.user.isAdmin = action.payload.isAdmin;
        state.user.email = action.payload.email;
        state.user.metadata = action.payload.metadata;
      }
    },
    logout(state) {
      state.user.username = initialState.user.username;
      state.user.email = initialState.user.email;
      state.user.isAdmin = initialState.user.isAdmin;
      state.user.metadata = initialState.user.metadata;

    },
  },
});

export const authorizeUserAction = userSlice.actions.authorizeUser;
export const logoutAction = userSlice.actions.logout;
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
