import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBatteriesForFPV } from '../redux/products/productsOperations';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const BatteriesForFPVPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatteriesForFPV());
  }, [dispatch]);

  return <ProductsSection category={'Батареї для FPV-дронів'} />;
};

export default BatteriesForFPVPage;
