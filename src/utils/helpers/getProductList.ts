import { Product } from '../../@types/products.types';

export const getProductList = (
  popularProducts: Product[],
  categoryName?: string
): Product[] => {
  return popularProducts.filter(({ category, sale }) => {
    if (categoryName === 'sale') {
      return sale === true;
    }
    return category === categoryName;
  });
};
