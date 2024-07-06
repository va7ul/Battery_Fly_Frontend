import styled from 'styled-components';

export const Subtitle = styled.p`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

export const AddButton = styled.button`
  max-width: 138px;
  padding: 12px 18px;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  background: ${props => props.theme.colors.secondary};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    max-width: 200px;
    padding: 18px 24px;
    border-radius: 12px;
    border: none;
    font-size: 20px;
  }
`;

export const EditButton = styled.button`
  position: relative;
  width: 116px;
  height: 26px;
  background-color: transparent;
  border: none;
  font-size: 10px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    width: 180px;
    height: 36px;
    font-size: 16px;
  }

  &::after {
    position: absolute;
    left: 15%;
    bottom: 3px;
    content: '';
    width: 85%;
    height: 1px;
    border-radius: 1px;
    background-color: currentColor;

    @media screen and (min-width: 1280px) {
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
