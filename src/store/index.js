import { configureStore } from '@reduxjs/toolkit';
import optionSlice from './optionSlice';
import passwordSlice from './passwordSlice';

const store = configureStore({
  reducer: {
    option: optionSlice.reducer,
    password: passwordSlice.reducer,
  },
});

export default store;
