import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBatteriesForTransport } from '../redux/products/productsOperations';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const BatteriesForTransportPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatteriesForTransport());
  }, [dispatch]);

  return <ProductsSection category={'Батареї для електротранспорту'} />;
};

export default BatteriesForTransportPage;
