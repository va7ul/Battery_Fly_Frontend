import styled from 'styled-components';

export const Box = styled.div`
  margin-bottom: 20px;
`;

export const Holder = styled.div`
  position: relative;
`;

export const List = styled.ul`
  display: grid;
  gap: 22px;
  background: ${props => props.theme.colors.gradient};
  padding: 20px 36px;
`;

export const ListItem = styled.li`
  background-color: #e1e1e1;
  border-radius: 20px;
  width: 190px;
  padding: 16px;
  position: relative;
  box-shadow: 0px 17px 17px 0px rgba(0, 0, 0, 0.07);

  &:nth-child(2n) {
    position: relative;
    left: 100px;
  }
`;

export const IconHope = styled.svg`
  height: 35px;
  width: 35px;
  position: absolute;
  bottom: 208px;
  left: 16px;
  fill: ${props => props.theme.colors.secondary};
`;
export const IconVerticalSpiral = styled.svg`
  width: 60px;
  height: 104px;
  position: absolute;
  bottom: 208px;
  left: 16px;
`;
export const IconSpiral = styled.svg`
  width: 98px;
  height: 104px;
  position: absolute;
  bottom: 208px;
  left: 16px;
`;
