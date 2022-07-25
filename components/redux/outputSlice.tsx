import { createSlice } from "@reduxjs/toolkit";

const initialState = { txt: "", no: 0 };

const outputSlice = createSlice({
  name: "outputSlice",
  initialState,
  reducers: {
    numberAction: (state, action) => {
      state.no = action.payload;
    },
    txtAction: (state, action) => {
      state.txt = action.payload;
    },
  },
});

export const { numberAction, txtAction } = outputSlice.actions;
export default outputSlice.reducer;
