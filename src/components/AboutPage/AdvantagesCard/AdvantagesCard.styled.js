import styled from 'styled-components';

export const Num = styled.span`
  position: absolute;
  top: -24px;
  left:-90px;
  font-size: 36px;
  display: inline-block;
  padding: 14px 26px;
  border-radius: 50%;
  background: ${props => props.theme.colors.gradient};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
`;

export const SmallTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 20px;
`;
