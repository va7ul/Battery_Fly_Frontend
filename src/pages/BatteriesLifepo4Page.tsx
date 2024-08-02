import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTypedDispatch } from '../redux/hooks';
import { getBatterieslifepo4 } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { CustomError } from 'components/Shared/CustomError/CustomError';
import { SubNavBar } from 'components/Shared/SubNavBar/SubNavBar';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const TypeLifepo4Page = () => {
  const dispatch = useTypedDispatch();
  const { isLoading, error } = useLoader();
  const desktopVersion = useMediaQuery({ query: '(min-width:1280px)' });

  useEffect(() => {
    dispatch(getBatterieslifepo4());
  }, [dispatch]);

  return (
    <>
      {!isLoading && !error && desktopVersion && <SubNavBar />}
      {isLoading && <CustomLoader />}
      {!isLoading && error ? (
        <CustomError />
      ) : (
        <ProductsSection category={'Акумулятори LiFePo4'} />
      )}
    </>
  );
};

export default TypeLifepo4Page;
