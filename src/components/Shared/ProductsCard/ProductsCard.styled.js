import { FaRegHeart, FaHeartCircleCheck } from 'react-icons/fa6';
import styled, { css } from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

const iconStyle = css`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${props => props.theme.colors.backgroundPaper};
  transition: ${props => props.theme.transition.main};

  &:hover {
    color: ${props => props.theme.colors.secondary};
    transform: scale(1.5);
  }
`;
const btnStyle = css`
  font-size: 10px;
  height: 25px;
  padding: 6px 18px;
  margin-top: 5px;
  border-radius: 20px;
  background: ${props => props.theme.colors.gradient};
  position: relative;
  z-index: 0;

  ${gradientTransitionBtn}

  &::after {
    border-radius: 20px;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    height: 40px;
    margin-top: 10px;
  }
`;

export const IconHeart = styled(FaRegHeart)`
  /* ${iconStyle}; */

  position: absolute;
  top: 10px;
  right: 10px;
  color: ${props => props.theme.colors.backgroundPaper};
  transition: ${props => props.theme.transition.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.secondary};
    transform: scale(1.3);
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    width: 25px;
    height: 25px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconFullHeart = styled(FaHeartCircleCheck)`
  /* ${iconStyle}; */

  position: absolute;
  top: 40px;
  right: 10px;
  color: ${props => props.theme.colors.backgroundPaper};
  transition: ${props => props.theme.transition.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.secondary};
    transform: scale(1.3);
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    width: 25px;
    height: 25px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 140px;
  border-radius: 20px;
  object-fit: cover;

  @media screen and (min-width: 1280px) {
    height: 220px;
  }
`;

export const CardTitle = styled.p`
  height: 40px;
  font-size: 10px;
  margin-top: 5px;

  @media screen and (min-width: 1280px) {
    height: 72px;
    font-size: 18px;
    margin-top: 15px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;

  @media screen and (min-width: 1280px) {
    height: 70px;
  }
`;

export const PriceNew = styled.span`
  font-size: 14px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const PriceOld = styled.span`
  text-decoration-line: line-through;
  font-size: 10px;
  color: ${props => props.theme.colors.textDisabled};

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const ChooseBtn = styled.button`
  ${btnStyle}
`;
