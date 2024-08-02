import { useEffect } from 'react';
import { useLoader } from 'utils/hooks';
import { useTypedDispatch, useTypedSelector } from '../redux/hooks';
import { selectFavorites } from '../redux/user/userSelectors';
import { getProducts } from '../redux/products/productsOperations';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { CustomError } from 'components/Shared/CustomError/CustomError';
import { Favorites } from 'components/FavoritesPage/Favorites';

const FavoritesPage = () => {
  const dispatch = useTypedDispatch();
  const { isLoading, error } = useLoader();
  const codeOfGoods = useTypedSelector(selectFavorites);

  useEffect(() => {
    dispatch(getProducts(codeOfGoods));
  }, [dispatch, codeOfGoods]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && error ? <CustomError /> : <Favorites />}
    </>
  );
};

export default FavoritesPage;
