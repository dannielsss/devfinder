import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState, 
  reducers: {
    toggleAlert: (state, action) => {
      state.message = action.payload;
    }
  }
})

export const { toggleAlert } = alertSlice.actions;
export default alertSlice.reducer;