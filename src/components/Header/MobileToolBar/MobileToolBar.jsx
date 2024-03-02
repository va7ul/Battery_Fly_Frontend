import { Wrapper, Button } from './MobileToolBar.styled';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import { FeedBackButton } from 'components/Shared/FeedbackButton/FeedbackButton';
import { Badge } from '@mui/material';
// import { useMediaQuery } from 'react-responsive';

export const MobileToolBar = () => {
  // const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <Wrapper>
      <FeedBackButton />
      <Button type="button">
        <Badge
          badgeContent={1}
          color="secondary"
          sx={{
            '& .MuiBadge-badge': {
              fontSize: 7,
              fontWeight: '400',
              color: 'background.default',
              height: {
                mobile: 12,
                desktop: 15,
              },
              minWidth: {
                mobile: 12,
                desktop: 15,
              },
              top: 5,
              right: 2,
              p: 0,
            },
          }}
        >
          <ShoppingCartOutlinedIcon
            sx={{
              p: 0,
              color: 'background.paper',
              width: '20px',
              ' &:hover': {
                color: 'secondary.main',
              },
            }}
          />
        </Badge>
      </Button>
      <Button type="button">
        <Badge
          badgeContent={1}
          color="secondary"
          sx={{
            '& .MuiBadge-badge': {
              fontSize: 7,
              fontWeight: '400',
              color: 'background.default',
              height: {
                mobile: 12,
                desktop: 15,
              },
              minWidth: {
                mobile: 12,
                desktop: 15,
              },
              top: 5,
              right: 2,
              p: 0,
            },
          }}
        >
          <FavoriteBorderSharpIcon
            sx={{
              color: 'background.paper',
              width: '20px',
              ' &:hover': {
                color: 'secondary.main',
              },
            }}
          />
        </Badge>
      </Button>
      <Button type="button">
        <LoginIcon
          sx={{
            color: 'background.paper',
            width: '20px',
            ' &:hover': {
              color: 'secondary.main',
            },
          }}
        />
      </Button>
      {/* <Button type="button">
        <AccountCircleOutlinedIcon
          sx={{
            color: 'background.paper',
            width: '20px',
              ' &:hover': {
              color: 'secondary.main',
            }
          }}
        />
      </Button> */}
    </Wrapper>
  );
};
