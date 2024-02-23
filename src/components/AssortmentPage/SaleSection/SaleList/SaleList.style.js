import styled from 'styled-components';

export const StyledExample = styled.div`
  padding-left: 30px;
  background: ${props => props.theme.colors.gradientBlack};

  /* for example */
  /* background: ${props => props.theme.colors.error}; */ /* &:hover {
    color: ${props => props.theme.colors.error};
    transition: ${props => props.theme.transition.main};
  } */
  @media screen and (min-width: 1280px) {
    padding-left: 110px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 110px;
`;

export const StyledListCard = styled.li`
  width: 280px;
  /* height: 450px; */
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: linear-gradient(rgba(213, 213, 213, 1), rgba(241, 241, 241, 0));
  padding: 30px;
`;
