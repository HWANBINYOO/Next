import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

interface StateType {
  value: number;
};

const initialState: StateType = { value: 0 };

export const counts = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    plus : (state: StateType) => {
      state.value += 1;
    },
    minus : (state: StateType) => {
      state.value -= 1
    },
    add : (state: StateType, action: PayloadAction<number>) => {
        state.value = action.payload;
    }
  }
});

export const countValue = (state: RootState) => state.counter.value;

export const { plus , minus , add } = counts.actions;

export default counts