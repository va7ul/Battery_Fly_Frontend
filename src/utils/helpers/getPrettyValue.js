export const getPrettyValue = value => {
  
  const prettyPriceArr = value.toString().split('');
  const firstLength = prettyPriceArr.length;

  for (let n = firstLength - 3; n >= 1; n -= 3) {
    prettyPriceArr.splice(n, 0, ' ');
  }
  const priceArr = prettyPriceArr.join('');
  return priceArr;
};
