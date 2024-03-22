import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMaterials } from '../redux/products/productsOperations';
import {
  selectAllProductsError,
  selectAllProductsIsLoading,
} from '../redux/products/productsSelectors';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const MaterialsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllProductsIsLoading);
  const error = useSelector(selectAllProductsError);

  useEffect(() => {
    dispatch(getMaterials());
  }, [dispatch]);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && !error && (
        <ProductsSection category={'Розхідні матеріали'} />
      )}
    </>
  );
};

export default MaterialsPage;
