import accumulator from '../../../assets/images/main-accumulator.png';
import butteries from '../../../assets/images/main-butteries.png';
import fpv from '../../../assets/images/main-for-fpv.png';
import transport from '../../../assets/images/main-for-transport.png';
import toys from '../../../assets/images/main-for-toys.png';
import { Image, List, ListItem, Subtitle } from './Categories.styled';
import { Link } from 'react-router-dom';
import { MainWrapper } from '../SharedComponents/MainWrapper/MainWrapper';
import { useMediaQuery } from 'react-responsive';

const categories = [
  {
    imgUrl: `${accumulator}`,
    description: 'Акумулятори',
    path: '/batteries',
  },
  {
    imgUrl: `${butteries}`,
    description: 'Готові батареї',
    path: '/assembly',
  },
  {
    imgUrl: `${fpv}`,
    description: 'Батареї для FPV-дронів',
    path: '/batteries-for-fpv',
  },
  {
    imgUrl: `${transport}`,
    description: 'Батареї для електротранспорту',
    path: '/batteries-for-transport',
  },
  {
    imgUrl: `${toys}`,
    description: 'Батареї для іграшок',
    path: '/batteries-for-toys',
  },
];

export const Categories = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <MainWrapper>
      <List>
        {categories.map((item, idx) => (
          <ListItem key={idx}>
            <Link to={item.path}>
              <Image
                src={item.imgUrl}
                alt={item.description}
                width="60"
                height="46"
              />
                {!isBigScreen && <Subtitle>{item.description}</Subtitle>} 
            </Link>
          </ListItem>
        ))}
      </List>
    </MainWrapper>
  );
};
