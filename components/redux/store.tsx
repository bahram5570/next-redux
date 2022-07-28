import { configureStore } from "@reduxjs/toolkit";
import outputSlice from "./outputSlice";
import { createWrapper } from "next-redux-wrapper";

const store = () =>
  configureStore({
    reducer: {
      outputReducer: outputSlice,
    },
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(store);
