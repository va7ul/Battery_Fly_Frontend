import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeliveryInfo, PromoCode, UserData } from '../../@types/order.types';
import {
  addOrder,
  getDeliveryCities,
  getDeliveryWarehouses,
  addPromoCode,
} from './orderOperations';

type InitialState = {
  userData: UserData;
  delivery: DeliveryInfo;
  promoCode: string;
  promoCodeDiscount: number;
  discountValue: number;
  together: number;
  isChangedProductInCart: boolean;
  orderNum: string;
  isLoading: boolean;
  isLoadingPromoCode: boolean;
  error: string | null;
  errorPromoCode: string | null;
};

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

const initialState: InitialState = {
  userData: { ...defaultUserData },
  delivery: deliveryInfo,
  promoCode: '',
  promoCodeDiscount: 0,
  discountValue: 0,
  together: 0,
  isChangedProductInCart: false,
  orderNum: '',
  isLoading: false,
  isLoadingPromoCode: false,
  error: null,
  errorPromoCode: null,
};

export const handlePending = (state: InitialState) => {
  state.isLoading = true;
};

export const handlePendingAddPromoCode = (state: InitialState) => {
  state.isLoadingPromoCode = true;
};

export const handleFulfilledAddOrder = (state: InitialState, { payload }: PayloadAction<{ orderNum: string }>) => {
  state.userData = { ...defaultUserData };
  state.delivery = deliveryInfo;
  state.promoCode = '';
  state.promoCodeDiscount = 0;
  state.discountValue = 0;
  state.together = 0;
  state.isChangedProductInCart = false;
  state.orderNum = payload.orderNum;
  state.isLoading = false;
  state.error = null;
};

export const handleRejected = (
  state: InitialState,
  { payload }: PayloadAction<string | undefined>
) => {
  state.isLoading = false;
  state.error = payload ?? 'Unknown error';
};

export const handleRejectedPromoCode = (
  state: InitialState,
  { payload }: PayloadAction<string | undefined>
) => {
  state.isLoadingPromoCode = false;
  state.errorPromoCode = payload ?? 'Unknown error';
};

export const handleFulfilledGetCities = (state: InitialState, { payload }: PayloadAction<{ cities: string[]}>) => {
  state.delivery.cities = payload.cities;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledGetWarehouses = (state: InitialState, { payload }: PayloadAction<{ werehouses: string[]}>) => {
  state.delivery.warehouses = payload.werehouses;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledAddPromoCode = (
  state: InitialState,
  { payload }: PayloadAction<{ promoCode: PromoCode }>
) => {
  state.promoCode = payload.promoCode.name;
  state.promoCodeDiscount = payload.promoCode.discount;
  state.isLoadingPromoCode = false;
  state.errorPromoCode = null;
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    changeUserTel(state, { payload }: PayloadAction<string>) {
      state.userData.tel = payload;
    },
    changeUserComment(state, { payload }: PayloadAction<string>) {
      state.userData.text = payload;
    },
    checkChangeProductInCart(state, { payload }: PayloadAction<boolean>) {
      state.isChangedProductInCart = payload;
    },
    changeOrderNum(state, { payload }: PayloadAction<string>) {
      state.orderNum = payload;
    },
    changeCity(state, { payload }: PayloadAction<string>) {
      state.delivery.city = payload;
    },
    changeWarehouse(state, { payload }: PayloadAction<string>) {
      state.delivery.warehouse = payload;
    },
    changeDeliveryType(state, { payload }: PayloadAction<string>) {
      state.delivery.deliveryType = payload;
    },
    changePayment(state, { payload }: PayloadAction<string>) {
      state.delivery.payment = payload;
    },
    changeDiscount(state, { payload }: PayloadAction<number>) {
      state.discountValue = payload;
    },
    changeTogether(state, { payload }: PayloadAction<number>) {
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
      .addCase(addPromoCode.pending, handlePendingAddPromoCode)
      .addCase(addPromoCode.fulfilled, handleFulfilledAddPromoCode)
      .addCase(addPromoCode.rejected, handleRejectedPromoCode);
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
