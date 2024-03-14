import styled from 'styled-components';

export const Item = styled.li`
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
  overflow: hidden;
  width: 62px;
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

  &::placeholder {
  }
`;

export const Price = styled.p`
  font-size: 12px;
  font-weight: 400;
`;
