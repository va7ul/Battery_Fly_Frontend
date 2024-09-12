import { FC } from 'react';
import sprite from '../../../assets/images/sprite.svg';
import { Wrapper, CartIcon, Text, Button } from './EmptyCart.styled';

type EmptyCartProps = {
  closeCart: () => void;
  isOrder?: boolean; 
}

export const EmptyCart: FC<EmptyCartProps> = ({ closeCart, isOrder=false}) => {
  return (
    <Wrapper $isOrder={isOrder}>
      <CartIcon>
        <use href={`${sprite}#icon-cart`}></use>
      </CartIcon>
      <Text>Додайте товари до кошика</Text>
      <Button type="button" onClick={closeCart}>
        Продовжити покупки
      </Button>
    </Wrapper>
  );
};
