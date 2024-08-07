import styled, { DefaultTheme } from 'styled-components';
import { OrderStatus } from '../../../@types/user.types';

type Props = {
  type: OrderStatus;
  theme: DefaultTheme;
};

export const getStatusColor = (props: Props) => {
  switch (props.type) {
    case 'Нове':
      return props.theme.colors.warning;
    case 'В роботі':
      return props.theme.colors.hoverColor;
    case 'Скасовано':
      return props.theme.colors.error;
    case 'Доставлено':
      return props.theme.colors.success;
    default:
      return;
  }
};

export const StyledText = styled.p<{ type: OrderStatus }>`
  font-weight: 700;
  color: ${getStatusColor};
`;

export const OrderErrorContainer = styled.div`
  grid-column: 1/6;
`;

export const OrderDetailsContainer = styled.div`
  grid-column: 1/6;
  background: rgba(225, 225, 225, 0.7);
  padding: 5px 10px;
`;

export const OrderDetailsList = styled.ul`
  border-bottom: 1px solid ${props => props.theme.colors.textDisabled};

  li {
    display: grid;
    grid-template-columns: 60px 100px repeat(3, 1fr);
    padding-top: 5px;
    padding-bottom: 5px;

    @media screen and (min-width: 1280px) {
      grid-template-columns: 100px 250px repeat(3, 1fr);
      padding-top: 15px;
      padding-bottom: 15px;
    }

    :not(:last-child) {
      border-bottom: 1px solid rgba(157, 157, 157, 0.3);
    }
  }
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 4px;
  padding: 5px 8px;
  border-radius: 8px;

  @media screen and (min-width: 1280px) {
    gap: 8px;
    padding: 10px;
  }
`;

export const TextContainer = styled.div`
  text-align: unset;
`;

export const TextTitle = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.textDisabled};

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Sum = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;

export const Discount = styled.p<{ discount: number | undefined }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  span {
    color: ${props =>
      props.discount ? props.theme.colors.success : 'inherit'};
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Total = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    text-align: end;
    border: none;
    font-size: 24px;
  }
`;
