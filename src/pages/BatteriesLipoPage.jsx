import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBatterieslipo } from '../redux/products/productsOperations';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const TypeLiPoPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatterieslipo());
  }, [dispatch]);

  return <ProductsSection category={'Акумулятори Li-Po'} />;
};

export default TypeLiPoPage;
