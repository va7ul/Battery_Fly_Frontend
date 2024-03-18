import { useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import sprite from '../../assets/images/sprite.svg';
import {
  DescBox,
  TextBox,
  Text,
  PriceContainer,
  PriceBox,
  Price,
  SalePrice,
  LikeBox,
  Like,
  Desc,
  Item,
  IconHeart,
  IconSquare,
  IconSpiral
  } from "./Card.styled";

export const Description = () => {
    const { codeOfGood, description, price, sale, discount, quantity } = useSelector(selectOneProduct);
    const salePrice = price - (price * discount / 100);
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
            <PriceContainer>
                <PriceBox>
                    <Price>{price} грн</Price>
                    {sale ? <SalePrice>{salePrice} грн</SalePrice> : undefined}
                </PriceBox>
                <LikeBox>
                    <IconHeart />
                    <Like>Додати до списку бажань</Like>
                    <IconSquare>
                        <use href={`${sprite}#icon-square`}></use>
                    </IconSquare>
                    <IconSpiral>
                        <use href={`${sprite}#icon-Spiral_2`}></use>
                    </IconSpiral>
                </LikeBox>
            </PriceContainer>
            <Desc>{newDescription.map(i => <Item key={i}>{i}</Item>)}</Desc>
        </DescBox>
    );
};