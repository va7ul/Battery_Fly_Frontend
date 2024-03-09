import { createSlice } from '@reduxjs/toolkit';
import { getOneProduct } from '../products/productsOperations';

const initialState = {
  result: {
    description: '',
    capacity: {},
    information: '',
    price: '',
    image: [],
  },
  isLoading: false,
  error: null,
};

const oneProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setPrice(state, action) {
      state.result.price = action.payload;
    },
  },
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

export const { setPrice } = oneProductSlice.actions;
export const oneProductReducer = oneProductSlice.reducer;
