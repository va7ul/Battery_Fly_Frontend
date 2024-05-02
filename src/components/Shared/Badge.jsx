import { Badge } from '@mui/material';

export const BadgeComponent = ({ children, value }) => {
  return (
    <Badge
      badgeContent={value}
      sx={{
        '& .MuiBadge-badge': {
          fontSize: {
            mobile: 7,
            desktop: 10,
          },
          fontWeight: '400',
          backgroundColor: 'hoverColor.main',
          color: 'background.default',
          height: {
            mobile: 12,
            desktop: 18,
          },
          minWidth: {
            mobile: 12,
            desktop: 18,
          },
          top: 5,
          right: {
            mobile: 0,
            desktop: 3,
          },
          p: 0,
        },
      }}
    >
      {children}
    </Badge>
  );
};
