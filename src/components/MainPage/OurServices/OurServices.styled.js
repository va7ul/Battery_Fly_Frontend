import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 30px;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 32px 32px;
  gap: 8px;
  position: absolute;
  right: 20px;
  top: 50px;
`;

export const Button = styled.button`
  width: 32px;
  height: 20px;
  background: ${props => props.theme.colors.gradient};
  box-shadow: 6px 4px 5px 0px rgba(0, 0, 0, 0.08);
  border: transparent;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;

  svg {
    width: 32px;
    height: 20px;
  }
`;

export const Holder = styled.div`
  margin-bottom: 20px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  gap: 10px;
`;

export const ListItem = styled.div`
  background: ${props => props.theme.colors.gradient};
  border-radius: 12px;
  width: 150px;
  height: 226px;
  padding: 10px;
  box-shadow: 0px 17px 17px 0px rgba(0, 0, 0, 0.07);
`;
