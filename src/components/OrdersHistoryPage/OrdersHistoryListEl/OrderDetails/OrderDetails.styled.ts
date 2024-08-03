import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  grid-row: 1/4;
  margin-right: 6px;

  @media screen and (min-width: 1280px) {
    margin-right: 10px;
  }
`;

export const StyledImage = styled.img`
  width: 54px;
  height: 54px;

  @media screen and (min-width: 1280px) {
    width: 90px;
    height: 90px;
  }
`;

export const StyledName = styled(Link)`
  grid-row: 1/3;
  height: 36px;
  overflow: hidden;
  color: ${props => props.theme.colors.hoverColor};

  @media screen and (min-width: 1280px) {
    height: 54px;
  }
`;

export const CapacityWrap = styled.div`
  grid-column: 2/6;
  display: flex;
  align-items: center;
  margin-right: auto;
  gap: 5px;
  font-size: 8px;

  @media screen and (min-width: 1280px) {
    font-size: 11px;
    gap: 10px;
  }
`;

export const Capacity = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: rgb(99, 99, 99);

  svg {
    width: 12px;
    height: 12px;

    @media screen and (min-width: 1280px) {
      width: 19px;
      height: 19px;
    }
  }
`;

export const SealingHolders = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media screen and (min-width: 1280px) {
    gap: 5px;
  }

  svg {
    color: ${props => props.theme.colors.success};
    width: 12px;
    height: 12px;

    @media screen and (min-width: 1280px) {
      width: 16px;
      height: 16px;
    }
  }
`;
