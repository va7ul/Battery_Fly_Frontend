import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAssortment } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { Assortment } from 'components/AssortmentPage/Assortment';

const AssortmentPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useLoader();

  useEffect(() => {
    dispatch(getAssortment());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && <Assortment />}
    </>
  );
};

export default AssortmentPage;
