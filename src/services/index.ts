import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../utils/constants/network";
import { ITodo } from "../utils/models/ITodo";

export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  tagTypes: ["Services"],
  endpoints: (build) => ({
    getTodos: build.query<ITodo[], number | string>({
      query: () => ({
        url: "/todos.json",
      }),
      transformResponse: (response: any) => {
        const arr = [];

        for (const item in response) {
          const newObj = { ...response[item], id: item };
          arr.push(newObj);
        }

        return arr as ITodo[];
      },
      providesTags: ["Services"],
    }),

    createTodo: build.mutation<ITodo, ITodo>({
      query: (todo,) => ({
        url: "/todos.json",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Services"],
    }),

    updateTodo: build.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: `/todos/${todo.id}.json`,
        method: "PATCH",
        body: { ...todo },
      }),
      invalidatesTags: ["Services"],
    }),
  }),
});
