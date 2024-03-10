import { useMediaQuery } from 'react-responsive';
import { Item, StyledLink } from './NavItem.styled';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';

export const NavItem = ({ title, page }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Item>
      <StyledLink to={page}>
        {mobileVersion && <HopeIconMobile />}
        <div>{title}</div>
      </StyledLink>
    </Item>
  );
};
