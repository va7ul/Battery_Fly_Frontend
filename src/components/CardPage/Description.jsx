import { useDispatch, useSelector } from 'react-redux';
import { getNewPrice } from '../../utils/helpers/getNewPrice';
import { useAuth } from 'utils/hooks';
import { setAuthModalOpen } from '../../redux/user/userSlice';
import {
  selectOneProduct,
  selectPriceWithSale,
} from '../../redux/products/productsSelectors';
import { selectFavorites } from '../../redux/user/userSelectors';
import {
  addToFavorite,
  deleteFromFavorite,
} from '../../redux/user/userOperations';
import { ModalSignUpSignIn } from 'components/Modals/ModalSignUpSignIn/ModalSignUpSignIn';
import sprite from '../../assets/images/sprite.svg';
import {
  DescBox,
  TextBox,
  Text,
  PriceContainer,
  PriceBox,
  NewPrice,
  Price,
  Wrap,
  LikeBox,
  Like,
  Desc,
  Item,
  IconHeart,
  IconFullHeart,
  IconSquare,
  IconSpiral,
  Subtitle,
  CapacityBox,
} from './Card.styled';

export const Description = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isAuthModalOpen } = useAuth();
  const { codeOfGood, description, price, sale, discount, quantity } =
    useSelector(selectOneProduct);
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

  const handleOpenSignUpSignInModal = () => {
    if (!isLoggedIn) {
      dispatch(setAuthModalOpen(true));
      document.body.style.overflow = 'hidden';
    }
  };
  const handleCloseSignUpSignInModal = () => {
    dispatch(setAuthModalOpen(false));
    document.body.style.overflow = 'unset';
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
          {sale ? (
            <NewPrice>
              {priceWithSale !== 0 ? priceWithSale : newPrice} грн
            </NewPrice>
          ) : (
            <NewPrice>{newPrice} грн</NewPrice>
          )}
          {sale && <Price>{price} грн</Price>}
        </PriceBox>
        <Wrap>
          {isInFavorites ? (
            <LikeBox onClick={handleFavorite}>
              <IconFullHeart />
              <Like>Видалити зі списку бажань</Like>
            </LikeBox>
          ) : (
            <>
              {isLoggedIn ? (
                <LikeBox onClick={handleFavorite}>
                  <IconHeart />
                  <Like>Додати до списку бажань</Like>
                </LikeBox>
              ) : (
                <LikeBox onClick={handleOpenSignUpSignInModal}>
                  <IconHeart />
                  <Like>Додати до списку бажань</Like>
                </LikeBox>
              )}
            </>
          )}

          <IconSquare>
            <use href={`${sprite}#icon-square`}></use>
          </IconSquare>
          <IconSpiral>
            <use href={`${sprite}#icon-Spiral_2`}></use>
          </IconSpiral>
        </Wrap>
      </PriceContainer>
      <CapacityBox>
        <Subtitle>Технічні особливості:</Subtitle>
        <Desc>
          {newDescription.map(i => (
            <Item key={i}>{i}</Item>
          ))}
        </Desc>
      </CapacityBox>
      <ModalSignUpSignIn
        isModalSignUpSignInOpen={isAuthModalOpen}
        handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
      />
    </DescBox>
  );
};
