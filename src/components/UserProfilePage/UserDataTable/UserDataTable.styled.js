import styled from 'styled-components';

export const EditButton = styled.button`
  position: relative;
  width: 115px;
  height: 26px;
  margin-top: 10px;
  padding: 4px;
  background-color: transparent;
  border: none;
  font-size: 10px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    width: 168px;
    height: 36px;
    margin-top: 14px;
    font-size: 16px;
  }

  &::after {
    position: absolute;
    left: 20%;
    bottom: 3px;
    content: '';
    width: 76%;
    height: 1px;
    border-radius: 1px;
    background-color: currentColor;

    @media screen and (min-width: 1280px) {
      left: 18%;
      width: 82%;
      height: 2px;
    }
  }

  svg {
    position: relative;
    top: 4px;
    width: 16px;
    height: 16px;
    margin-right: 2px;

    @media screen and (min-width: 1280px) {
      top: 6px;
      width: 24px;
      height: 24px;
    }
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverColor};
  }
`;
