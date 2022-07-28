import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = { txt: "", no: 0 };

const outputSlice = createSlice({
  name: "outputSlice",
  initialState,
  reducers: {
    increaseAction: (state) => {
      state.no++;
    },
    decreaseAction: (state) => {
      state.no--;
    },
    txtAction: (state, action) => {
      state.txt = action.payload;
    },
  },
  extraReducers: {
    
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        txt: action.payload.outputReducer.txt,
      };
    },
  },
});

export const {
  increaseAction,
  decreaseAction,
  txtAction,
} = outputSlice.actions;

export default outputSlice.reducer;
