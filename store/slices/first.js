import { createSlice } from "@reduxjs/toolkit";

const initFirstState = {
    counter: 0,
    showCounter: false,
};

const firstSlice = createSlice({
    name: "firstState",
    initialState: initFirstState,
    reducers: {
        increment(state, action) {
            state.counter += action.payload.amount;
        },
        decrement(state, action) {
            state.counter -= action.payload.amount;
        },
        toggle(state, action) {
            state.showCounter = !state.showCounter;
        },
    },
});

export const firstActions = firstSlice.actions;

export default firstSlice.reducer;
