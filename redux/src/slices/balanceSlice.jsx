import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
    name: 'balance',
    initialState: {
        value: 5000
    },
    reducers: {
        deposit: (state, action) => {
            state.value = state.value + action.payload;
        },
        withdraw: (state, action) => {
            if (action.payload <= state.value) {
                state.value = state.value - action.payload;
            }
            else {
                alert('inSuffesient Fund')
            }
        }
    }
})
export const { deposit, withdraw } = balanceSlice.actions;
export default balanceSlice.reducer;