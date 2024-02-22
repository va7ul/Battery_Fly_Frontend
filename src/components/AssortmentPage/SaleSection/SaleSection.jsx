import { SaleList } from './SaleList/SaleList';
import {
  StyledContainer,
  StyledSection,
  StyledTitle,
} from './SaleSection.styled';

export const SaleSection = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle>Акції</StyledTitle>
        <SaleList />
      </StyledContainer>
    </StyledSection>
  );
};
