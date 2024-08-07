import { CategoryList } from './CategoryList/CategoryList';
import sprite from '../../../assets/images/sprite.svg';
import { getPath } from 'utils/helpers/index';
import {
  StyledLink,
  StyledSection,
  StyledContainer,
} from './CategorySection.styled';

type PropsCategorySection = {
  category: string;
};

export const CategorySection: React.FC<PropsCategorySection> = ({
  category,
}) => {
  const path = getPath(category);
  return (
    <StyledSection category={category}>
      <StyledContainer>
        <StyledLink href={path} category={category}>
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
