import { useMediaQuery } from 'react-responsive';
import { MobileBatteries } from './MobileBatteries/MobileBatteries';
import { Item } from '../../NavItem/NavItem.styled';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';

export const Batteries = ({
  openSubDrawer,
  setOpenSubDrawer,
  isOpen,
  setIsOpen,
}) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Item>
      {mobileVersion && (
        <>
          <HopeIconMobile />
          <MobileBatteries
            openSubDrawer={openSubDrawer}
            setOpenSubDrawer={setOpenSubDrawer}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </>
      )}
    </Item>
  );
};
