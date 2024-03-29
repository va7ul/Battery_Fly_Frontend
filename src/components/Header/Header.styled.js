import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: static;
  left: 0;
  top: 0;
  display: flex;
  margin: 0 auto;
  max-width: 360px;
  z-index: 1;
  padding: 15px 20px;

  background-color: rgba(213, 213, 213, 0.54);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 1280px) {
    align-items: center;
    max-width: 1280px;
    padding: 0 100px;
  }
`;

export const DesktopWrapper = styled.div`
  display: flex;
  align-items: center;
`;
