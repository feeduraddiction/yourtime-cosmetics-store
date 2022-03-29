import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface userState {
  user: {
    username: string;
    email: string;
    isAdmin: boolean;
  };
}

const initialState = {
  user: {
    username: "",
    isAdmin: false,
  },
} as userState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authorizeUser(
      state,
      action: PayloadAction<{ username: string; isAdmin: boolean }>
    ) {
      state.user.username = action.payload.username;
      state.user.isAdmin = action.payload.isAdmin;
    },
    logout(state) {
      state.user.username = "";
      state.user.isAdmin = false;
    },
  },
});

export const authorizeUserAction = userSlice.actions.authorizeUser;
export const logoutAction = userSlice.actions.logout;
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
