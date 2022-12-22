import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get(
    "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
  );
  return response.data;
});

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: [],
  },
  reducers: {
    filterByDriver: (state, action) => {
      state.value = state.value.filter(
        (item) => item.available === action.payload
      );
    },
    filterByDateAndTime: (state, action) => {
      state.value = state.value.filter(
        (item) => item.availableAt >= action.payload
      );
    },
    filterByCapacity: (state, action) => {
      state.value = state.value.filter(
        (item) => item.capacity >= action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  },
});

export const { filterByDriver, filterByDateAndTime, filterByCapacity } =
  dataSlice.actions;

export const selectData = (state) => state.data.value;

export default dataSlice.reducer;
