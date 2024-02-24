import { Grid} from '@mui/material';
import { Categories } from './Categories/Categories';
import { Hero } from './Hero/Hero';
import { OurServices } from './OurServices/OurServices';
import { WhyChooseUs } from './WhyChooseUs/WhyChooseUs';



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
          <OurServices />
        </Grid>
        <Grid>
          <WhyChooseUs />
        </Grid>
      </Grid>
    </>
  );
};
