import { EmptyCart } from './EmptyCart/EmptyCart';
import { Title } from './CartModal.styled';
import { MobileDrawer } from '../MobileDrawer';
import { useSelector } from 'react-redux';
import { selectItems } from '../../../redux/basket/basketSelectors';
import { CartList } from './CartList/CartList';

export const CartModal = ({ isOpen, closeCartDrawer }) => {
  const products = useSelector(selectItems);

  return (
    <>
      <MobileDrawer
        isOpen={isOpen}
        closeDrawer={closeCartDrawer}
        anchor="right"
      >
        <Title>Кошик</Title>
        {products.length < 1 ? <EmptyCart /> : <CartList />}
      </MobileDrawer>
    </>
  );
};
