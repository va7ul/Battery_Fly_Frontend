export const getProductList = (popularProducts, categoryName) => {
  return popularProducts.filter(({ category, sale }) => {
    if (categoryName === 'sale') {
      return sale === true;
    }
    return category === categoryName;
  });
};
