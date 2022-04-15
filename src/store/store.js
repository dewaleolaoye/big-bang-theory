import { configureStore } from "@reduxjs/toolkit";
import { choiceApi } from "./choiceApi.service";

export const store = configureStore({
  reducer: {
    [choiceApi.reducerPath]: choiceApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(choiceApi.middleware),
});
