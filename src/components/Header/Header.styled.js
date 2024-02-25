import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  max-width: 360px;
  z-index: 1;

  background-color: ${props => props.theme.colors.background};

  @media screen and (min-width: 1280px) {
    padding: 15px 20px;
    margin: 0 auto;
    align-items: center;
    height: 64px;
    max-width: 1280px;
    padding: 20px 100px;
  }
`;
