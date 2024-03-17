import { useDispatch, useSelector } from 'react-redux';
import { Batteries } from '../Batteries/Batteries';
import { ListItem } from './ListItem/ListItem';
import { selectSubMenu } from '../../../../../redux/menu/menuSelectors';
import {
  setMenuOpen,
  setSubMenuOpen,
} from '../../../../../redux/menu/menuSlice';

export const AssortmentList = () =>
  // {
  //   handleClick,
  //   openSubDrawer,
  //   setOpenSubDrawer,
  //   isOpen,
  //   setIsOpen,
  // }
  {
    const dispatch = useDispatch();
    const isSubMenuOpen = useSelector(selectSubMenu);

    const closeSubDrawer = () => {
      if (isSubMenuOpen) {
        dispatch(setSubMenuOpen(false));
        dispatch(setMenuOpen(false));
      }
    };

    return (
      <ul onClick={closeSubDrawer}>
        <ListItem page="/sales" title="Акції" />
        <Batteries
        // openSubDrawer={openSubDrawer}
        // setOpenSubDrawer={setOpenSubDrawer}
        // isOpen={isOpen}
        // setIsOpen={setIsOpen}
        />
        <ListItem page="/assembly" title="Готові батареї" />
        <ListItem page="/batteries-for-fpv" title="Батареї для FPV-дронів" />
        <ListItem
          page="/batteries-for-transport"
          title="Батареї для електротранспорту"
        />
        <ListItem page="/batteries-for-toys" title="Батареї для іграшок" />
        <ListItem page="/devices" title="Прилади" />
        <ListItem page="/materials" title="Розхідні матеріали" />
      </ul>
    );
  };
