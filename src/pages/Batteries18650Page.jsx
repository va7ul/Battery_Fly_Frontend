import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBatteries18650 } from '../redux/products/productsOperations';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const Type18650Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatteries18650());
  }, [dispatch]);

  return <ProductsSection category={'Акумулятори 18650'} />;
};

export default Type18650Page;
