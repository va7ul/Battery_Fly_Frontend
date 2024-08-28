import styled from 'styled-components';

type Props = {
  $show: boolean;
};

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 36px 48px;
  @media (min-width: 1280px) {
    gap: 40px; 
    padding: 40px 76px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media (min-width: 1280px) {
    gap: 30px;
  }
`;

export const NavBtn = styled.button<Props>`
  font-size: 15px;
  font-weight: 600;
  background-color: transparent;
  color: ${props =>
    props.$show
      ? props.theme.colors.hoverColor
      : props.theme.colors.textPrimary};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;
