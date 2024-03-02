import { useMediaQuery } from 'react-responsive';
import { Text } from '../SharedComponents/Text/Text';
import { Wrapper } from '../SharedComponents/Wrapper/Wrapper';
import { Box, Image, MainTitle } from './AboutButteryFly.styled';
import battery from '../../../assets/images/about-us-battery.jpeg';
// import battery2x from '../../../assets/images/about-us-battery-2x.jpeg'
import { Grid } from '@mui/material';

export const AboutButteryFly = () => {
   const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <Grid container columnSpacing={7}>
      <Grid item xs={12} desktop={6}>
        <Wrapper>
          <MainTitle>Про BATTERYFLY</MainTitle>
          <Text>
            Ми - сучасна компанія, яка спеціалізується продажі, обслуговуванні
            та ремонті Li-Ion акумуляторів. З моменту нашого заснування, ми
            присвятили себе досягненню високої якості, надійності та інновацій у
            цій галузі.
          </Text>
        </Wrapper>
      </Grid>

      {isBigScreen && (
        <Grid item desktop={6}>
          <Box>
            <Image src={battery} alt="battery" width="347" height="446" />
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
