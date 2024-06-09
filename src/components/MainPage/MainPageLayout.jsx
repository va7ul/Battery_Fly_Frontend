import services from '../../utils/json/main-page-our-services.json';
import reasons from '../../utils/json/main-page-why-choose-us.json';
import { Hero } from './Hero/Hero';
import { Categories } from './Categories/Categories';
import { OurServices } from './OurServices/OurServices';
import { WhyChooseUs } from './WhyChooseUs/WhyChooseUs';


export const MainPageLayuot = () => {
  return (
    <>
        <Hero />
        <Categories />
        <OurServices services={services}/>
        <WhyChooseUs reasons={reasons} />
   </> 
  );
};
