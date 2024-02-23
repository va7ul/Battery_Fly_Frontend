import { CategorySection } from './CategorySection/CategorySection';
import { SaleSection } from './SaleSection/SaleSection';
import { StyledPageTitle } from './Assortment.styled';

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
  return (
    <>
      <StyledPageTitle>Асортимент</StyledPageTitle>
      {categories.map(category =>
        category === 'Акції' ? (
          <SaleSection />
        ) : (
          <CategorySection category={category} />
        )
      )}
    </>
  );
};
