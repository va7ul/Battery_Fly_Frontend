import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Logo, Button } from './MobileMenu.styled';
import logo from '../../../assets/images/logo.png';
// import { themeMUI } from '../../../styles/GlobalStyled';
// import { Button } from './MobileMenu.styled';
import { Navigation } from '../Navigation/Navigation';
import Drawer from '@mui/material/Drawer';
// import { Drawer, Button } from '@mui/material';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = newOpen => () => {
    setIsOpen(newOpen);
  };

  return (
    // <div>
    //   <Button onClick={() => setIsOpen(!isOpen)}>
    //     <GiHamburgerMenu />
    //   </Button>
    //   <Logo src={logo} alt="logo" />
    //   <Navigation />
    // </div>

    <div>
      <Button onClick={toggleDrawer(true)}>
        <GiHamburgerMenu />
      </Button>
      <Logo src={logo} alt="logo" />

      <Drawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiPaper-root': {
            bgcolor: 'background.default',
            width: 360,
          },
          width: 360,
        }}
      >
        <Logo src={logo} alt="logo" />
        <Navigation />
        <Button type="button" onClick={toggleDrawer(false)}>
          CLOSE
        </Button>
      </Drawer>
    </div>
  );
};
