import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useMediaQuery } from 'react-responsive';

export const MobileDrawer = ({ children, toggle, isOpen, anchor }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <SwipeableDrawer
      open={isOpen}
      onClose={() => toggle()}
      onOpen={() => toggle()}
      anchor={anchor}
      onClick={e => e.stopPropagation()}
      sx={{
        '& .MuiDrawer-paper': {
          bgcolor: 'background.default',
          width: `${mobileVersion ? '360px' : '590px'}`,
          p: `${mobileVersion ? '10px' : '24px'} ${
            mobileVersion ? '20px' : '30px'
          }`,
        },
      }}
    >
      {children}
    </SwipeableDrawer>
  );
};
