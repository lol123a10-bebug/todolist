import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const ToDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItemToList(state, action) {
      state.todoList = [action.payload, ...state.todoList];
    },
  },
});

const { reducer, actions } = ToDoSlice;

export const todoActions = actions;

export default reducer;
