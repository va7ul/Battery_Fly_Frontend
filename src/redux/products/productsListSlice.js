import { createSlice } from '@reduxjs/toolkit';
import {
  getAssortment,
  getSales,
  getAllBatteries,
  getBatteries18650,
  getBatteries21700,
  getBatteries32650,
  getBatterieslipo,
  getBatterieslifepo4,
  getAssemblies,
  getBatteriesForFPV,
  getBatteriesForTransport,
  getBatteriesForToys,
  getDevices,
  getMaterials,
} from '../products/productsOperations';

const initialState = {
  allProducts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleGetAssortmentFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = [
    ...action.payload.products,
    ...action.payload.productsZbirky,
  ];
};

const handleGetSalesFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = [
    ...action.payload.result.salesProducts,
    ...action.payload.result.salesProductsZbirky,
  ];
};

const handleGetAllBatteriesFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = action.payload.result;
};

const handleGetBatteries18650Fulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = action.payload.result;
};

const handleGetBatteries21700Fulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = action.payload.result;
};

const handleGetBatteries32650Fulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = action.payload.result;
};

const handleGetBatterieslipoFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = action.payload.result;
};

const handleGetBatterieslifepo4Fulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = action.payload.result;
};

const handleGetAssembliesFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = action.payload.result;
};

const handleGetBatteriesForFPVFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = action.payload.result;
};

const handleGetBatteriesForTransportFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = action.payload.result;
};

const handleGetBatteriesForToysFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = action.payload.result;
};

const handleGetDevicesFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = action.payload.result;
};

const handleGetMaterialsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allProducts = action.payload.result;
};

const productsListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAssortment.pending, handlePending)
      .addCase(getAssortment.fulfilled, handleGetAssortmentFulfilled)
      .addCase(getAssortment.rejected, handleRejected)
      .addCase(getSales.pending, handlePending)
      .addCase(getSales.fulfilled, handleGetSalesFulfilled)
      .addCase(getSales.rejected, handleRejected)
      .addCase(getAllBatteries.pending, handlePending)
      .addCase(getAllBatteries.fulfilled, handleGetAllBatteriesFulfilled)
      .addCase(getAllBatteries.rejected, handleRejected)
      .addCase(getBatteries18650.pending, handlePending)
      .addCase(getBatteries18650.fulfilled, handleGetBatteries18650Fulfilled)
      .addCase(getBatteries18650.rejected, handleRejected)
      .addCase(getBatteries21700.pending, handlePending)
      .addCase(getBatteries21700.fulfilled, handleGetBatteries21700Fulfilled)
      .addCase(getBatteries21700.rejected, handleRejected)
      .addCase(getBatteries32650.pending, handlePending)
      .addCase(getBatteries32650.fulfilled, handleGetBatteries32650Fulfilled)
      .addCase(getBatteries32650.rejected, handleRejected)
      .addCase(getBatterieslipo.pending, handlePending)
      .addCase(getBatterieslipo.fulfilled, handleGetBatterieslipoFulfilled)
      .addCase(getBatterieslipo.rejected, handleRejected)
      .addCase(getBatterieslifepo4.pending, handlePending)
      .addCase(
        getBatterieslifepo4.fulfilled,
        handleGetBatterieslifepo4Fulfilled
      )
      .addCase(getBatterieslifepo4.rejected, handleRejected)
      .addCase(getAssemblies.pending, handlePending)
      .addCase(getAssemblies.fulfilled, handleGetAssembliesFulfilled)
      .addCase(getAssemblies.rejected, handleRejected)
      .addCase(getBatteriesForFPV.pending, handlePending)
      .addCase(getBatteriesForFPV.fulfilled, handleGetBatteriesForFPVFulfilled)
      .addCase(getBatteriesForFPV.rejected, handleRejected)
      .addCase(getBatteriesForTransport.pending, handlePending)
      .addCase(
        getBatteriesForTransport.fulfilled,
        handleGetBatteriesForTransportFulfilled
      )
      .addCase(getBatteriesForTransport.rejected, handleRejected)
      .addCase(getBatteriesForToys.pending, handlePending)
      .addCase(
        getBatteriesForToys.fulfilled,
        handleGetBatteriesForToysFulfilled
      )
      .addCase(getBatteriesForToys.rejected, handleRejected)
      .addCase(getDevices.pending, handlePending)
      .addCase(getDevices.fulfilled, handleGetDevicesFulfilled)
      .addCase(getDevices.rejected, handleRejected)
      .addCase(getMaterials.pending, handlePending)
      .addCase(getMaterials.fulfilled, handleGetMaterialsFulfilled)
      .addCase(getMaterials.rejected, handleRejected),
});

export const productsListReducer = productsListSlice.reducer;
