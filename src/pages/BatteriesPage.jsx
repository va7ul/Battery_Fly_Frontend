import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllBatteries } from '../redux/products/productsOperations';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const BatteriesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBatteries());
  }, [dispatch]);

  return <ProductsSection category={'Акумулятори'} />;
};

export default BatteriesPage;
