import {
  Item,
  StyledLink,
} from '../../../AssortmentList/ListItem/ListItem.styled';
import { useMediaQuery } from 'react-responsive';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';
import { HopeIconDesktop } from 'components/Shared/HopeIconDesktop/HopeIconDesktop';

export const ListItem = ({ page, title }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Item>
      <StyledLink to={page}>
        {mobileVersion ? <HopeIconMobile /> : <HopeIconDesktop />}
        <div>{title}</div>
      </StyledLink>
    </Item>
  );
};
