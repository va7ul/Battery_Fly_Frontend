import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTypedDispatch } from '../redux/hooks';
import { getMaterials } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { CustomError } from 'components/Shared/CustomError/CustomError';
import { SubNavBar } from 'components/Shared/SubNavBar/SubNavBar';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const MaterialsPage = () => {
  const dispatch = useTypedDispatch();
  const { isLoading, error } = useLoader();
  const desktopVersion = useMediaQuery({ query: '(min-width:1280px)' });

  useEffect(() => {
    dispatch(getMaterials());
  }, [dispatch]);

  return (
    <>
      {!isLoading && !error && desktopVersion && <SubNavBar />}
      {isLoading && <CustomLoader />}
      {!isLoading && error ? (
        <CustomError />
      ) : (
        <ProductsSection category={'Розхідні матеріали'} />
      )}
    </>
  );
};

export default MaterialsPage;
