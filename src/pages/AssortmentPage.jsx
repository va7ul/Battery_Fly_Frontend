import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAssortment } from '../redux/products/productsOperations';
import {
  selectAllProductsError,
  selectAllProductsIsLoading,
} from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { Assortment } from 'components/AssortmentPage/Assortment';

const AssortmentPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllProductsIsLoading);
  const error = useSelector(selectAllProductsError);

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
