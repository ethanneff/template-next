import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Constants} from './../../utils/Constants/index';
import {todoSlice} from './todo';

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

export const counterQuery = createAsyncThunk('counter/query', async () => {
  try {
    const res = await fetch(`${Constants.baseUrl}/users`);
    return res.json();
  } catch (e) {
    return e;
  }
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [todoSlice.actions.add.type]: (state) => {
      state.value += 1;
    },
    [counterQuery.fulfilled.type]: (state) => {
      state.value += 1;
    },
    [counterQuery.rejected.type]: (state, action) => {
      console.log(action);
      state.value -= 1;
    },
  },
});
