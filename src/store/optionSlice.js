import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  length: 8,
  symbol: false,
  number: false,
  lower: false,
  upper: false,
  similar: false,
  exclude: '',
  include: '',
};

const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    changeLength: (state, action) => {
      state.length = Number(action.payload);
    },
    changeSymbol: (state, action) => {
      state.symbol = action.payload;
    },
    changeNumber: (state, action) => {
      state.number = action.payload;
    },
    changeLower: (state, action) => {
      state.lower = action.payload;
    },
    changeUpper: (state, action) => {
      state.upper = action.payload;
    },
    changeSimilar: (state, action) => {
      state.similar = action.payload;
    },
    changeExclude: (state, action) => {
      state.exclude = action.payload;
    },
    changeInclude: (state, action) => {
      state.include = action.payload;
    },
  },
});

export default optionSlice;
export const {
  changeLength,
  changeSymbol,
  changeNumber,
  changeLower,
  changeUpper,
  changeSimilar,
  changeExclude,
  changeInclude,
} = optionSlice.actions;
