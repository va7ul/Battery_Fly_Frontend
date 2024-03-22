import { EmptyCart } from './EmptyCart/EmptyCart';
import { Title, CloseBtn } from './CartModal.styled';
import { MobileDrawer } from '../MobileDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from '../../../redux/basket/basketSelectors';
import { CartList } from './CartList/CartList';
import { IoCloseOutline } from 'react-icons/io5';
import { selectCart } from '../../../redux/menu/menuSelectors';
import { setCartOpen } from '../../../redux/menu/menuSlice';

export const CartModal = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectItems);
  const isCartOpen = useSelector(selectCart);

  const closeCart = () => {
    if (isCartOpen) {
      dispatch(setCartOpen(false));
    }
  };

  return (
    <>
      <MobileDrawer isOpen={isCartOpen} closeDrawer={closeCart} anchor="right">
        <div>
          <Title>Кошик</Title>
          <CloseBtn type="button" onClick={closeCart}>
            <IoCloseOutline />
          </CloseBtn>
        </div>
        {products.length < 1 ? (
          <EmptyCart closeCart={closeCart} />
        ) : (
          <CartList />
        )}
      </MobileDrawer>
    </>
  );
};
