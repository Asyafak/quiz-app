import { createSlice } from "@reduxjs/toolkit";

const indexSlices = createSlice({
  name: "index",
  initialState: {
    index: 0,
  },
  reducers: {
    nextQuestion: (state) => {
      state.index++;
    },
    prevQuestion: (state) => {
      state.index--;
    },
    resetIndex: (state) => {
      state.index = 0;
    },
  },
});

export const { nextQuestion, prevQuestion, resetIndex } = indexSlices.actions;
export default indexSlices.reducer;
