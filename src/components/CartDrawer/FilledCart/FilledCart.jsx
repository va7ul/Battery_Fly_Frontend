import { CartList } from '../CartList/CartList';
import {
  ListWrap,
  Text,
  Total,
  BtnWrap,
  Button,
  Wrap,
  StyledLink,
} from './FilledCart.styled';
import { selectCart } from '../../../redux/menu/menuSelectors';
import { setCartOpen } from '../../../redux/menu/menuSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getPrettyValue } from 'utils/helpers';
import { selectTotal } from '../../../redux/basket/basketSelectors';

export const FilledCart = () => {
  const dispatch = useDispatch();
  const total = useSelector(selectTotal);
  const isCartOpen = useSelector(selectCart);
  const prettyTotal = getPrettyValue(total);

  const closeCart = () => {
    if (isCartOpen) {
      dispatch(setCartOpen(false));
    }
  };

  return (
    <>
      <ListWrap>
        <CartList />
      </ListWrap>
      <Wrap>
        <Text>
          Загальна сума:<Total>{prettyTotal} грн</Total>
        </Text>
        <BtnWrap>
          <Button type="button" onClick={closeCart}>
            Продовжити покупки
          </Button>
          <StyledLink to="checkout" onClick={closeCart}>
            Оформити замовлення
          </StyledLink>
        </BtnWrap>
      </Wrap>
    </>
  );
};
