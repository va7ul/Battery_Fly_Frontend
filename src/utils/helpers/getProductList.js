export const getProductList = (popularProducts, categoryName) => {
  if (categoryName === 'sale') {
    return popularProducts.filter(({ sale }) => sale === true);
  }
  return popularProducts.filter(
    ({ category, sale }) => category === categoryName && sale === false
  );
};
