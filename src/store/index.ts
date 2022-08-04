import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { servicesApi } from "../services";
import ToDoReducer from "./slices/ToDoSlice";
import UIReducer from "./slices/UISlice";

const store = configureStore({
  reducer: {
    [servicesApi.reducerPath]: servicesApi.reducer,
    todo: ToDoReducer,
    ui: UIReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(servicesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export default store;
