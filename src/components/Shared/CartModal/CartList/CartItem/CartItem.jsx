// import { useDispatch } from 'react-redux';
import {
  Item,
  Image,
  Name,
  QuantityWrap,
  Button,
  Input,
  Price,
  CloseBtn,
} from './CartItem.styled';
import { FaMinus, FaPlus, FaXmark } from 'react-icons/fa6';
// import { deleteItem } from '../../../../../redux/basket/basketSlice';

export const CartItem = ({
  item: { codeOfGood, image, name, quantity, price },
}) => {
  //   const dispatch = useDispatch();

  return (
    <Item>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
      <QuantityWrap>
        <Button type="button">
          <FaMinus />
        </Button>
        <Input type="number" placeholder={`${quantity} шт`} />
        <Button type="button">
          <FaPlus />
        </Button>
      </QuantityWrap>
      <Price>{price}</Price>
      <CloseBtn
        type="button"
        //   onClick={() => dispatch(deleteItem(codeOfGood))}
      >
        <FaXmark />
      </CloseBtn>
    </Item>
  );
};
