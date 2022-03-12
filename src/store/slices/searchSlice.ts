import {createSlice} from "@reduxjs/toolkit";
import { RootState } from "../store";

interface searchState {
    isSearchActive: boolean
}

const initialState = {
    isSearchActive: false,
} as searchState;

const activateSearchSlice = createSlice({
    name: 'activateSearch',
    initialState,
    reducers: {
        activateSearch(state){
            state.isSearchActive = !state.isSearchActive;
        }
    }
})

export const activateSearchAction = activateSearchSlice.actions.activateSearch;
export const selectSearchActive = (state: RootState) => state.activateSearch.isSearchActive;
export default activateSearchSlice.reducer;