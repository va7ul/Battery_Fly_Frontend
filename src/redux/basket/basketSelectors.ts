import { RootState } from "redux/store";

export const selectIsLoading = (state: RootState) => state.basket.isLoading;
export const selectError = (state: RootState) => state.basket.error;
export const selectItems = (state: RootState) => state.basket.items;
export const selectTotal = (state: RootState) => state.basket.total;
export const selectArrOfProductsWithUpdatedPrice = (state: RootState) =>
  state.basket.arrOfProductsWithUpdatedPrice;
