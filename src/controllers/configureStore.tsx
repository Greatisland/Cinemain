import { configureStore } from "@reduxjs/toolkit";
import moviesDataSlice from "./slice";

const store = configureStore({
  reducer: {
    moviesData: moviesDataSlice
  }
});

export default store