import { configureStore} from "@reduxjs/toolkit";
import searchReducer from './slices/searchSlice'

const store = configureStore({
    reducer:{
        activateSearch: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;