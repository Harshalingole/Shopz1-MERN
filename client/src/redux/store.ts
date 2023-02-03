import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice/counterSlice";

const store = configureStore({
  reducer: {
    example: counterSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
