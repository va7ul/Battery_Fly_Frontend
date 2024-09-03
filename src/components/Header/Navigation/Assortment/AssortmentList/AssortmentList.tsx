import { useTypedDispatch, useTypedSelector } from '../../../../../redux/hooks';
import { Batteries } from '../Batteries/Batteries';
import { ListItem } from './ListItem/ListItem';
import { selectSubMenu } from '../../../../../redux/menu/menuSelectors';
import {
  setMenuOpen,
  setSubMenuOpen,
} from '../../../../../redux/menu/menuSlice';

export const AssortmentList = () => {
  const dispatch = useTypedDispatch();
  const isSubMenuOpen = useTypedSelector(selectSubMenu);

  const closeSubDrawer = () => {
    if (isSubMenuOpen) {
      dispatch(setSubMenuOpen(false));
      dispatch(setMenuOpen(false));
    }
  };

  return (
    <ul onClick={closeSubDrawer}>
      <ListItem page="/sales" title="Акції" />
      <Batteries />
      <ListItem page="/assembly" title="Готові батареї" />
      <ListItem page="/batteries-for-fpv" title="Батареї для FPV-дронів" />
      <ListItem
        page="/batteries-for-transport"
        title="Батареї для електротранспорту"
      />
      <ListItem page="/batteries-for-toys" title="Батареї для іграшок" />
      <ListItem page="/devices" title="Прилади" />
      <ListItem page="/materials" title="Розхідні матеріали" />
      <ListItem page="/3D-print" title="3D Друк" />
    </ul>
  );
};
