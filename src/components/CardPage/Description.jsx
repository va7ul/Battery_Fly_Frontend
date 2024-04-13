import { useDispatch, useSelector } from 'react-redux';
import { getNewPrice } from '../../utils/helpers/getNewPrice';
import { selectOneProduct, selectPriceWithSale } from '../../redux/products/productsSelectors';
import { selectFavorites } from '../../redux/user/userSelectors';
import { addToFavorite, deleteFromFavorite } from '../../redux/user/userOperations';
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
    IconFullHeart,
    IconSquare,
    IconSpiral
} from "./Card.styled";

export const Description = () => {
    const dispatch = useDispatch();
    const { codeOfGood, description, price, sale, discount, quantity } = useSelector(selectOneProduct);
    const priceWithSale = useSelector(selectPriceWithSale);
    const favoriteItems = useSelector(selectFavorites);

    const newDescription = description.split(';');

    const newPrice = sale ? getNewPrice(discount, price) : price;

     const isInFavorites = favoriteItems.some(
    favoriteItem => favoriteItem === codeOfGood
     );
    
    const handleFavorite = () => {
        isInFavorites
            ? dispatch(deleteFromFavorite(codeOfGood))
            : dispatch(addToFavorite(codeOfGood));
    };
    
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
                      {isInFavorites ? (
             
                         <LikeBox onClick={handleFavorite}>
                                 <IconFullHeart />
                            <Like>Видалити зі списку бажань</Like>
                            </LikeBox>
                    ) : (
                            <LikeBox onClick={handleFavorite}>
                                 <IconHeart />
                            <Like>Додати до списку бажань</Like>
                            </LikeBox>
                           
        )}
                    
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