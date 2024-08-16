import { Box, Title, TextDate } from "./Footer.styled";

export const TimeTable = () => {
  return (
      <Box>
        <Title>Графік роботи:</Title>
        <TextDate>Пн-Пт з 10:00 до 18:00
        </TextDate>
        <TextDate>Сб з 11:00 до 17:00
        </TextDate>
     </Box>
  );
};