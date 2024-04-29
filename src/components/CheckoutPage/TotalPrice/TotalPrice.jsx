import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useOrder, usePrettyPrice } from 'utils/hooks';
import {
  PriceContainer,
  Sum,
  Discount,
  Total,
  AddPromo,
  UsePromo,
  Advert,
} from './TotalPrice.styled';
import { changePromoCodeDiscount } from '../../../redux/order/orderSlice';

export const TotalPrice = () => {
  const { promoCodeDiscount } = useOrder();
  const { prettyTotal, prettyDiscount, prettyTogether } = usePrettyPrice();

  const [isOpen, setIsOpen] = useState(false);

  // const promoCode = {
  //   _id: '662e4d87b7322ab63b9d14cd',
  //   discount: 10,
  //   valid: true,
  // };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();

  const getDiscount = () => {
    dispatch(changePromoCodeDiscount(10));

    setIsOpen(!isOpen);
  };

  return (
    <>
      <PriceContainer>
        <Sum>
          Загальна сума:
          <span> {prettyTotal} грн</span>
        </Sum>
        <Discount>
          Знижка за промокодом:
          <span> - {prettyDiscount} грн</span>
        </Discount>
        <Total>
          Разом:
          <span> {prettyTogether} грн</span>
        </Total>
      </PriceContainer>
      {promoCodeDiscount ? (
        <Advert>*Знижка за промокодом не поширюється на акційні товари!</Advert>
      ) : isOpen ? (
        <UsePromo>
          <input></input>
          <button onClick={getDiscount}>Застосувати</button>
        </UsePromo>
      ) : (
        <AddPromo>
          <button type="button" onClick={handleOpen}>
            Застосувати промокод
          </button>
        </AddPromo>
      )}
    </>
  );
};
