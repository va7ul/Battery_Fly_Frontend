import { useMediaQuery } from 'react-responsive';
import { MobileBatteries } from './MobileBatteries/MobileBatteries';
import { Item } from '../../Assortment/AssortmentList/ListItem/ListItem.styled';
// import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';
import { DesktopBatteries } from './DesktopBatteries/DesktopBatteries';
// import { HopeIconDesktop } from 'components/Shared/HopeIconDesktop/HopeIconDesktop';

export const Batteries = ({
  openSubDrawer,
  setOpenSubDrawer,
  isOpen,
  setIsOpen,
}) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Item>
      {mobileVersion ? (
        <>
          {/* <HopeIconMobile /> */}
          <MobileBatteries
            openSubDrawer={openSubDrawer}
            setOpenSubDrawer={setOpenSubDrawer}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </>
      ) : (
        <>
          {/* <HopeIconDesktop /> */}
          <DesktopBatteries />
        </>
      )}
    </Item>
  );
};
