import Drawer from '@mui/material/Drawer';

export const MobileDrawer = ({ children, isOpen, closeDrawer, anchor }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={closeDrawer}
      anchor={anchor}
      onClick={e => e.stopPropagation()}
      sx={{
        '& .MuiDrawer-paper': {
          bgcolor: 'background.default',
          width: '360px',
          pl: '20px',
          pr: '20px',
        },
      }}
    >
      {children}
    </Drawer>
  );
};
