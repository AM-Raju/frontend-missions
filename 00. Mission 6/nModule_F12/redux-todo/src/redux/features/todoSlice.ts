import { createSlice } from "@reduxjs/toolkit/react";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((todo) => todo.id === action.payload);
      task!.isCompleted = !task?.isCompleted;

      // Lifting pending task up to the row.
      state.todos.sort((todo) => {
        if (todo.isCompleted === false) {
          return -1;
        } else if (todo.isCompleted === true) {
          return 1;
        } else {
          return 0;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
