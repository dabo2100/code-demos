import { createSlice } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        value: [
            // { beforeBalance: 1000, amount: 500, afterBalance: 1500, type: "deposit" },
            // { beforeBalance: 1000, amount: 500, afterBalance: 1500, type: "deposit" },
            // { beforeBalance: 1000, amount: 500, afterBalance: 1500, type: "deposit" },
            // { beforeBalance: 1000, amount: 500, afterBalance: 1500, type: "deposit" },
        ]
    },
    reducers: {
        // Actions
        addTransaction: (state, action) => {
            state.value = [...state.value, action.payload];
        }
    }
})
export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;