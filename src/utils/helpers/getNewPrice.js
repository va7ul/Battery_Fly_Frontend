export const getNewPrice = (salePrice, price, newPrice) => {
  if (salePrice > 0) {
    if (typeof price === 'string') {
      const result = price.split('-');
      const minPrice = Number(result[0]);
      const maxPrice = Number(result[1]);
      const minNewPrice = Math.ceil(minPrice - (minPrice * salePrice) / 100);
      const maxNewPrice = Math.ceil(maxPrice - (maxPrice * salePrice) / 100);
      newPrice = `${minNewPrice} - ${maxNewPrice}`;
    } else {
      newPrice = Math.ceil((price * salePrice) / 100 - price);
    }
  }

  return newPrice;
};
