import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectFavorites } from '../redux/user/userSelectors';
import { getProducts } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { CustomError } from 'components/Shared/CustomError/CustomError';
import { Favorites } from 'components/FavoritesPage/Favorites';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useLoader();
  const codeOfGoods = useSelector(selectFavorites);

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
