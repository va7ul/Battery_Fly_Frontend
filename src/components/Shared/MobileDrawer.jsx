import Drawer from '@mui/material/Drawer';
import { useMediaQuery } from 'react-responsive';

export const MobileDrawer = ({ children, isOpen, closeDrawer, anchor }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Drawer
      open={isOpen}
      onClose={closeDrawer}
      anchor={anchor}
      onClick={e => e.stopPropagation()}
      sx={{
        '& .MuiDrawer-paper': {
          bgcolor: 'background.default',
          width: `${mobileVersion ? '360px' : '460px'}`,
          p: `${mobileVersion ? '10px' : '24px'} ${
            mobileVersion ? '20px' : '30px'
          }`,
        },
      }}
    >
      {children}
    </Drawer>
  );
};
