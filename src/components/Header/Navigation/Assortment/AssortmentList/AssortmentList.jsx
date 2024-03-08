import { ListItem } from './ListItem/ListItem';

export const AssortmentList = ({ handleClick, openSubDrawer }) => {
  const closeSubDrawer = newOpen => {
    if (openSubDrawer) {
      return handleClick(newOpen);
    }
  };

  return (
    <ul onClick={closeSubDrawer(false)}>
      <ListItem page="/sales" title="Акції" />
      <ListItem page="/batteries" title="Акумулятори" />
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
