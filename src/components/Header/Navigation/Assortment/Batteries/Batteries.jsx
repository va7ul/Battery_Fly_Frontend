import { useMediaQuery } from 'react-responsive';
import { MobileBatteries } from './MobileBatteries/MobileBatteries';
import { Item } from '../../Assortment/AssortmentList/ListItem/ListItem.styled';
import { DesktopBatteries } from './DesktopBatteries/DesktopBatteries';

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
          <MobileBatteries
            openSubDrawer={openSubDrawer}
            setOpenSubDrawer={setOpenSubDrawer}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </>
      ) : (
        <>
          <DesktopBatteries />
        </>
      )}
    </Item>
  );
};
