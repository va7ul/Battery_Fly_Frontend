import { createSlice } from '@reduxjs/toolkit';
import {
  addOrder,
  getDeliveryCities,
  getDeliveryWarehouses,
  addPromoCode,
} from './orderOperations';

const defaultUserData = {
  tel: '',
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
  promoCode: '',
  promoCodeDiscount: 0,
  discountValue: 0,
  together: 0,
  isChangedProductInCart: false,
  orderNum: '',
  isLoading: false,
  error: null,
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilledAddOrder = (state, { payload }) => {
  state.userData = { ...defaultUserData };
  state.delivery = deliveryInfo;
  state.promoCode = '';
  state.promoCodeDiscount = 0;
  state.discountValue = 0;
  state.together = 0;
  state.isChangedProductInCart = false;
  state.orderNum = payload.orderNum;
  state.isLoading = false;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledGetCities = (state, { payload }) => {
  state.delivery.cities = payload.cities;
  state.isLoading = false;
  state.error = '';
};

export const handleFulfilledGetWarehouses = (state, { payload }) => {
  state.delivery.warehouses = payload.werehouses;
  state.isLoading = false;
  state.error = '';
};

export const handleFulfilledAddPromoCode = (state, { payload }) => {
  state.promoCode = payload.promoCode.name;
  state.promoCodeDiscount = payload.promoCode.discount;
  state.error = '';
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    changeUserTel(state, { payload }) {
      state.userData.tel = payload;
    },
    changeUserComment(state, { payload }) {
      state.userData.text = payload;
    },
    checkChangeProductInCart(state, { payload }) {
      state.isChangedProductInCart = payload;
    },
    changeOrderNum(state, { payload }) {
      state.orderNum = payload;
    },
    changeCity(state, { payload }) {
      state.delivery.city = payload;
    },
    changeWarehouse(state, { payload }) {
      state.delivery.warehouse = payload;
    },
    changeDeliveryType(state, { payload }) {
      state.delivery.deliveryType = payload;
    },
    changePayment(state, { payload }) {
      state.delivery.payment = payload;
    },
    changeDiscount(state, { payload }) {
      state.discountValue = payload;
    },
    changeTogether(state, { payload }) {
      state.together = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addOrder.pending, handlePending)
      .addCase(addOrder.fulfilled, handleFulfilledAddOrder)
      .addCase(addOrder.rejected, handleRejected)
      .addCase(getDeliveryCities.pending, handlePending)
      .addCase(getDeliveryCities.fulfilled, handleFulfilledGetCities)
      .addCase(getDeliveryCities.rejected, handleRejected)
      .addCase(getDeliveryWarehouses.pending, handlePending)
      .addCase(getDeliveryWarehouses.fulfilled, handleFulfilledGetWarehouses)
      .addCase(getDeliveryWarehouses.rejected, handleRejected)
      .addCase(addPromoCode.fulfilled, handleFulfilledAddPromoCode)
      .addCase(addPromoCode.rejected, handleRejected);
  },
});

export const {
  changeUserTel,
  changeUserComment,
  checkChangeProductInCart,
  changeOrderNum,
  changeCity,
  changeWarehouse,
  changeDeliveryType,
  changePayment,
  changeDiscount,
  changeTogether,
} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
