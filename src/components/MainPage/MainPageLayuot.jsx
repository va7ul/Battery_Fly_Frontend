import { Categories } from './Categories/Categories';
import { Hero } from './Hero/Hero';
import { OurServices } from './OurServices/OurServices';
import { WhyChooseUs } from './WhyChooseUs/WhyChooseUs';
import services from '../../utils/json/main-page-our-services.json';
import reasons from '../../utils/json/main-page-why-choose-us.json';

export const MainPageLayuot = () => {
  return (
    <>
      <Hero />
      <Categories />
      <OurServices services={services} />
      <WhyChooseUs reasons={reasons} />
    </>
  );
};
