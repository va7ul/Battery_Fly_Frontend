import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import noImage from '../../../assets/images/no-image-available.webp';
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
} from './ProductsCard.styled';
import { selectItems } from '../../../redux/basket/basketSelectors';
import { getNewPrice } from 'utils/helpers/index';

export const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();

  const { codeOfGood, image, name, price, discount, sale, capacity } = product;

  const addDefaultImg = e => {
    e.currentTarget.src = `${noImage}`;
  };

  const basketItems = useSelector(selectItems);
  const isInBasket = basketItems.some(
    basketItem => basketItem.codeOfGood === codeOfGood
  );

  const newPrice = sale ? getNewPrice(discount, price) : price;

  const addToBasket = () => {
    dispatch(
      addItem({
        ...product,
        capacityKey: '',
        selectedSealing: false,
        selectedHolders: false,
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
        <IconHeart />
        <IconFullHeart />
        <Link to={`../assortment/${codeOfGood}`}>
          <StyledImage
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
            <ChooseBtn onClick={addToBasket}>
              <div>Додати у кошик</div>
            </ChooseBtn>
          ) : (
            <ChooseBtn onClick={goToBasket}>
              <div>Перейти у кошик</div>
            </ChooseBtn>
          )
        ) : (
          <Link to={`../assortment/${codeOfGood}`}>
            <ChooseBtn>
              <div>Оберіть параметри</div>
            </ChooseBtn>
          </Link>
        )}
      </ContentWrapper>
    </>
  );
};
