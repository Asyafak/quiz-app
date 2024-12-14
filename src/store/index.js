import { configureStore } from "@reduxjs/toolkit";

import displayQuiz from "./slices/displayQuiz";
import quizData from "./slices/quizApi";
import indexSlices from "./slices/indexSlices";
import inputPlayer from "./slices/inputPlayer";
import scorePlayer from "./slices/scorePlayer";

const store = configureStore({
  reducer: {
    display: displayQuiz,
    quiz: quizData,
    pages: indexSlices,
    input: inputPlayer,
    value: scorePlayer,
  },
});

export { store };
