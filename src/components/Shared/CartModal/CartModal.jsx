import { EmptyCart } from './EmptyCart/EmptyCart';
import { Title, CloseBtn } from './CartModal.styled';
import { MobileDrawer } from '../MobileDrawer';
import { useSelector } from 'react-redux';
import { selectItems } from '../../../redux/basket/basketSelectors';
import { CartList } from './CartList/CartList';
import { IoCloseOutline } from 'react-icons/io5';

export const CartModal = ({ isOpen, closeCartDrawer }) => {
  const products = useSelector(selectItems);

  return (
    <>
      <MobileDrawer
        isOpen={isOpen}
        closeDrawer={closeCartDrawer}
        anchor="right"
      >
        <div>
          <Title>Кошик</Title>
          <CloseBtn type="button" onClick={closeCartDrawer}>
            <IoCloseOutline />
          </CloseBtn>
        </div>
        {products.length < 1 ? (
          <EmptyCart closeCartDrawer={closeCartDrawer} />
        ) : (
          <CartList closeCartDrawer={closeCartDrawer} />
        )}
      </MobileDrawer>
    </>
  );
};
