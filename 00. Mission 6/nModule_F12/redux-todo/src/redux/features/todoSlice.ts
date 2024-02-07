import { createSlice } from "@reduxjs/toolkit/react";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = todoSlice.actions;

export default todoSlice.reducer;
