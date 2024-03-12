import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMaterials } from '../redux/products/productsOperations';
import { ProductsSection } from 'components/Shared/ProductsSection/ProductsSection';

const MaterialsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMaterials());
  }, [dispatch]);

  return <ProductsSection category={'Розхідні матеріали'} />;
};

export default MaterialsPage;
