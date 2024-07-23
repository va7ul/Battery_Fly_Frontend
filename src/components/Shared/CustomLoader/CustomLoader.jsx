import Backdrop from '@mui/material/Backdrop';
import { Hourglass } from 'react-loader-spinner';
import { theme } from 'styles/theme';

export const CustomLoader = ({ isLoading = true }) => {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <Hourglass
          height="150"
          width="150"
          colors={[`${theme.colors.hoverColor}`, `${theme.colors.secondary}`]}
        />
      </Backdrop>
    </div>
  );
};
