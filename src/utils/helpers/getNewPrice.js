export const getNewPrice = (discount, price, newPrice) => {
  if (typeof price === 'string') {
    const result = price.split('-');
    const minPrice = Number(result[0]);
    const maxPrice = Number(result[1]);
    const minNewPrice = Math.ceil(minPrice - (minPrice * discount) / 100);
    const maxNewPrice = Math.ceil(maxPrice - (maxPrice * discount) / 100);
    newPrice = `${minNewPrice} - ${maxNewPrice}`;
  } else {
    newPrice = Math.ceil(price - (price * discount) / 100);
  }
  return newPrice;
};
