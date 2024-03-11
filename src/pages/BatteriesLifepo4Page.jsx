import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBatterieslifepo4 } from '../redux/products/productsOperations';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const TypeLifepo4Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBatterieslifepo4());
  }, [dispatch]);

  return <ProductsSection category={'Акумулятори LiFePo4'} />;
};

export default TypeLifepo4Page;
