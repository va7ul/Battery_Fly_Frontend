import { Grid } from '@mui/material';
import { AboutButteryFly } from './AboutButteryFly/AboutButteryFly';
import { Mission } from './Mission/Mission';
import { Valuables } from './Valuables/Valuables';
import valuables from '../../utils/json/about-page-valuables.json';
import { MainWrapper } from './SharedComponents/MainWrapper/MainWrapper';


export const AboutUsPage = () => {
  return (
    <MainWrapper>
      <Grid container>
        <Grid item xs={12}>
          <AboutButteryFly />
        </Grid>
        <Grid item xs={12}>
          <Mission />
        </Grid>
        <Grid item xs={12}>
          <Valuables valuables={valuables} />
        </Grid>
      </Grid>
    </MainWrapper>
  );
};
