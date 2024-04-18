import { createSlice } from '@reduxjs/toolkit';
import {
  addOrder,
  getDeliveryCity,
  getDeliveryWarehouses,
} from './orderOperations';

const defaultUserData = {
  firstName: '',
  lastName: '',
  tel: '',
  email: '',
  text: '',
};

const deliveryInfo = {
  deliveryType: '',
  cities: [],
  warehouses: [],
  payment: '',
  city: '',
  warehouse: '',
};

const initialState = {
  userData: { ...defaultUserData },
  delivery: deliveryInfo,
  isLoading: false,
  error: null,
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilledAddOrder = (state, { payload }) => {
  state.userData = payload.user;
  state.isLoading = false;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledGetCity = (state, { payload }) => {
  console.log(payload);
  state.delivery.cities = payload.cities;
  state.isLoading = false;
  state.error = '';
};

export const handleFulfilledGetWarehouses = (state, { payload }) => {
  state.delivery.warehouses = payload.werehouses;
  console.log(payload);
  state.isLoading = false;
  state.error = '';
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    changeUserTel(state, { payload }) {
      state.userData.tel = payload;
    },
    changeCity(state, { payload }) {
      state.delivery.city = payload;
    },
    changeCities(state, { payload }) {
      state.delivery.cities = [payload];
    },
    changeWarehouses(state, { payload }) {
      state.delivery.warehouses = payload;
    },
    changeWarehouse(state, { payload }) {
      state.delivery.warehouse = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addOrder.pending, handlePending)
      .addCase(addOrder.fulfilled, handleFulfilledAddOrder)
      .addCase(addOrder.rejected, handleRejected)
      .addCase(getDeliveryCity.pending, handlePending)
      .addCase(getDeliveryCity.fulfilled, handleFulfilledGetCity)
      .addCase(getDeliveryCity.rejected, handleRejected)
      .addCase(getDeliveryWarehouses.pending, handlePending)
      .addCase(getDeliveryWarehouses.fulfilled, handleFulfilledGetWarehouses)
      .addCase(getDeliveryWarehouses.rejected, handleRejected);
  },
});

export const {
  changeUserTel,
  changeCity,
  changeCities,
  changeWarehouses,
  changeWarehouse,
} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
