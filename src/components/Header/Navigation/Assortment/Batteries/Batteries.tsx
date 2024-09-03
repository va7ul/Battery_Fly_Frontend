import { useMediaQuery } from 'react-responsive';
import { MobileBatteries } from './MobileBatteries/MobileBatteries';
import { Item } from '../AssortmentList/ListItem/ListItem.styled';
import { DesktopBatteries } from './DesktopBatteries/DesktopBatteries';

export const Batteries = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Item>
      {mobileVersion ? (
        <>
          <MobileBatteries />
        </>
      ) : (
        <>
          <DesktopBatteries />
        </>
      )}
    </Item>
  );
};
