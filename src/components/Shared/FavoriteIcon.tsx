import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import { BadgeComponent } from './Badge';
import { selectFavorites } from '../../redux/user/userSelectors';
import { FC } from 'react';
import { SignUpModalProps } from '../../@types/header.types';
import { useTypedSelector } from '../../redux/hooks';

export const FavoriteIcon: FC<SignUpModalProps> = ({ handleOpenSignUpSignInModal }) => {
  const favorites = useTypedSelector(selectFavorites);

  return (
    <BadgeComponent value={favorites?.length}>
      <FavoriteBorderSharpIcon
        onClick={handleOpenSignUpSignInModal}
        sx={{
          p: 0,
          color: 'hoverColor.main',
          width: {
            mobile: '24px',
            desktop: '35px',
          },
          cursor: 'pointer',
        }}
      />
    </BadgeComponent>
  );
};
