// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../slices/counterSlice";
import balanceReducer from "../slices/balanceSlice";
import transactionsReducer from "../slices/transactionsSlice";
const store = configureStore({
    reducer: {
        counter: counterReducer,
        balance: balanceReducer,
        transactions: transactionsReducer,
    },
});
export default store;