import styled from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  height: 62px;
  font-size: 10px;
  font-weight: 400;
  border-radius: 8px;
  background: ${props => props.theme.colors.gradient};
  box-shadow: 0px 4px 12.3px 0px rgba(0, 0, 0, 0.05);
`;

export const Image = styled.img`
  width: 42px;
  height: 42px;
`;

export const Name = styled.p`
  width: 70px;
  height: 46px;
  overflow: hidden;
`;

export const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: ${props => props.theme.colors.gradient};
  border-radius: 100%;

  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}
  &::after {
    border-radius: 100%;
  }

  & svg {
    z-index: 2;
  }
`;

export const Input = styled.input`
  width: 50px;
  border-radius: 20px;
  border-color: transparent;
  outline: none;
  padding: 4px 8px;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
`;

export const Price = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  position: absolute;
  right: 12px;

  & svg {
    width: 16px;
    height: 16px;
    fill: ${props => props.theme.colors.textPrimary};
  }
`;
