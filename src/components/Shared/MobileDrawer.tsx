import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { FC, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

type MobileDrawerProps = {
  children: ReactNode;
  toggle: () => void;
  isOpen: boolean;
  anchor: 'left' | 'top' | 'right' | 'bottom';
}

export const MobileDrawer: FC<MobileDrawerProps> = ({ children, toggle, isOpen, anchor }) => {
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
