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
  sealingPrice: 0,
  quantityOrders: 1,
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
      state.selectedHolder = action.payload;
    },
    setSelectedSealing(state, action) {
      state.selectedSealing = action.payload;
    },
    setQuantityOrders(state, action) {
      state.quantityOrders = action.payload;
    },
    setSealingPrice(state, action) {
      state.sealingPrice = action.payload;
    },
    setHolderPrice(state, action) {
      state.holderPrice = action.payload;
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
  setQuantityOrders,
  setSealingPrice,
  setHolderPrice,
} = oneProductSlice.actions;
export const oneProductReducer = oneProductSlice.reducer;
