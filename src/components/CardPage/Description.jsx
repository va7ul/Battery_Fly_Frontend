import { useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import {
  DescBox,
  TextBox,
  Text,
  PriceBox,
  Price,
  LikeBox,
  Like,
  Desc,
  Item,
  IconHeart
  } from "./Card.styled";

export const Description = () => {
    const { codeOfGood, description, price, quantity } = useSelector(selectOneProduct);

    const newDescription = description.split(';');
    
    return (
        <DescBox>
            <TextBox>
                {quantity > 0 ? (
                    <Text style={{ color: 'rgba(20, 211, 16, 1)' }}>В наявності</Text>
                ) : (
                    <Text style={{ color: 'rgba(255, 0, 0, 1)' }}>Немає в наявності</Text>
                )}
                <Text>Код товару: {codeOfGood}</Text>
            </TextBox>
            <PriceBox>
                <Price>{price} грн</Price>
                <LikeBox>
                    <IconHeart />
                    <Like>Додати до списку бажань</Like>
                </LikeBox>
            </PriceBox>
            <Desc>{newDescription.map(i => <Item key={i}>{i}</Item>)}</Desc>
        </DescBox>
    );
};