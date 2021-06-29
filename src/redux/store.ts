import {configureStore} from '@reduxjs/toolkit';
import {counterSlice, todoSlice} from './reducers';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
  },
});

export const actions = {
  counter: counterSlice.actions,
  todo: todoSlice.actions,
};
