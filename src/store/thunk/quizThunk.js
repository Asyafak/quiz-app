import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchQuiz = createAsyncThunk("quiz/data", async () => {
  const response = await axios.get("http://127.0.0.1:3000/quiz");
  return response.data;
});

export { fetchQuiz };
