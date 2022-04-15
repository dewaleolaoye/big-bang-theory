import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

const scoreSlice = createSlice({
  name: "score",

  initialState,

  reducers: {
    incrementScore: (state) => {
      state.score += 1;
    },
    decrementScore: (state) => {
      state.score -= 1;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const {
  actions: { decrementScore, incrementScore, resetScore },
  reducer: scoreReducer,
} = scoreSlice;
