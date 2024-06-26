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
import { addPromoCode } from '../../../redux/order/orderOperations';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';

export const TotalPrice = () => {
  const { promoCodeDiscount, errorPromoCode, isLoadingPromoCode } = useOrder();
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

  const getDiscount = e => {
    e.preventDefault();
    dispatch(addPromoCode(e.currentTarget.promo.value.toString()));
  };

  return (
    <>
      <PriceContainer>
        <Sum>
          Загальна сума:
          <span> {prettyTotal} грн</span>
        </Sum>
        <Discount discount={promoCodeDiscount}>
          Знижка за промокодом:
          <span> - {prettyDiscount} грн</span>
        </Discount>
        <Total>
          Разом:
          <span>{prettyTogether} грн</span>
        </Total>
      </PriceContainer>
      {promoCodeDiscount ? (
        <Advert>*Знижка за промокодом не поширюється на акційні товари!</Advert>
      ) : isOpen ? (
        <>
          <UsePromo onSubmit={getDiscount}>
            <input type="text" name="promo" placeholder="Промокод"></input>
            <button type="submit">Застосувати</button>
          </UsePromo>
          {errorPromoCode && <Advert>{errorPromoCode}</Advert>}
        </>
      ) : (
        <AddPromo>
          <button type="button" onClick={handleOpen}>
            Застосувати промокод
          </button>
        </AddPromo>
      )}
      {isLoadingPromoCode && <CustomLoader />}
    </>
  );
};
