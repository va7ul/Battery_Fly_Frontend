import { useMediaQuery } from 'react-responsive';
import { Grid, SxProps, Theme } from '@mui/material';
import battery from '../../../assets/images/about-us-battery.jpeg';
import batteryWEBP from '../../../assets/images/about-us-battery.webp';
import battery2x from '../../../assets/images/about-us-battery-2x.jpeg';
import battery2xWEBP from '../../../assets/images/about-us-battery-2x.webp';
import { Text } from '../SharedComponents/Text/Text';
import { MainTitle, Wrapper } from './AboutButteryFly.styled';


export const AboutButteryFly = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <section>
      <Grid container>
        <Grid
          item
          xs={12}
          desktop={7}
          sx={
            {
              '&.MuiGrid-item': {
                paddingRight: isBigScreen && '18px',
                paddingTop: isBigScreen && '158px',
                paddingBottom: isBigScreen && '158px',
                marginBottom: isBigScreen && '20px',
              },
            } as SxProps<Theme>
          }
        >
          <Wrapper>
            <MainTitle>Про BATTERYFLY</MainTitle>
            <Text>
              Ми - сучасна компанія, яка спеціалізується на продажі,
              обслуговуванні та ремонті Li-Ion акумуляторів. З моменту нашого
              заснування, ми присвятили себе досягненню високої якості,
              надійності та інновацій у цій галузі.
            </Text>
          </Wrapper>
        </Grid>

        {isBigScreen && (
          <Grid
            item
            desktop={5}
            sx={{
              '&.MuiGrid-item': {
                paddingLeft: isBigScreen && '90px',
                paddingBottom: isBigScreen && '40px',
                marginBottom: isBigScreen && '20px',
              },
            }}
          >
            <div>
              <picture>
                <source
                  srcSet={`${batteryWEBP} 1x, ${battery2xWEBP} 2x`}
                  type="image/webp"
                />
                <img
                  src={battery}
                  srcSet={`${battery2x} 2x`}
                  alt="battery"
                  width="347"
                  height="446"
                />
              </picture>
            </div>
          </Grid>
        )}
      </Grid>
    </section>
  );
};
