export const getNewPrice = (discount, price) => {
  if (typeof price === 'string') {
    const [minPrice, maxPrice] = price.split('-').map(Number);
    const minNewPrice = Math.ceil(minPrice - (minPrice * discount) / 100);
    const maxNewPrice = Math.ceil(maxPrice - (maxPrice * discount) / 100);
    return `${minNewPrice} - ${maxNewPrice}`;
  } else {
    return Math.ceil(price - (price * discount) / 100);
  }
};
