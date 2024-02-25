import { FeedbackButton, Wrapper, Button } from './MobileToolBar.styled';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const MobileToolBar = () => {
  return (
    <Wrapper>
      <FeedbackButton type="button">Зв'язатися</FeedbackButton>
      <Button type="button">
        <ShoppingCartOutlinedIcon

        //   sx={{
        //     '& .MuiIcon-root': {
        //       color: 'red',
        //     },
        //   }}
        />
      </Button>
      <Button type="button">
        <FavoriteBorderSharpIcon />
      </Button>
      <Button type="button">
        <AccountCircleOutlinedIcon />
      </Button>
    </Wrapper>
  );
};
