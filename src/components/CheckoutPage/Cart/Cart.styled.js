import styled from 'styled-components';

export const CartWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.textDisabled};
`;

export const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.colors.textDisabled};
`;

export const Text = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid ${props => props.theme.colors.textDisabled};
`;

export const ListWrap = styled.div`
  padding: 6px;
`;
