import { CartList } from 'components/Shared/CartModal/CartList/CartList';
import { CartWrap, Title, Text, ListWrap } from './Cart.styled';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { selectTotal } from '../../../redux/basket/basketSelectors';
export const Cart = () => {
  const total = useSelector(selectTotal);
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <CartWrap>
      <Title>Кошик</Title>
      <ListWrap>
        <CartList />
      </ListWrap>
      <Text>
        {!mobileVersion && <span>Загальна сума замовлення:</span>}
        {total} грн
      </Text>
    </CartWrap>
  );
};
