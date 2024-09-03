import { useMediaQuery } from 'react-responsive';
import { Item } from '../NavItem/NavItem.styled';
import { MobileAssortment } from './MobileAssortment/MobileAssortment';
import { DesktopAssortment } from './DesktopAssortment/DesktopAssortment';

export const Assortment = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Item>
      {mobileVersion ? (
        <>
          <MobileAssortment />
        </>
      ) : (
        <DesktopAssortment />
      )}
    </Item>
  );
};
