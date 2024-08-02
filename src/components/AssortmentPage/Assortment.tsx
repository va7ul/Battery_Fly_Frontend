import { CategorySection } from './CategorySection/CategorySection';
import { StyledPageTitle } from './Assortment.styled';

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

export const Assortment = () => {
  return (
    <>
      <StyledPageTitle>Асортимент</StyledPageTitle>
      {categories.map(category => (
        <CategorySection key={category} category={category} />
      ))}
    </>
  );
};
