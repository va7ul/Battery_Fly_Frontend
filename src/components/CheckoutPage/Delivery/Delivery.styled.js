import styled from 'styled-components';
import { gradientTransitionBtn } from 'styles/GlobalStyled';

export const Title = styled.p`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  width: 155px;
  height: 40px;
  font-size: 12px;
  font-weight: 500;
  background: ${props => props.theme.colors.greyBackgroundPaper};
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  padding: 14px;

  &:hover {
    background: ${props => props.theme.colors.hoverColor};
  }

  @media screen and (min-width: 1280px) {
    width: 233px;
    height: 61px;
    font-size: 20px;
    padding: 18px;
    border-radius: 12px;
  }
`;

export const NPTitle = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    gap: 7px;
  }
`;

export const NPText = styled.p`
  text-transform: uppercase;
  font-weight: 800;
  color: #ec2028;

  @media screen and (min-width: 1280px) {
    gap: 7px;
  }
`;

export const NPIcon = styled.svg`
  width: 12px;
  height: 12px;
  fill: #ec2028;

  @media screen and (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`;

export const BoxAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    gap: 15px;
    margin-bottom: 20px;
  }
`;

export const BoxIcon = styled.div`
  color: ${props => props.theme.colors.backgroundPaper};
  display: flex;
  align-items: flex-end;
  gap: 5px;

  @media screen and (min-width: 1280px) {
    /* gap: 10px; */
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 15px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Address = styled.a`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 15px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const OrderButton = styled.button`
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 400;
  width: 149px;

  box-shadow: 0px 4px 12.3px 0px rgba(0, 0, 0, 0.05);
  background: ${props => props.theme.colors.gradient};

  position: relative;
  z-index: 0;
  ${gradientTransitionBtn}

  &::after {
    border-radius: 6px;
  }

  @media screen and (min-width: 1280px) {
    width: 266px;
    height: 61px;
    padding: 15px 8px;
    font-size: 20px;

    &::after {
      border-radius: 12px;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 1280px) {
    gap: 15px;
  }
`;

export const BoxNP = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    gap: 15px;
    margin-bottom: 20px;
  }
`;
