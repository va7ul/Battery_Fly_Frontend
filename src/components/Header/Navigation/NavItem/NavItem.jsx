import { useMediaQuery } from 'react-responsive';
import { Item, StyledLink } from './NavItem.styled';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';

export const NavItem = ({ handleOpenSignUpSignInModal, title, page }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Item onClick={handleOpenSignUpSignInModal}>
      <StyledLink to={page}>
        {mobileVersion && <HopeIconMobile />}
        {title}
      </StyledLink>
    </Item>
  );
};
