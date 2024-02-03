import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/auth/authSlice";
import { apiSlice } from "./feature/auth/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
