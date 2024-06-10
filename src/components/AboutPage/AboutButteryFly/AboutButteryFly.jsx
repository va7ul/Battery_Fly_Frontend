import { useMediaQuery } from 'react-responsive';
import { Grid } from '@mui/material';
import battery from '../../../assets/images/about-us-battery.jpeg';
import battery2x from '../../../assets/images/about-us-battery-2x.jpeg';
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
          sx={{
            '&.MuiGrid-item': {
              paddingRight: isBigScreen && '18px',
              paddingTop: isBigScreen && '158px',
              paddingBottom: isBigScreen && '158px',
              marginBottom: isBigScreen && '20px',
            },
          }}
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
              <img
                src={battery}
                srcSet={`${battery2x} 2x`}
                alt="battery"
                width="347"
                height="446"
              />
            </div>
          </Grid>
        )}
      </Grid>
    </section>
  );
};
