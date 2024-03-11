import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getDevices } from '../redux/products/productsOperations';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const DevicesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDevices());
  }, [dispatch]);

  return <ProductsSection category={'Прилади'} />;
};

export default DevicesPage;
