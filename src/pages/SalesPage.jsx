import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getSales } from '../redux/products/productsOperations';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const SalesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSales());
  }, [dispatch]);

  return <ProductsSection category={'Акції'} />;
};

export default SalesPage;
