import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice/counterSlice";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from "./api/authApi";
import userSlice from './Slice/userSlice'

const store = configureStore({
  reducer: {
    example: counterSlice,
    user: userSlice,
    
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
setupListeners(store.dispatch)
