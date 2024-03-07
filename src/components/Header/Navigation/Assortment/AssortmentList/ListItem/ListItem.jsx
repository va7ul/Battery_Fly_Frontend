import { Item, StyledLink } from './ListItem.styled';

export const ListItem = ({ page, title }) => {
  return (
    <Item>
      <StyledLink to={page}>{title}</StyledLink>
    </Item>
  );
};
