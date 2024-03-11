import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBatteries32650 } from '../redux/products/productsOperations';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const Type32650Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatteries32650());
  }, [dispatch]);

  return <ProductsSection category={'Акумулятори 32650'} />;
};

export default Type32650Page;
