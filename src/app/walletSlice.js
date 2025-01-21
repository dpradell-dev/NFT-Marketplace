import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: null,
    isConnected: false,
    error: null,
};

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        setWalletAddress: (state, action) => {
            state.address = action.payload;
            state.isConnected = !!action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        disconnect: (state) => {
            state.address = null;
            state.isConnected = false;
            state.error = null;
        },
    },
});

export const { setWalletAddress, setError, disconnect } = walletSlice.actions;
export default walletSlice.reducer; 