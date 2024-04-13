import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import noImage from '../../../assets/images/no-image-available.webp';
import {
  addToFavorite,
  deleteFromFavorite,
} from '../../../redux/user/userOperations';
import { addItem } from '../../../redux/basket/basketSlice';
import { setCartOpen } from '../../../redux/menu/menuSlice';
import {
  IconHeart,
  IconFullHeart,
  StyledImage,
  ContentWrapper,
  CardTitle,
  PriceContainer,
  PriceNew,
  PriceOld,
  ChooseBtn,
  Disabledbtn,
} from './ProductsCard.styled';
import { selectFavorites } from '../../../redux/user/userSelectors';
import { selectItems } from '../../../redux/basket/basketSelectors';
import { getNewPrice } from 'utils/helpers/index';

export const ProductsCard = ({ product, category }) => {
  const dispatch = useDispatch();

  const { codeOfGood, image, name, price, discount, sale, capacity, quantity } =
    product;

  const addDefaultImg = e => {
    e.currentTarget.src = `${noImage}`;
  };

  const basketItems = useSelector(selectItems);
  const isInBasket = basketItems.some(
    basketItem => basketItem.codeOfGood === codeOfGood
  );

  const favoriteItems = useSelector(selectFavorites);
  const isInFavorites = favoriteItems.some(
    favoriteItem => favoriteItem === codeOfGood
  );

  const newPrice = sale ? getNewPrice(discount, price) : price;

  const handleFavorite = () => {
    isInFavorites
      ? dispatch(deleteFromFavorite(codeOfGood))
      : dispatch(addToFavorite(codeOfGood));
  };

  const addToBasket = () => {
    dispatch(
      addItem({
        ...product,
        price: sale ? newPrice : price,
        capacityKey: '',
        selectedSealing: false,
        selectedHolder: false,
        quantityOrdered: 1,
        totalPrice: sale ? newPrice : price,
      })
    );
  };

  const goToBasket = () => {
    dispatch(setCartOpen(true));
  };

  return (
    <>
      <ContentWrapper>
        {isInFavorites ? (
          <IconFullHeart onClick={handleFavorite} />
        ) : (
          <IconHeart onClick={handleFavorite} />
        )}
        <Link to={`../assortment/${codeOfGood}`}>
          <StyledImage
            category={category}
            loading="lazy"
            src={image[0] || noImage}
            alt={name}
            onError={addDefaultImg}
          />
          <CardTitle>{name}</CardTitle>
        </Link>
        <PriceContainer>
          <PriceNew>{newPrice} грн</PriceNew>
          {sale && <PriceOld>{price} грн</PriceOld>}
        </PriceContainer>
        {!capacity ? (
          !isInBasket ? (
            quantity > 0 ? (
              <ChooseBtn onClick={addToBasket}>Додати у кошик</ChooseBtn>
            ) : (
              <Disabledbtn disabled>Немає в наявності</Disabledbtn>
            )
          ) : (
            <ChooseBtn onClick={goToBasket}>Перейти у кошик</ChooseBtn>
          )
        ) : (
          <Link to={`../assortment/${codeOfGood}`}>
            <ChooseBtn>Оберіть параметри</ChooseBtn>
          </Link>
        )}
      </ContentWrapper>
    </>
  );
};
