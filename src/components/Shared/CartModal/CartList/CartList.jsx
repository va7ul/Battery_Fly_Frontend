import { useDispatch, useSelector } from 'react-redux';
import {
  selectItems,
  selectTotal,
} from '../../../../redux/basket/basketSelectors';
import { CartItem } from './CartItem/CartItem';
import { List, Text, Total, BtnWrap, Button, Wrap } from './CartList.styled';
import { selectCart } from '../../../../redux/menu/menuSelectors';
import { setCartOpen } from '../../../../redux/menu/menuSlice';

export const CartList = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const isCartOpen = useSelector(selectCart);

  const closeCart = () => {
    if (isCartOpen) {
      dispatch(setCartOpen(false));
    }
  };

  return (
    <>
      <List>
        {products.map(item => (
          <CartItem key={item.codeOfGood} item={item} />
        ))}
      </List>
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
