import { useSelector } from 'react-redux';
import { selectPromoCodeDiscount } from '../../redux/order/orderSelectors';
import { selectItems } from '../../redux/basket/basketSelectors';

export const usePromoCode = () => {
  const basketItems = useSelector(selectItems);
  const promoCodeDiscount = useSelector(selectPromoCodeDiscount);

  const discountValue = Math.round(
    (basketItems
      .filter(item => !item.sale)
      .reduce((discount, item) => {
        return discount + item.totalPrice;
      }, 0) *
      promoCodeDiscount) /
      100
  );

  return discountValue;
};
