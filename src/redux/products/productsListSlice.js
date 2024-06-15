import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAssortment,
  getProducts,
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

const handleFulfilled = (state, action) => {
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
      .addMatcher(
        isAnyOf(
          getAssortment.pending,
          getProducts.pending,
          getSales.pending,
          getAllBatteries.pending,
          getBatteries18650.pending,
          getBatteries21700.pending,
          getBatteries32650.pending,
          getBatterieslipo.pending,
          getBatterieslifepo4.pending,
          getAssemblies.pending,
          getBatteriesForFPV.pending,
          getBatteriesForTransport.pending,
          getBatteriesForToys.pending,
          getDevices.pending,
          getMaterials.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getAssortment.rejected,
          getProducts.rejected,
          getSales.rejected,
          getAllBatteries.rejected,
          getBatteries18650.rejected,
          getBatteries21700.rejected,
          getBatteries32650.rejected,
          getBatterieslipo.rejected,
          getBatterieslifepo4.rejected,
          getAssemblies.rejected,
          getBatteriesForFPV.rejected,
          getBatteriesForTransport.rejected,
          getBatteriesForToys.rejected,
          getDevices.rejected,
          getMaterials.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          getAssortment.fulfilled,
          getProducts.fulfilled,
          getSales.fulfilled,
          getAllBatteries.fulfilled,
          getBatteries18650.fulfilled,
          getBatteries21700.fulfilled,
          getBatteries32650.fulfilled,
          getBatterieslipo.fulfilled,
          getBatterieslifepo4.fulfilled,
          getAssemblies.fulfilled,
          getBatteriesForFPV.fulfilled,
          getBatteriesForTransport.fulfilled,
          getBatteriesForToys.fulfilled,
          getDevices.fulfilled,
          getMaterials.fulfilled
        ),
        handleFulfilled
      ),
});

export const productsListReducer = productsListSlice.reducer;
