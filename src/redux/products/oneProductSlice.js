import { createSlice } from '@reduxjs/toolkit';
import { getOneProduct } from '../products/productsOperations';

const initialState = {
  result: {},
  isLoading: false,
  error: null,
};

const oneProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getOneProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.result = action.payload.result;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const oneProductReducer = oneProductSlice.reducer;
