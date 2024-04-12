import styled from 'styled-components';
import { getRotation } from 'styles/GlobalStyled';

export const getStatusColor = props => {
  switch (props.type) {
    case 'Нове':
      return props.theme.colors.warning;
    case 'В роботі':
      return props.theme.colors.secondary;
    case 'Скасовано':
      return props.theme.colors.error;
    case 'Доставлено':
      return props.theme.colors.success;
    default:
      return;
  }
};

export const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  row-gap: 20px;
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
    grid-template-columns: 1fr 790px;
    font-size: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 40px;
    margin-bottom: 30px;
  }
`;

export const ContentWrapper = styled.ul`
  font-size: 10px;
  font-weight: 400;

  @media screen and (min-width: 1280px) {
    font-size: 15px;
  }

  li {
    font-size: 10px;
    font-weight: 400;
    padding: 10px 0px;
    border-bottom: 1px solid rgba(217, 217, 217, 1);
    display: grid;
    grid-template-columns: repeat(4, 1fr) 15px;

    :first-child {
      font-weight: 600;
    }

    @media screen and (min-width: 1280px) {
      font-size: 15px;
      padding: 20px 0px;
    }

    p:not(:first-child) {
      text-align: center;
    }
  }
`;

export const StyledText = styled.p`
  font-weight: 700;
  color: ${getStatusColor};
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  outline: none;
  border: none;

  & svg {
    transform: ${getRotation};
    width: 11px;
    height: 11px;
    fill: transparent;
    stroke: ${props => props.theme.colors.textPrimary};
    transition: ${props => props.theme.transition.main};
  }

  &:hover svg {
    transform: rotate(270deg) scale(1.4);
  }
`;

// export const HeadWrapper = styled.li``;

// export const ListElWrapper = styled.li``;
