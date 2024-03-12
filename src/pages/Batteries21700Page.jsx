import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBatteries21700 } from '../redux/products/productsOperations';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const Type21700Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatteries21700());
  }, [dispatch]);

  return <ProductsSection category={'Акумулятори 21700'} />;
};

export default Type21700Page;
