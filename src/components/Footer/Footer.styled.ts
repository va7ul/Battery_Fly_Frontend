import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Footer

export const Wrapper = styled.div`
  padding: 20px;
  background: ${props => props.theme.colors.greyPrimary};
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 56px 110px;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 36px;

  @media screen and (min-width: 1280px) {
  }
`;

export const Logo = styled.img`
  width: 78px;
  height: 24px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    width: 124px;
    height: 38px;
    margin-bottom: 15px;
  }
`;

export const BoxFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1280px) {
  }
`;

// Contacts

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 1280px) {
    gap: 10px;
  }
`;

export const Title = styled.p`
  font-size: 10px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 15px;
  }
`;

export const Text = styled.p`
  font-size: 10px;

  &:hover,
  :focus {
    color: ${props => props.theme.colors.hoverColor};
  }

  @media screen and (min-width: 1280px) {
    font-size: 15px;
  }
`;

// TimeTable (Box)

export const TextDate = styled.p`
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 15px;
  }
`;

// Confidential (Box, TextDate)

// ForClients (Box, Title)

export const Link = styled(NavLink)`
  font-size: 10px;

  &:hover,
  :focus {
    color: ${props => props.theme.colors.hoverColor};
  }

  @media screen and (min-width: 1280px) {
    font-size: 15px;
  }
`;

// Catalog (Box, Title, Link)

// SocialMediaFooter

export const List = styled.ul`
  display: flex;
  gap: 6px;
`;

export const Item = styled.li`
  color: ${props => props.theme.colors.hoverColor};
  opacity: 0.8;
  transition: ${props => props.theme.transition.main};
  cursor: pointer;
  display: block;
  height: 20px;

  &:hover,
  :focus {
    opacity: 1;
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    height: 24px;
  }
`;
