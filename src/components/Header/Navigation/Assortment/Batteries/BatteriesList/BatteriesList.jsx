import { ListItem } from './ListItem/ListItem';

export const BatteriesList = ({ handleClick, openThirdDrawer }) => {
  const closeSubDrawer = newOpen => {
    if (openThirdDrawer) {
      return handleClick(newOpen);
    }
  };

  return (
    <ul onClick={closeSubDrawer(false)}>
      <ListItem page="/batteries-18650" title="18650" />
      <ListItem page="/batteries-21700" title="21700" />
      <ListItem page="/batteries-32650" title="32650" />
      <ListItem page="/batteries-li-ion" title="Li-ion" />
      <ListItem page="/batteries-lifepo4" title="Lifepo4" />
    </ul>
  );
};
