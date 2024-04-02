import { CartList } from '../CartList/CartList';
import { Text, Total, BtnWrap, Button, Wrap } from './FilledCart.styled';
import { selectCart } from '../../../../redux/menu/menuSelectors';
import { setCartOpen } from '../../../../redux/menu/menuSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotal } from '../../../../redux/basket/basketSelectors';

export const FilledCart = () => {
  const dispatch = useDispatch();
  const total = useSelector(selectTotal);
  const isCartOpen = useSelector(selectCart);

  const closeCart = () => {
    if (isCartOpen) {
      dispatch(setCartOpen(false));
    }
  };

  return (
    <>
      <CartList />
      <Wrap>
        <Text>
          Загальна сума:<Total>{total} грн</Total>
        </Text>
        <BtnWrap>
          <Button type="button" onClick={closeCart}>
            <div>Продовжити покупки</div>
          </Button>
          <Button type="button">
            <div>Оформити замовлення</div>
          </Button>
        </BtnWrap>
      </Wrap>
    </>
  );
};
