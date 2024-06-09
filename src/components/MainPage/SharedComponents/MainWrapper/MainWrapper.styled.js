import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: ${props => (props.$isCategories ? '0' : '0 20px')};
  @media (min-width: 1280px) {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 110px;
  }
`;
