import styled from 'styled-components';

type Props = {
  $isCategories: boolean;
};


export const Wrapper = styled.section<Props>`
  width: 100%;
  margin: 0 auto;
  padding: ${props => (props.$isCategories ? '0' : '0 20px')};
  @media (min-width: 1280px) {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 110px;
  }
`;
