import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  @media (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 12px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;

  @media (min-width: 1280px) {
    gap: 32px;
    background: ${props => props.theme.colors.gradient};
    width: 256px;
    height: 334px;
    padding: 46px 18px;
    border-radius: 20px;
    box-shadow: 0px 4px 25.8px 3px rgba(0, 0, 0, 0.15);
  }
`;

export const IconSpiral = styled.svg`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 180px;
  right: -16px;
  stroke: ${props => props.theme.colors.textPrimary};
  fill: transparent;
  z-index: 1;
`;

export const IconRectangle = styled.svg`
  width: 43px;
  height: 43px;
  position: absolute;
  top: 200px;
  right: -4px;
  fill: ${props => props.theme.colors.hoverColor};
`;
