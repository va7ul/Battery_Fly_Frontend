import { useDispatch } from 'react-redux';
import { CategorySection } from './CategorySection/CategorySection';
import { StyledPageTitle } from './Assortment.styled';
import { useEffect } from 'react';
import { getAssortment } from '../../redux/products/productsOperations';

export const Assortment = () => {
  const categories = [
    'Акції',
    'Акумулятори',
    'Готові батареї',
    'Батареї для FPV-дронів',
    'Батареї для електротранпорту',
    'Батареї для іграшок',
    'Прилади',
    'Розхідні матеріали',
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssortment());
  }, [dispatch]);

  return (
    <>
      <StyledPageTitle>Асортимент</StyledPageTitle>
      {categories.map(category => (
        <CategorySection key={category} category={category} />
      ))}
    </>
  );
};
