import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoCreateIsVisible: false,
};

const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toDoCreateToggle(state) {
      state.todoCreateIsVisible = !state.todoCreateIsVisible;
    },
  },
});

const { reducer, actions } = UISlice;

export const UIActions = actions;

export default reducer;
