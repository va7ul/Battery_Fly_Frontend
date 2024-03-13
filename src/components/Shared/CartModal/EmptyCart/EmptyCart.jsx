import sprite from '../../../../assets/images/sprite.svg';
import { Wrapper, CartIcon, Text, Button } from './EmptyCart.styled';

export const EmptyCart = () => {
  return (
    <Wrapper>
      <CartIcon>
        <use href={`${sprite}#icon-cart`}></use>
      </CartIcon>
      <Text>Додайте товари до кошика</Text>
      <Button type="button">
        <div>Продовжити покупки</div>
      </Button>
    </Wrapper>
  );
};
