import { useSelector } from 'react-redux';
import { getNewPrice } from '../../utils/helpers/getNewPrice';
import { selectOneProduct, selectPriceWithSale } from '../../redux/products/productsSelectors';
import sprite from '../../assets/images/sprite.svg';
import {
  DescBox,
  TextBox,
  Text,
  PriceContainer,
  PriceBox,
  NewPrice,
  Price,
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
    const priceWithSale = Math.round(useSelector(selectPriceWithSale));

    const newDescription = description.split(';');

    const newPrice = sale ? getNewPrice(discount, price) : price;
    
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
                    {sale ? <NewPrice>{priceWithSale !== 0 ? priceWithSale : newPrice} грн</NewPrice> : <NewPrice>{newPrice} грн</NewPrice>}
                    {sale && <Price>{price} грн</Price>}
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