import { RootState } from 'redux/store';

export const selectOneProductIsLoading = (state: RootState) =>
  state.products.oneProduct.isLoading;
export const selectOneProductError = (state: RootState) => state.products.oneProduct.error;
export const selectOneProduct = (state: RootState) => state.products.oneProduct.result;
export const selectOneProductPrice = (state: RootState) =>
  state.products.oneProduct.result.priceOneProduct;
export const selectSelectedHolder = (state: RootState) =>
  state.products.oneProduct.selectedHolder;
export const selectSelectedSealing = (state: RootState) =>
  state.products.oneProduct.selectedSealing;
export const selectQuantityOrders = (state: RootState) =>
  state.products.oneProduct.quantityOrders;
export const selectSealingPrice = (state: RootState) =>
  state.products.oneProduct.sealingPrice;
export const selectHolderPrice = (state: RootState) => state.products.oneProduct.holderPrice;
export const selectPriceWithSale = (state: RootState) =>
  state.products.oneProduct.priceWithSale;

export const selectAllProductsIsLoading = (state: RootState) =>
  state.products.productsList.isLoading;
export const selectAllProductsError = (state: RootState) =>
  state.products.productsList.error;
export const selectProducts = (state: RootState) =>
  state.products.productsList.allProducts;
