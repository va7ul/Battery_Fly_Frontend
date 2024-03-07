import { NavLink } from 'react-router-dom';
import { Item } from './ListItem.styled';

export const ListItem = ({ page, title }) => {
  return (
    <Item>
      <NavLink to={page}>{title}</NavLink>
    </Item>
  );
};
