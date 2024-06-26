export const selectUserDataInOrder = state => state.order.userData;
export const selectIsChangedProductInCart = state =>
  state.order.isChangedProductInCart;
export const selectOrderNum = state => state.order.orderNum;
export const selectIsLoading = state => state.order.isLoading;
export const selectError = state => state.order.error;
export const selectCities = state => state.order.delivery.cities;
export const selectWarehouses = state => state.order.delivery.warehouses;
export const selectCity = state => state.order.delivery.city;
export const selectWarehouse = state => state.order.delivery.warehouse;
export const selectDeliveryType = state => state.order.delivery.deliveryType;
export const selectPayment = state => state.order.delivery.payment;
export const selectIsLoadingPromoCode = state => state.order.isLoadingPromoCode;
export const selectErrorPromoCode = state => state.order.errorPromoCode;
export const selectPromoCode = state => state.order.promoCode;
export const selectPromoCodeDiscount = state => state.order.promoCodeDiscount;
export const selectDiscountValue = state => state.order.discountValue;
export const selectTogether = state => state.order.together;
