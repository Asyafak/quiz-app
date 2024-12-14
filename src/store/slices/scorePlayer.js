import { createSlice } from "@reduxjs/toolkit";

const scorePlayer = createSlice({
  name: "score",
  initialState: {
    true: 0,
    false: 0,
    score: 0,
  },
  reducers: {
    countScore: (state, { payload }) => {
      payload.inputsPlayer.forEach((input, i) => {
        input.answer === payload.quiz[i].answer ? state.true++ : state.false++;
      });
      const quesionLength = payload.quiz.length;
      state.false += quesionLength - payload.inputsPlayer.length;

      state.score = Math.floor((state.true / quesionLength) * 100);
    },
    resetScore: (state) => {
      state.true = 0;
      state.false = 0;
      state.score = 0;
    },
  },
});

export const { countScore, resetScore } = scorePlayer.actions;
export default scorePlayer.reducer;
