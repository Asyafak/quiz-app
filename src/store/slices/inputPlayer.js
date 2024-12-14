import { createSlice } from "@reduxjs/toolkit";

const inputPlayer = createSlice({
  name: "input",
  initialState: {
    options: [],
  },
  reducers: {
    addOptions: (state, { payload }) => {
      if (state.options.length - 1 < payload.index) {
        state.options.push({
          index: payload.index,
          answer: payload.key,
        });
      } else {
        state.options = state.options.map((option) =>
          option.index === payload.index
            ? { ...option, answer: payload.key }
            : option
        );
      }
    },
    resetInputPlayer: (state) => {
      state.options = [];
    },
  },
});

export const { addOptions, resetInputPlayer } = inputPlayer.actions;
export default inputPlayer.reducer;
