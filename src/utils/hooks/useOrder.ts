import { useTypedSelector } from '../../redux/hooks';
import { selectItems, selectTotal } from '../../redux/basket/basketSelectors';
import {
  selectIsLoadingPromoCode,
  selectErrorPromoCode,
  selectUserDataInOrder,
  selectCity,
  selectDeliveryType,
  selectPayment,
  selectWarehouse,
  selectOrderNum,
  selectPromoCode,
  selectPromoCodeDiscount,
  selectDiscountValue,
  selectTogether,
} from '../../redux/order/orderSelectors';

export const useOrder = () => {
  const { text, tel } = useTypedSelector(selectUserDataInOrder);

  const isLoadingPromoCode = useTypedSelector(selectIsLoadingPromoCode);
  const errorPromoCode = useTypedSelector(selectErrorPromoCode);
  const orderNum = useTypedSelector(selectOrderNum);
  const total = useTypedSelector(selectTotal);
  const promoCode = useTypedSelector(selectPromoCode);
  const promoCodeDiscount = useTypedSelector(selectPromoCodeDiscount);
  const discountValue = useTypedSelector(selectDiscountValue);
  const together = useTypedSelector(selectTogether);
  const cartItems = useTypedSelector(selectItems);
  const city = useTypedSelector(selectCity);
  const warehouse = useTypedSelector(selectWarehouse);
  const payment = useTypedSelector(selectPayment);
  const deliveryType = useTypedSelector(selectDeliveryType);

  return {
    isLoadingPromoCode,
    errorPromoCode,
    text,
    tel,
    orderNum,
    total,
    promoCode,
    promoCodeDiscount,
    discountValue,
    together,
    cartItems,
    city,
    warehouse,
    payment,
    deliveryType,
  };
};
