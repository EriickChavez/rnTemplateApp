import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ExampleState {
    value: string;
}

const initialState: ExampleState = {
    value: '',
};

export const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        resetState: () => initialState,
        changeText: (state, actions: PayloadAction<string>) => {
            state.value = actions.payload;
        },
    },
});

export const { changeText } = exampleSlice.actions;

export default exampleSlice.reducer;
