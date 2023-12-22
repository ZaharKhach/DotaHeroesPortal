import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import dotaApi from "./api/dota";
import filters from './components/Heroes/slices/filterSlice';
import search from './components/Heroes/slices/searchSlice';

const store = configureStore({
    reducer: {
        filters,
        search,
        [dotaApi.reducerPath]: dotaApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dotaApi.middleware)
});
setupListeners(store.dispatch);

export default store;