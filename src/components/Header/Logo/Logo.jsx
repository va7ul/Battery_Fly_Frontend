import { Link } from 'react-router-dom';
import { StyledLogo } from './Logo.styled';
import logo from '../../../assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from '../../../redux/menu/menuSelectors';
import { setMenuOpen } from '../../../redux/menu/menuSlice';

export const Logo = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectMenu);

  const closeDrawer = () => {
    if (isMenuOpen) {
      dispatch(setMenuOpen(false));
    }
  };

  return (
    <Link to="/main" onClick={closeDrawer}>
      <StyledLogo src={logo} alt="logo" />
    </Link>
  );
};
