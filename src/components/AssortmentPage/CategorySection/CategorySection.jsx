import { CategoryList } from './CategoryList/CategoryList';
import sprite from '../../../assets/images/sprite.svg';
import {
  StyledLink,
  StyledSection,
  StyledContainer,
} from './CategorySection.styled';

export const CategorySection = ({ category }) => {
  return (
    <StyledSection category={category}>
      <StyledContainer category={category}>
        <StyledLink href={category} category={category}>
          <h2>{category}</h2>
          <svg>
            <use href={`${sprite}#icon-arrow-right`} />
          </svg>
        </StyledLink>
        <CategoryList category={category} />
      </StyledContainer>
    </StyledSection>
  );
};
