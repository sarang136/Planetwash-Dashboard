// src/app/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './appSlice'; 

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
