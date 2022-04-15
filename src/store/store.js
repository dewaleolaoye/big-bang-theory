import { configureStore } from "@reduxjs/toolkit";
import { choiceApi } from "./choiceApi.service";
import { scoreReducer } from "./score.slice";

export const store = configureStore({
  reducer: {
    [choiceApi.reducerPath]: choiceApi.reducer,
    score: scoreReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(choiceApi.middleware),
});
