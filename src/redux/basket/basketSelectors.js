export const selectIsLoading = state => state.products.isLoading;
export const selectError = state => state.products.error;
export const selectItems = state => state.basket.items;
export const selectTotal = state => state.basket.total;
export const selectArrOfProductsWithUpdatedPrice = state =>
  state.basket.arrOfProductsWithUpdatedPrice;