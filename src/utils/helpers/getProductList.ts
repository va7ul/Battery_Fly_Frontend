import { Product, ProductZbirky } from '../../@types/products.types';

type PopularProduct = Product | ProductZbirky;
type CategoryName = string;

export const getProductList = (
  popularProducts: PopularProduct[],
  categoryName?: CategoryName
): PopularProduct[] => {
  return popularProducts.filter(({ category, sale }) => {
    if (categoryName === 'sale') {
      return sale === true;
    }
    return category === categoryName;
  });
};
