import { useMediaQuery } from 'react-responsive';
import sprite from '../../../../assets/images/sprite.svg';
import { Item, StyledLink, HopeIcon } from './NavItem.styled';

export const NavItem = ({ title, page }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Item>
      {mobileVersion && (
        <HopeIcon>
          <use href={`${sprite}#icon-Hope`}></use>
        </HopeIcon>
      )}
      <StyledLink to={page}>
        <div>{title}</div>
      </StyledLink>
    </Item>
  );
};
