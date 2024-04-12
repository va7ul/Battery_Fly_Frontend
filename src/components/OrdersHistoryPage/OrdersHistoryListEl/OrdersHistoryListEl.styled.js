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

export const StyledText = styled.p`
  font-weight: 700;
  color: ${getStatusColor};
`;
