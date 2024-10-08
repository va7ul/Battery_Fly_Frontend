import { useTypedDispatch, useTypedSelector } from '../../../redux/hooks';
import { Link } from 'react-router-dom';
import { StyledLogo } from './Logo.styled';
import logo from '../../../assets/images/logo.png';
import { selectMenu } from '../../../redux/menu/menuSelectors';
import { setMenuOpen } from '../../../redux/menu/menuSlice';

export const Logo = () => {
  const dispatch = useTypedDispatch();
  const isMenuOpen = useTypedSelector(selectMenu);

  const closeDrawer = () => {
    if (isMenuOpen) {
      dispatch(setMenuOpen(false));
    }
  };

  return (
    <Link to="/" onClick={closeDrawer}>
      <StyledLogo src={logo} alt="logo" />
    </Link>
  );
};
