import {
  fetchBaseQuery,
  createApi,
  QueryFn,
} from "@reduxjs/toolkit/query/react";

const baseQuery: QueryFn = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
