import { configureStore } from "@reduxjs/toolkit";
import firstSlice from "./slices/first";
import secondSlice from "./slices/second";

const store = configureStore({
    reducer: {
        first: firstSlice,
        second: secondSlice,
    },
});

export default store;
