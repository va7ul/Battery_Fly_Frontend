import { CategoryList } from './CategoryList/CategoryList';
import {
  StyledTitle,
  StyledSection,
  StyledContainer,
} from './CategorySection.styled';

export const CategorySection = ({ category }) => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle>{category}</StyledTitle>
        <CategoryList />
      </StyledContainer>
    </StyledSection>
  );
};
