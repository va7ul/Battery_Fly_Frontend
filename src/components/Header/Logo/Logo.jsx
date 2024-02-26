import { Link } from 'react-router-dom';
import { StyledLogo } from './Logo.styled';
import logo from '../../../assets/images/logo.png';

export const Logo = () => {
  return (
    <Link to="/main">
      <StyledLogo src={logo} alt="logo" />
    </Link>
  );
};
