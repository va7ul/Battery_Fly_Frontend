import { AboutButteryFly } from './AboutButteryFly/AboutButteryFly';
import { Mission } from './Mission/Mission';
import { Valuables } from './Valuables/Valuables';
import valuables from '../../utils/json/about-page-valuables.json';
import { MainWrapper } from './SharedComponents/MainWrapper/MainWrapper';
import { useMediaQuery } from 'react-responsive';
import { Advantages } from './Advantages/Advantages';
import advantages from '../../utils/json/about-page-advantages.json'


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
