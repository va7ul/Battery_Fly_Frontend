import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.products.isLoading;
export const selectError = state => state.products.error;
export const selectOneProduct = state => state.products.oneProduct.result;
export const selectProducts = state => state.products.productsList.allProducts;

export const selectPopularProducts = createSelector(
  [selectProducts],
  allProducts => {
    return allProducts.filter(({ popular }) => {
      return popular === true;
    });
  }
);
