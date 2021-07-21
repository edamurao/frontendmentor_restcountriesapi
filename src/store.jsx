import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import country from './countryReducer';

const store = configureStore({
    reducer: country,
    middleware: [...getDefaultMiddleware()]
});

export default store;