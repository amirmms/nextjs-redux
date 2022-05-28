import { createSlice } from "@reduxjs/toolkit";

const initSecondState = {
    token: "",
    isLogin: false,
};

const secondSlice = createSlice({
    name: "secondSlice",
    initialState: initSecondState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload.token;
        },

        setIsLogin(state, action) {
            state.isLogin = !state.isLogin;
        },
    },
});

export const secondActions = secondSlice.actions;

export default secondSlice.reducer;
