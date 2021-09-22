import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoCreateIsVisible: false,
  isLoading: false,
};

const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toDoCreateToggle(state) {
      state.todoCreateIsVisible = !state.todoCreateIsVisible;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

const { reducer, actions } = UISlice;

export const UIActions = actions;

export default reducer;
