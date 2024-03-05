import { createSlice } from '@reduxjs/toolkit';
import { getAssortment } from '../products/productsOperations';

const initialState = {
  list: {},
  isLoading: false,
  error: null,
};

const productsListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAssortment.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAssortment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(getAssortment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const productsListReducer = productsListSlice.reducer;
