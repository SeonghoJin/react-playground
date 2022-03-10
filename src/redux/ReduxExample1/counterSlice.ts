import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
}

export type CounterAction = {
    increment: (state: CounterState) => void;
    decrement: (state: CounterState) => void;
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => void;
}

export const counterSlice = createSlice<CounterState, CounterAction>({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: CounterState) => {
            state.value += 1;
        },
        decrement: (state: CounterState) => {
            state.value -= 1;
        },
        incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    },
})

export const { increment, incrementByAmount, decrement } = counterSlice.actions;
export default counterSlice.reducer;