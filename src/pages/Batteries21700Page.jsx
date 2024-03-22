import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBatteries21700 } from '../redux/products/productsOperations';
import {
  selectAllProductsError,
  selectAllProductsIsLoading,
} from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const Type21700Page = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllProductsIsLoading);
  const error = useSelector(selectAllProductsError);

  useEffect(() => {
    dispatch(getBatteries21700());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && (
        <ProductsSection category={'Акумулятори 21700'} />
      )}
    </>
  );
};

export default Type21700Page;
