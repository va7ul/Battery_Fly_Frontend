import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBatteriesForTransport } from '../redux/products/productsOperations';
import {
  selectAllProductsError,
  selectAllProductsIsLoading,
} from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const BatteriesForTransportPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllProductsIsLoading);
  const error = useSelector(selectAllProductsError);

  useEffect(() => {
    dispatch(getBatteriesForTransport());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && (
        <ProductsSection category={'Батареї для електротранспорту'} />
      )}
    </>
  );
};

export default BatteriesForTransportPage;
