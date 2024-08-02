export const getNewPrice = (
  discount: number,
  price: string | number
): string | number => {
  if (typeof price === 'string') {
    const [minPrice, maxPrice] = price.split('-').map(Number);
    const minNewPrice = Math.round(minPrice - (minPrice * discount) / 100);
    const maxNewPrice = Math.round(maxPrice - (maxPrice * discount) / 100);
    return `${minNewPrice} - ${maxNewPrice}`;
  } else {
    return Math.round(price - (price * discount) / 100);
  }
};
