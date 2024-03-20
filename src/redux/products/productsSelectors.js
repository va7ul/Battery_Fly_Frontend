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

export const selectPopularProducts = createSelector(
  [selectProducts],
  allProducts => allProducts.filter(({ popular }) => popular === true)
);
