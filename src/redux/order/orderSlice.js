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
  state.delivery.warehouses = payload.warehouses;
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
    changeWarehouses(state, { payload }) {
      state.delivery.warehouses = payload;
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
      .addCase(getDeliveryWarehouses.fulfilled, handleFulfilledGetCity)
      .addCase(getDeliveryWarehouses.rejected, handleRejected);
  },
});

export const { changeUserTel, changeCity, changeWarehouses } =
  orderSlice.actions;

export const orderReducer = orderSlice.reducer;
