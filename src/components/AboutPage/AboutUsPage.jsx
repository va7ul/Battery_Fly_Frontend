import { Grid } from '@mui/material';
import { AboutButteryFly } from './AboutButteryFly/AboutButteryFly';
import { Mission } from './Mission/Mission';
import { Valuables } from './Valuables/Valuables';
import valuables from '../../utils/json/about-page-valuables.json';
import { MainWrapper } from './SharedComponents/MainWrapper/MainWrapper';


export const AboutUsPage = () => {
  return (
    <MainWrapper>
          <AboutButteryFly />
          <Mission />
          <Valuables valuables={valuables} />
    </MainWrapper>
  );
};
