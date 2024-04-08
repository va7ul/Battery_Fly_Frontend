import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getBatteries32650 } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';
import { SubNavBar } from 'components/Shared/SubNavBar/SubNavBar';

const Type32650Page = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useLoader();
  const desktopVersion = useMediaQuery({ query: '(min-width:1280px)' });

  useEffect(() => {
    dispatch(getBatteries32650());
  }, [dispatch]);

  return (
    <>
      {!isLoading && !error && desktopVersion && <SubNavBar />}
      {isLoading && <CustomLoader />}
      {!isLoading && !error && (
        <ProductsSection category={'Акумулятори 32650'} />
      )}
    </>
  );
};

export default Type32650Page;
