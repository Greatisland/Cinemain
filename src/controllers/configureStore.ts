import { configureStore } from "@reduxjs/toolkit";
import moviesDataSlice from "./slice";

const store = configureStore({
  reducer: {
    moviesData: moviesDataSlice
  }
});

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch