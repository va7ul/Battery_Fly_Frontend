import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getBatterieslifepo4 } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';
import { SubNavBar } from 'components/Shared/SubNavBar/SubNavBar';

const TypeLifepo4Page = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useLoader();
  const desktopVersion = useMediaQuery({ query: '(min-width:1280px)' });

  useEffect(() => {
    dispatch(getBatterieslifepo4());
  }, [dispatch]);

  return (
    <>
      {!isLoading && !error && desktopVersion && <SubNavBar />}
      {isLoading && <CustomLoader />}
      {!isLoading && !error && (
        <ProductsSection category={'Акумулятори LiFePo4'} />
      )}
    </>
  );
};

export default TypeLifepo4Page;
