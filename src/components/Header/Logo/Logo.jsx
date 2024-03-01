import { Link } from 'react-router-dom';
import { StyledLogo } from './Logo.styled';
import logo from '../../../assets/images/logo.png';

export const Logo = ({ setIsOpen }) => {
  return (
    <Link to="/main" onClick={() => setIsOpen(false)}>
      <StyledLogo src={logo} alt="logo" />
    </Link>
  );
};
