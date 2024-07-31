import { RootState } from 'redux/store';

export const selectUserDataInOrder = (state: RootState) => state.order.userData;
export const selectIsChangedProductInCart = (state: RootState) =>
  state.order.isChangedProductInCart;
export const selectOrderNum = (state: RootState) => state.order.orderNum;
export const selectIsLoading = (state: RootState) => state.order.isLoading;
export const selectError = (state: RootState) => state.order.error;
export const selectCities = (state: RootState) => state.order.delivery.cities;
export const selectWarehouses = (state: RootState) =>
  state.order.delivery.warehouses;
export const selectCity = (state: RootState) => state.order.delivery.city;
export const selectWarehouse = (state: RootState) =>
  state.order.delivery.warehouse;
export const selectDeliveryType = (state: RootState) =>
  state.order.delivery.deliveryType;
export const selectPayment = (state: RootState) => state.order.delivery.payment;
export const selectIsLoadingPromoCode = (state: RootState) =>
  state.order.isLoadingPromoCode;
export const selectErrorPromoCode = (state: RootState) =>
  state.order.errorPromoCode;
export const selectPromoCode = (state: RootState) => state.order.promoCode;
export const selectPromoCodeDiscount = (state: RootState) =>
  state.order.promoCodeDiscount;
export const selectDiscountValue = (state: RootState) =>
  state.order.discountValue;
export const selectTogether = (state: RootState) => state.order.together;
