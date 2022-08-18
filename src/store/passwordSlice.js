import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    addPassword: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default passwordSlice;
export const { addPassword } = passwordSlice.actions;
