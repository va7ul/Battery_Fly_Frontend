import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAssortment } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { Favorites } from 'components/FavoritesPage/Favorites';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useLoader();

  useEffect(() => {
    dispatch(getAssortment());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && <Favorites />}
    </>
  );
};

export default FavoritesPage;
