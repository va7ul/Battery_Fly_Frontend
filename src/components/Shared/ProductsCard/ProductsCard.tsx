import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Product, ProductZbirky } from '../../../@types/products.types';
import noImage from '../../../assets/images/no-image-available.webp';
import { useAuth } from 'utils/hooks';
import { getNewPrice } from 'utils/helpers/index';
import { useTypedDispatch, useTypedSelector } from '../../../redux/hooks';
import {
  addToFavorite,
  deleteFromFavorite,
} from '../../../redux/user/userOperations';
import { addItem } from '../../../redux/basket/basketSlice';
import { setCartOpen } from '../../../redux/menu/menuSlice';
import { setAuthModalOpen } from '../../../redux/user/userSlice';
import { selectFavorites } from '../../../redux/user/userSelectors';
import { selectItems } from '../../../redux/basket/basketSelectors';
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

type ProductsCardProps = {
  product: Product | ProductZbirky;
  category: string;
};

export const ProductsCard: React.FC<ProductsCardProps> = ({
  product,
  category,
}) => {
  const dispatch = useTypedDispatch();

  const { codeOfGood, image, name, price, discount, sale, capacity, quantity } =
    product;

  const addDefaultImg = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ): void => {
    e.currentTarget.src = `${noImage}`;
  };

  const { isLoggedIn } = useAuth();
  const basketItems = useTypedSelector(selectItems);
  const isInBasket = basketItems.some(
    basketItem => basketItem.codeOfGood === codeOfGood
  );

  const favoriteItems = useTypedSelector(selectFavorites);
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
    toast.success('Товар додано до кошика!');
  };

  const goToBasket = () => {
    dispatch(setCartOpen(true));
  };

  const handleOpenSignUpSignInModal = () => {
    if (!isLoggedIn) {
      dispatch(setAuthModalOpen(true));
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <ContentWrapper>
        {isInFavorites ? (
          <IconFullHeart onClick={handleFavorite} />
        ) : (
          <>
            {isLoggedIn ? (
              <IconHeart onClick={handleFavorite} />
            ) : (
              <IconHeart onClick={handleOpenSignUpSignInModal} />
            )}
          </>
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
