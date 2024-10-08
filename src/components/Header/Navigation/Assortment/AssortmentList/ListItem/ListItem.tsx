import { Item, StyledLink } from './ListItem.styled';
import { useMediaQuery } from 'react-responsive';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';
import { HopeIconDesktop } from 'components/Shared/HopeIconDesktop/HopeIconDesktop';
import { FC } from 'react';
import { ListItemProps } from '../../../../../../@types/header.types';

export const ListItem: FC<ListItemProps>  = ({ page, title } ) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Item>
      <StyledLink to={page}>
        {mobileVersion ? <HopeIconMobile /> : <HopeIconDesktop />}
        {title}
      </StyledLink>
    </Item>
  );
};
