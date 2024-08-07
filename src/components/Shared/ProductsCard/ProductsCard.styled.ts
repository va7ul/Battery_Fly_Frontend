import { FaRegHeart, FaHeartCircleCheck } from 'react-icons/fa6';
import styled, { css } from 'styled-components';
import { Props } from '../../../@types/globalStyles.types';

const getImageSize = (props: Props): string => {
  if (props.category === 'Акції') {
    return '270px';
  }
  return '230px';
};

const iconStyle = css`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.hoverColor};
  transition: ${props => props.theme.transition.main};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverColor};
    transform: scale(1.3);
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
  }
`;

const btnStyle = css`
  font-size: 10px;
  height: 25px;
  padding: 6px 18px;
  margin-top: 5px;
  border-radius: 20px;
  background: ${props => props.theme.colors.secondary};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.hoverColor};
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    height: 40px;
    margin-top: 10px;
  }
`;

export const IconHeart = styled(FaRegHeart)`
  ${iconStyle};
`;

export const IconFullHeart = styled(FaHeartCircleCheck)`
  ${iconStyle};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImage = styled.img<{ category: string }>`
  width: 100%;
  height: 144px;
  border-radius: 10px;
  object-fit: cover;

  @media screen and (min-width: 1280px) {
    height: ${getImageSize};
    border-radius: 16px;
  }
`;

export const CardTitle = styled.p`
  height: 40px;
  font-size: 10px;
  margin-top: 5px;
  overflow: hidden;

  @media screen and (min-width: 1280px) {
    height: 66px;
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

export const Disabledbtn = styled.button`
  font-size: 10px;
  height: 25px;
  padding: 6px 18px;
  margin-top: 5px;
  border-radius: 20px;
  background: rgba(157, 157, 157, 0.3);

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    height: 40px;
    margin-top: 10px;
  }
`;
