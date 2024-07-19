import { Box, TextDate, Link } from './Footer.styled';

export const Confidential = () => {
  return (
    <Box>
      <TextDate>&copy; 2024 batteryfly.ua | by Dream Team </TextDate>
      <Link to="/privacy">Політика конфіденційності</Link>
    </Box>
  );
};
