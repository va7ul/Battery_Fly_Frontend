import { useState } from 'react';
import { useSelector } from 'react-redux';
import { usePrettyPrice } from 'utils/hooks';
import { selectPromoCodeDiscount } from '../../../redux/order/orderSelectors';
import {
  PriceContainer,
  Sum,
  Discount,
  Total,
  AddPromo,
  UsePromo,
  Advert,
} from './TotalPrice.styled';

export const TotalPrice = () => {
  const promoCodeDiscount = useSelector(selectPromoCodeDiscount);
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

  const getDiscount = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <PriceContainer>
        {promoCodeDiscount && (
          <>
            <Sum>
              Загальна сума:
              <span> {prettyTotal} грн</span>
            </Sum>
            <Discount>
              Знижка за промокодом:
              <span> - {prettyDiscount} грн</span>
            </Discount>
          </>
        )}
        <Total>
          Разом:
          <span> {prettyTogether} грн</span>
        </Total>
      </PriceContainer>
      {promoCodeDiscount ? (
        <Advert>*Знижка за промокодом не поширюється на акційні товари!</Advert>
      ) : isOpen ? (
        <AddPromo>
          <button type="button" onClick={handleOpen}>
            Застосувати промокод
          </button>
        </AddPromo>
      ) : (
        <UsePromo>
          <input></input>
          <button onClick={getDiscount}>Застосувати</button>
        </UsePromo>
      )}
    </>
  );
};
