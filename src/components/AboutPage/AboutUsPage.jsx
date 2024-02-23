import { Grid } from '@mui/material';
import { AboutButteryFly } from './AboutButteryFly/AboutButteryFly';
import { Mission } from './Mission/Mission';
import { Valuables } from './Valuables/Valuables';
import valuables from '../../utils/json/about-page-valuables.json';

export const AboutUsPage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6}>
        <AboutButteryFly />
      </Grid>
      <Grid item xs={6}>
        <Mission />
      </Grid>
      <Grid item xs={6}>
        <Valuables valuables={valuables} />
      </Grid>
    </Grid>
  );
};
