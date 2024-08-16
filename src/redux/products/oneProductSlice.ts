import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getOneProduct } from './productsOperations';
import { InitialStateOneProduct, ResultOneProduct } from '../../@types/products.types';

const initialState: InitialStateOneProduct = {
  result: {
    _id: '',
    codeOfGood: '',
    name: '',
    description: '',
    image: [],
    price: '',
    quantity: 0,
    sale: false,
    popular: false,
    category: '',
    type: '',
    capacity: {},
    holder: false,
    information: '',
    createdAt: '',
    updatedAt: '',
    discount: 0,
    priceOneProduct: '',
    capacityKey: '',
  },
  selectedHolder: false,
  selectedSealing: false,
  holderPrice: 0,
  sealingPrice: 0,
  quantityOrders: 1,
  priceWithSale: 0,
  isLoading: false,
  error: null,
};

const oneProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setPrice(state, action: PayloadAction<number>) {
      state.result.price = action.payload;
    },
    setCapacityKey(state, action: PayloadAction<string>) {
      state.result.capacityKey = action.payload;
    },
    setPriceOneProduct(state, action: PayloadAction<string>) {
      state.result.priceOneProduct = action.payload;
    },
    setSelectedHolder(state, action: PayloadAction<boolean>) {
      state.selectedHolder = action.payload;
    },
    setSelectedSealing(state, action: PayloadAction<boolean>) {
      state.selectedSealing = action.payload;
    },
    setQuantityOrders(state, action: PayloadAction<number>) {
      state.quantityOrders = action.payload;
    },
    setSealingPrice(state, action: PayloadAction<number>) {
      state.sealingPrice = action.payload;
    },
    setHolderPrice(state, action: PayloadAction<number>) {
      state.holderPrice = action.payload;
    },
    setPriceWithSale(state, action: PayloadAction<number>) {
      state.priceWithSale = Math.round(action.payload);
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getOneProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action: PayloadAction<{result: ResultOneProduct}>) => {
        state.isLoading = false;
        state.error = null;
        state.result = action.payload.result;
        state.result.priceOneProduct = action.payload.result.price;
      })
      .addCase(getOneProduct.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Unknown error';
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
  setPriceWithSale,
} = oneProductSlice.actions;
export const oneProductReducer = oneProductSlice.reducer;
