import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAssemblies } from '../redux/products/productsOperations';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const AssembliesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssemblies());
  }, [dispatch]);

  return <ProductsSection category={'Готові батареї'} />;
};

export default AssembliesPage;
