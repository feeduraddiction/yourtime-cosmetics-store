import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchState } from "@utils/types/storeTypes";
import { RootState } from "../store";

const initialState = {
  isSearchActive: false,
  searchInput: "",
} as searchState;

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    activateSearch(state) {
      state.isSearchActive = !state.isSearchActive;
    },
    searchInput(state, action: PayloadAction<string>) {
      state.searchInput = action.payload;
    },
  },
});

export const activateSearchAction = searchSlice.actions.activateSearch;
export const searchInputAction = searchSlice.actions.searchInput;
export const selectSearchActive = (state: RootState) =>
  state.search.isSearchActive;
export const selectSearchInput = (state: RootState) => state.search.searchInput;

export default searchSlice.reducer;
