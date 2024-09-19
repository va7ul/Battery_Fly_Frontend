import { useMediaQuery } from 'react-responsive';
import { Item, StyledLink } from './NavItem.styled';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';
import { FC } from 'react';
import { ListItemProps } from '../../../../@types/header.types';

export const NavItem: FC<ListItemProps> = ({ title, page }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Item>
      <StyledLink to={page}>
        {mobileVersion && <HopeIconMobile />}
        {title}
      </StyledLink>
    </Item>
  );
};
