import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../../redux/basket/basketSelectors';
import {
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
  const { firstName, lastName, email, text, tel } = useSelector(
    selectUserDataInOrder
  );

  const orderNum = useSelector(selectOrderNum);
  const total = useSelector(selectTotal);
  const promoCode = useSelector(selectPromoCode);
  const promoCodeDiscount = useSelector(selectPromoCodeDiscount);
  const discountValue = useSelector(selectDiscountValue);
  const together = useSelector(selectTogether);
  const cartItems = useSelector(selectItems);
  const city = useSelector(selectCity);
  const warehouse = useSelector(selectWarehouse);
  const payment = useSelector(selectPayment);
  const deliveryType = useSelector(selectDeliveryType);

  return {
    firstName,
    lastName,
    email,
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
