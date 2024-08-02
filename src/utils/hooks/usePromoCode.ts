import { useEffect } from 'react';
import { useTypedDispatch } from '../../redux/hooks';
import { changeDiscount, changeTogether } from '../../redux/order/orderSlice';
import { useOrder } from './useOrder';

export const usePromoCode = () => {
  const { cartItems, promoCodeDiscount, total } = useOrder();

  const discountValue = Math.round(
    (cartItems
      .filter(item => !item.sale)
      .reduce((discount, item) => {
        return discount + item.totalPrice;
      }, 0) *
      promoCodeDiscount) /
      100
  );

  const together = total - discountValue;

  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(changeDiscount(discountValue));
    dispatch(changeTogether(together));
  }, [dispatch, discountValue, together]);

  return { total, discountValue, together };
};
