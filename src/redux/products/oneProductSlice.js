import { createSlice } from '@reduxjs/toolkit';
import { getOneProduct } from '../products/productsOperations';

const initialState = {
  result: {
    description: '',
    capacity: {},
    capacityKey: '',
    information: '',
    price: '',
    priceOneProduct: '',
    image: [],
  },
  selectedHolder: false,
  selectedSealing: false,
  holderPrice: 0,
  sealingPrice: 100,
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
    setPriceOneProduct(state, action) {
      state.result.priceOneProduct = action.payload;
    },
    setSelectedHolder(state, action) {
      console.log(action.payload);
      state.selectedHolder = action.payload;
    },
    setSelectedSealing(state, action) {
      state.selectedSealing = action.payload;
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
        state.result.priceOneProduct = action.payload.result.price;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const {
  setPrice,
  setCapacityKey,
  setPriceOneProduct,
  setSelectedHolder,
  setSelectedSealing,
} = oneProductSlice.actions;
export const oneProductReducer = oneProductSlice.reducer;
