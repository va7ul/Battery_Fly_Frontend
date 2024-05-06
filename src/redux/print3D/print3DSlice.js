import { createSlice } from '@reduxjs/toolkit';
import { getPrint3D } from '../print3D/print3DOperations';

const initialState = {
  result: {
    name: '',
    description: '',
    image: [],
    information: '',
    accuracy: [],
    plactic: [],
    color: [],
    table1: {},
    table2: {},
  },
  isLoading: false,
  error: null,
};

const print3DSlice = createSlice({
  name: 'print3D',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getPrint3D.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPrint3D.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.result = action.payload.print3d;
      })
      .addCase(getPrint3D.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const print3DReducer = print3DSlice.reducer;
