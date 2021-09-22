import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const ToDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    replaceTodoList(state, action) {
      state.todoList = action.payload;
    },
    addItemToList(state, action) {
      state.todoList = [action.payload, ...state.todoList];
    },
    toggleDoneOfListItem(state, action) {
      const { id } = action.payload;
      const itemIndex = state.todoList.findIndex((item) => item.id === id);

      const item = state.todoList[itemIndex];
      item.done = !item.done;
    },
  },
});

const { reducer, actions } = ToDoSlice;

export const todoActions = actions;

export default reducer;
