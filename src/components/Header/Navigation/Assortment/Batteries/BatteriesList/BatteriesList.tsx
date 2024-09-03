import { ListItem } from './ListItem/ListItem';
import { selectThirdMenu } from '../../../../../../redux/menu/menuSelectors';
import { FC } from 'react';
import { useTypedSelector } from '../../../../../../redux/hooks';

interface BatteriesListProps {
  handleClick: (newOpen: boolean) => void;
}

export const BatteriesList: FC<BatteriesListProps> = ({ handleClick }) => {
  const isThirdMenuOpen = useTypedSelector(selectThirdMenu);

  const closeSubDrawer = (newOpen: boolean) => {
    if (isThirdMenuOpen) {
      return handleClick(newOpen);
    }
  };

  return (
    <ul onClick={() => closeSubDrawer(false)}>
      <ListItem page="/batteries-18650" title="18650" />
      <ListItem page="/batteries-21700" title="21700" />
      <ListItem page="/batteries-32650" title="32650" />
      <ListItem page="/batteries-li-po" title="Li-po" />
      <ListItem page="/batteries-lifepo4" title="Lifepo4" />
    </ul>
  );
};
