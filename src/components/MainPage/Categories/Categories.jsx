import accumulator from '../../../assets/images/main-accumulator.png';
import butteries from '../../../assets/images/main-butteries.png';
import fpv from '../../../assets/images/main-for-fpv.png';
import transport from '../../../assets/images/main-for-transport.png';
import toys from '../../../assets/images/main-for-toys.png';
import { List } from './Categories.styled';
import { Link } from 'react-router-dom';
import { MainWrapper } from '../SharedComponents/MainWrapper/MainWrapper';


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
  return (
    <MainWrapper>
      <List>
        {categories.map((item, idx) => (
          <li key={idx}>
            <Link to={item.path}>
              <img
                src={item.imgUrl}
                alt={item.description}
                width="60"
                height="46"
              />
            </Link>
          </li>
        ))}
      </List>
    </MainWrapper>
  );
};
