export const selectUserDataInOrder = state => state.order.userData;
export const selectIsLoading = state => state.order.isLoading;
export const selectError = state => state.order.error;
export const selectCities = state => state.order.delivery.cities;
export const selectWarehouses = state => state.order.delivery.warehouses;
