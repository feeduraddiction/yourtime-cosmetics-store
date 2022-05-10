import { createSlice } from "@reduxjs/toolkit";
import { loginWindowState } from "@utils/types/storeTypes";
import { RootState } from "../store";

const initialState = {
  isLoginWindowActive: false,
} as loginWindowState;

const loginWindowSlice = createSlice({
  name: "loginWindow",
  initialState,
  reducers: {
    activateLoginWindow(state) {
      state.isLoginWindowActive = !state.isLoginWindowActive;
    },
  },
});

export const activateLoginWindowAction =
  loginWindowSlice.actions.activateLoginWindow;
export const selectLoginWindowActive = (state: RootState) =>
  state.loginWindow.isLoginWindowActive;

export default loginWindowSlice.reducer;
