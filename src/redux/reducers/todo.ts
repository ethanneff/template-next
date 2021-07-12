import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Todo = {
  id: string;
  name: string;
  active: boolean;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
};

type TodoState = {
  items: Todo[];
};

const initialState: TodoState = {
  items: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const now = Date.now();
      state.items.push({
        id: now.toString(),
        name: action.payload,
        active: true,
        completed: false,
        createdAt: now,
        updatedAt: now,
      });
    },
    complete: (state, action: PayloadAction<string>) => {
      state.items.map((todo) => ({
        ...todo,
        completed: todo.id === action.payload ? true : todo.active,
      }));
    },
    uncomplete: (state, action: PayloadAction<string>) => {
      state.items.map((todo) => ({
        ...todo,
        completed: todo.id !== action.payload ? false : todo.active,
      }));
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items.map((todo) => ({
        ...todo,
        active: todo.id === action.payload ? false : todo.active,
      }));
    },
  },
});
