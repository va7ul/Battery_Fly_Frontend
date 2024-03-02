import { useMediaQuery } from 'react-responsive';
import sprite from '../../../../assets/images/sprite.svg';
import { HopeIcon, Item } from '../NavItem/NavItem.styled';

import { MobileAssortment } from './MobileAssortment/MobileAssortment';
import { DesktopAssortment } from './DesktopAssortment/DesktopAssortment';

export const Assortment = ({ setIsOpen, isOpen }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Item>
      {mobileVersion && (
        <HopeIcon>
          <use href={`${sprite}#icon-Hope`}></use>
        </HopeIcon>
      )}
      {mobileVersion ? (
        <MobileAssortment setIsOpen={setIsOpen} isOpen={isOpen} />
      ) : (
        <DesktopAssortment />
      )}
    </Item>
  );
};
