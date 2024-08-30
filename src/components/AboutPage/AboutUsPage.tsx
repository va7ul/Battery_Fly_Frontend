import { useMediaQuery } from 'react-responsive';
import valuables from '../../utils/json/about-page-valuables.json';
import advantages from '../../utils/json/about-page-advantages.json'
import { MainWrapper } from './SharedComponents/MainWrapper/MainWrapper';
import { AboutButteryFly } from './AboutButteryFly/AboutButteryFly';
import { Mission } from './Mission/Mission';
import { Valuables } from './Valuables/Valuables';
import { Advantages } from './Advantages/Advantages';


export const AboutUsPage = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <MainWrapper>
      <AboutButteryFly />
      <Mission />
      <Valuables valuables={valuables} />
      {isBigScreen && <Advantages advantages={advantages} />}
    </MainWrapper>
  );
};
