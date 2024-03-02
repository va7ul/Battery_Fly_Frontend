import { Link } from 'react-router-dom';
import { StyledLogo } from './Logo.styled';
import logo from '../../../assets/images/logo.png';

export const Logo = ({ setIsOpen, isOpen }) => {
  const closeDrawer = () => {
    if (isOpen) {
      return setIsOpen(false);
    }
  };

  return (
    <Link to="/main" onClick={closeDrawer}>
      <StyledLogo src={logo} alt="logo" />
    </Link>
  );
};
