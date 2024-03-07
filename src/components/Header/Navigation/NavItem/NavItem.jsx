import { useMediaQuery } from 'react-responsive';
import { Item, StyledLink } from './NavItem.styled';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';

export const NavItem = ({ title, page }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Item>
      {mobileVersion && <HopeIconMobile />}
      <StyledLink to={page}>
        <div>{title}</div>
      </StyledLink>
    </Item>
  );
};
