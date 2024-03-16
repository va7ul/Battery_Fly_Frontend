import { useSelector } from 'react-redux';
import {
  selectItems,
  selectTotal,
} from '../../../../redux/basket/basketSelectors';
import { CartItem } from './CartItem/CartItem';
import { List, Text, Total, BtnWrap, Button } from './CartList.styled';

export const CartList = ({ closeCartDrawer }) => {
  const products = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <>
      <List>
        {products.map(item => (
          <CartItem key={item.codeOfGood} item={item} />
        ))}
      </List>
      <Text>
        Загальна сума:<Total>{total} грн</Total>
      </Text>
      <BtnWrap>
        <Button type="button" onClick={closeCartDrawer}>
          <div>Продовжити покупки</div>
        </Button>
        <Button type="button">
          <div>Оформити замовлення</div>
        </Button>
      </BtnWrap>
    </>
  );
};
