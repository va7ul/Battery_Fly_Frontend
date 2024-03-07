import { useMediaQuery } from 'react-responsive';
import { Item } from '../NavItem/NavItem.styled';
import { MobileAssortment } from './MobileAssortment/MobileAssortment';
import { DesktopAssortment } from './DesktopAssortment/DesktopAssortment';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';

export const Assortment = ({ setIsOpen, isOpen }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Item>
      {mobileVersion ? (
        <>
          <HopeIconMobile />
          <MobileAssortment setIsOpen={setIsOpen} isOpen={isOpen} />
        </>
      ) : (
        <DesktopAssortment />
      )}
    </Item>
  );
};
