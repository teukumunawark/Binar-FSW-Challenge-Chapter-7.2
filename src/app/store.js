import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../slices/carsSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
