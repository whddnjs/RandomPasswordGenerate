import { createSlice } from '@reduxjs/toolkit';

const valueArrSlice = createSlice({
  name: 'valueArr',
  initialState: [],
  reducers: {
    addArr: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default valueArrSlice;
export const { addArr } = valueArrSlice.actions;
