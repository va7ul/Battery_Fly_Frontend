import { Grid} from '@mui/material';
import { Categories } from './Categories/Categories';
import { Hero } from './Hero/Hero';
import { OurServices } from './OurServices/OurServices';
import { WhyChooseUs } from './WhyChooseUs/WhyChooseUs';
import services from '../../utils/json/main-page-our-services.json';
import reasons from '../../utils/json/main-page-why-choose-us.json';


export const MainPageLayuot = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid>
          <Hero />
        </Grid>
        <Grid>
          <Categories />
        </Grid>
        <Grid>
          <OurServices services={services} />
        </Grid>
        <Grid>
          <WhyChooseUs reasons={reasons} />
        </Grid>
      </Grid>
    </>
  );
};
