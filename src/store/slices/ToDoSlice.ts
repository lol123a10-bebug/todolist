import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: "",
};

const ToDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

const { reducer, actions } = ToDoSlice;

export const todoActions = actions;

export default reducer;
