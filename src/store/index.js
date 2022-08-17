import { configureStore } from '@reduxjs/toolkit';
import optionSlice from './optionSlice';
import valueArrSlice from './valueArrSlice';

const store = configureStore({
  reducer: {
    option: optionSlice.reducer,
    valueArr: valueArrSlice.reducer,
  },
});

export default store;
