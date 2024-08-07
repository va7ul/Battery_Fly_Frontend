import { useEffect } from 'react';
import { useTypedDispatch } from '../redux/hooks';
import { getAssortment } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { CustomError } from 'components/Shared/CustomError/CustomError';
import { Assortment } from 'components/AssortmentPage/Assortment';

const AssortmentPage = () => {
  const dispatch = useTypedDispatch();
  const { isLoading, error } = useLoader();

  useEffect(() => {
    dispatch(getAssortment());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && error ? <CustomError /> : <Assortment />}
    </>
  );
};

export default AssortmentPage;
