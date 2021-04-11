import { createSlice } from '@reduxjs/toolkit';
import data from 'Redux/Questions';

const initialState = {
  index: 0,
  correct: 0,
  wrong: 0,
  end: false,
  optionChoosen: undefined,
  data: data,
  optionIndex: undefined,
};

const slice = createSlice({
  name: 'quiz',
  initialState: initialState,
  reducers: {
    valiate: (state, payload) => {
      if (state.optionChoosen === state.data[state.index].ans) {
        state.correct += 1;
      } else {
        state.wrong += 1;
      }

      state.optionChoosen = undefined;
      state.optionIndex = undefined;

      if (state.index < state.data.length - 1) {
        state.index += 1;
      } else {
        state.end = true;
      }
    },
    selectOption: (state, payload) => {
      const { option, index } = payload.payload;
      state.optionIndex = index;
      state.optionChoosen = option;
    },
    answerLater: (state, payload) => {
      const que = state.data[state.index];
      state.data.splice(state.index, 1);
      state.data.push(que);
    },
  },
});

export const { valiate, selectOption, answerLater } = slice.actions;
export const reducer = slice.reducer;
