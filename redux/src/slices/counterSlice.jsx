import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 1 },
    reducers: {
        increment: (state, action) => {
            if (state.value < 10) { state.value += 1 }
        },
        decrement: (state, action) => {
            if (state.value > 1) { state.value -= 1 }
        },
        reset: (state) => { state.value = 0 }
    },
});
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;