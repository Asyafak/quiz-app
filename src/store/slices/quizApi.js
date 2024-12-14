import { createSlice } from "@reduxjs/toolkit";
import { fetchQuiz } from "../thunk/quizThunk";

const quizData = createSlice({
  name: "quiz",
  initialState: {
    data: [],
  },
  extraReducers(builder) {
    builder.addCase(fetchQuiz.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

export default quizData.reducer;
