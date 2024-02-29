import { Categories } from './Categories/Categories';
import { Hero } from './Hero/Hero';
import { OurServices } from './OurServices/OurServices';
import { WhyChooseUs } from './WhyChooseUs/WhyChooseUs';
import services from '../../utils/json/main-page-our-services.json';
import reasons from '../../utils/json/main-page-why-choose-us.json';
import { Grid } from '@mui/material';

export const MainPageLayuot = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Hero />
      </Grid>
      <Grid item xs={12}>
        <Categories />
      </Grid>
      <Grid item xs={12}>
        <OurServices services={services}/>
      </Grid>{' '}
      <Grid item xs={12}>
        <WhyChooseUs reasons={reasons} />
      </Grid>
    </Grid>
  );
};
