import { createSelector } from '@reduxjs/toolkit';

export const selectOneProductIsLoading = state =>
  state.products.oneProduct.isLoading;
export const selectOneProductError = state => state.products.oneProduct.error;
export const selectOneProduct = state => state.products.oneProduct.result;
export const selectOneProductPrice = state =>
  state.products.oneProduct.result.priceOneProduct;

export const selectAllProductsIsLoading = state =>
  state.products.productsList.isLoading;
export const selectAllProductsError = state =>
  state.products.productsList.error;
export const selectProducts = state => state.products.productsList.allProducts;
export const selectSelectedHolder = state =>
  state.products.oneProduct.selectedHolder;
export const selectSelectedSealing = state =>
  state.products.oneProduct.selectedSealing;
export const selectQuantityOrders = state =>
  state.products.oneProduct.quantityOrders;
export const selectSealingPrice = state =>
  state.products.oneProduct.sealingPrice;
export const selectHolderPrice = state => state.products.oneProduct.holderPrice;
export const selectPriceWithSale = state =>
  state.products.oneProduct.priceWithSale;

export const selectPopularProducts = createSelector(
  [selectProducts],
  allProducts => allProducts.filter(({ popular }) => popular === true)
);
