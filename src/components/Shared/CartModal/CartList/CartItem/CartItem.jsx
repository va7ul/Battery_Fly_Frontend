import {
  Item,
  Image,
  Name,
  QuantityWrap,
  Button,
  Input,
  Price,
} from './CartItem.styled';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';

export const CartItem = ({ item: { image, name, quantity, price } }) => {
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
    </Item>
  );
};
