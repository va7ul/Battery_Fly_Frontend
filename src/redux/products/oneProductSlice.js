import { createSlice } from '@reduxjs/toolkit';
import { getOneProduct } from '../products/productsOperations';

const initialState = {
  result: {
    description: '',
    capacity: {},
    capacityKey: '',
    information: '',
    price: '',
    image: [],
    // holder: '',
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
    setCapacityKey(state, action) {
      state.result.capacityKey = action.payload;
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

export const { setPrice, setCapacityKey } = oneProductSlice.actions;
export const oneProductReducer = oneProductSlice.reducer;
