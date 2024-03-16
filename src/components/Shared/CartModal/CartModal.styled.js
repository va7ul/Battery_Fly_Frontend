import styled from 'styled-components';

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid ${props => props.theme.colors.greyBackgroundPaper};

  @media screen and (min-width: 1280px) {
    justify-content: start;
    padding-bottom: 0;
    font-size: 20px;
    border: none;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 18px;
  top: 8px;
  background: none;

  & svg {
    width: 26px;
    height: 26px;
  }

  @media screen and (min-width: 1280px) {
    top: 16px;
    & svg {
      width: 40px;
      height: 40px;
    }
  }
`;
