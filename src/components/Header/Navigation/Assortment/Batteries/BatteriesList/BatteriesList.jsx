import { useSelector } from 'react-redux';
import { ListItem } from './ListItem/ListItem';
import { selectThirdMenu } from '../../../../../../redux/menu/menuSelectors';

export const BatteriesList = ({ handleClick }) => {
  const isThirdMenuOpen = useSelector(selectThirdMenu);

  const closeSubDrawer = newOpen => {
    if (isThirdMenuOpen) {
      return handleClick(newOpen);
    }
  };

  return (
    <ul onClick={closeSubDrawer(false)}>
      <ListItem page="/batteries-18650" title="18650" />
      <ListItem page="/batteries-21700" title="21700" />
      <ListItem page="/batteries-32650" title="32650" />
      <ListItem page="/batteries-li-po" title="Li-po" />
      <ListItem page="/batteries-lifepo4" title="Lifepo4" />
    </ul>
  );
};
