import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getBatteriesForFPV } from '../redux/products/productsOperations';
import { useLoader } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';
import { SubNavBar } from 'components/Shared/SubNavBar/SubNavBar';

const BatteriesForFPVPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useLoader();
  const desktopVersion = useMediaQuery({ query: '(min-width:1280px)' });

  useEffect(() => {
    dispatch(getBatteriesForFPV());
  }, [dispatch]);

  return (
    <>
      {!isLoading && !error && desktopVersion && <SubNavBar />}
      {isLoading && <CustomLoader />}
      {!isLoading && !error && (
        <ProductsSection category={'Батареї для FPV-дронів'} />
      )}
    </>
  );
};

export default BatteriesForFPVPage;
