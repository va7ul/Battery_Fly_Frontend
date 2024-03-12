import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBatteriesForToys } from '../redux/products/productsOperations';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const BatteriesForToysPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatteriesForToys());
  }, [dispatch]);

  return <ProductsSection category={'Батареї для іграшок'} />;
};

export default BatteriesForToysPage;
