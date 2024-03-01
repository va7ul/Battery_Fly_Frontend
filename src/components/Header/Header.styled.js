import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  margin: 0 auto;
  max-width: 360px;
  z-index: 1;
  padding: 15px 20px;

  background-color: ${props => props.theme.colors.background};

  @media screen and (min-width: 1280px) {
    align-items: center;
    height: 64px;
    max-width: 1280px;
    padding: 0 100px;
  }
`;

export const DesktopWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 57px;
`;
