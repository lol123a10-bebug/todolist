import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "./slices/ToDoSlice";
import UIReducer from "./slices/UISlice";

const store = configureStore({
  reducer: {
    todo: ToDoReducer,
    ui: UIReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
