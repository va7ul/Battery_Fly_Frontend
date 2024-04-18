import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  gap: 5px;

  border-radius: 8px;
  background: ${props => props.theme.colors.gradientYellow};
  box-shadow: 0px 4px 12.3px 0px rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 1280px) {
    padding: 15px;
    gap: 10px;
  }
`;

export const GoodWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  @media screen and (min-width: 1280px) {
    gap: 14px;
  }
`;

export const Image = styled.img`
  width: 42px;
  height: 42px;

  @media screen and (min-width: 1280px) {
    width: 60px;
    height: 60px;
  }
`;

export const GoodName = styled(Link)`
  width: 68px;
  height: 48px;
  overflow: hidden;
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    width: 138px;
    height: 52px;
    font-size: 14px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media screen and (min-width: 1280px) {
    gap: 5px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 5px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 100%;

  &:hover {
    background-color: ${props => props.theme.colors.hoverColor};
  }

  & svg {
    z-index: 2;
  }

  @media screen and (min-width: 1280px) {
    width: 27px;
    height: 27px;
    padding: 7px;
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

  @media screen and (min-width: 1280px) {
    width: 67px;
    height: 27px;
    padding: 6px 13px;
    font-size: 12px;
  }
`;

export const Price = styled.p`
  margin: 0 auto;
  font-size: 10px;
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    font-size: 14px;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  background: transparent;

  & svg {
    width: 16px;
    height: 16px;
    fill: ${props => props.theme.colors.greyOutput};
    transition: ${props => props.theme.transition.main};

    &:hover {
      fill: crimson;
    }
  }

  @media screen and (min-width: 1280px) {
    & svg {
      width: 26px;
      height: 26px;
    }
  }
`;

export const CapacityWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: 42px;
  gap: 5px;
  font-size: 8px;

  @media screen and (min-width: 1280px) {
    font-size: 11px;
    gap: 10px;
    margin-left: 60px;
  }
`;

export const Capacity = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: rgb(99, 99, 99);
`;

export const SealingHolders = styled.div`
  display: flex;
  align-items: center;

  gap: 2px;
  @media screen and (min-width: 1280px) {
    gap: 5px;
  }
`;
