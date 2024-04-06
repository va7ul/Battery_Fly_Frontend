import { useDispatch } from 'react-redux';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { logOut } from '../../../redux/user/userOperations';
import { StyledList, StyledNavLink } from './SideBarNav.styled';

export const SideBarNav = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut());
  };

  return (
    <aside>
      <StyledList>
        <li>
          <StyledNavLink to="../profile">
            <AccountCircleOutlinedIcon />
            <span>Користувач</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="../orders">
            <HistoryOutlinedIcon />
            <span>Історія замовлень</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="../favorites">
            <FavoriteBorderOutlinedIcon />
            <span>Обране</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="../" onClick={logout}>
            <LogoutOutlinedIcon />
            <span>Вийти</span>
          </StyledNavLink>
        </li>
      </StyledList>
    </aside>
  );
};
