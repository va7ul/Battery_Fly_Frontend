import sprite from '../../../../assets/images/sprite.svg';
import { Wrapper, CartIcon, Text, Button } from './EmptyCart.styled';

export const EmptyCart = ({ closeCart }) => {
  return (
    <Wrapper>
      <CartIcon>
        <use href={`${sprite}#icon-cart`}></use>
      </CartIcon>
      <Text>Додайте товари до кошика</Text>
      <Button type="button" onClick={closeCart}>
        <div>Продовжити покупки</div>
      </Button>
    </Wrapper>
  );
};
