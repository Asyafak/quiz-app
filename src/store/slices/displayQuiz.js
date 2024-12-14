import { createSlice } from "@reduxjs/toolkit";

const displayQuiz = createSlice({
  name: "display",
  initialState: { type: "start" },
  reducers: {
    changeDisplay: (state, { payload }) => {
      state.type = payload;
    },
  },
});

export const { changeDisplay } = displayQuiz.actions;

export default displayQuiz.reducer;
