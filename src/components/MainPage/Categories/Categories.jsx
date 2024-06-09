import accumulator from '../../../assets/images/main-accumulator.png';
import butteries from '../../../assets/images/main-butteries.png';
import fpv from '../../../assets/images/main-for-fpv.png';
import transport from '../../../assets/images/main-for-transport.png';
import toys from '../../../assets/images/main-for-toys.png';
import print3d from '../../../assets/images/main-3d-print.png';
import { MainWrapper } from '../SharedComponents/MainWrapper/MainWrapper';
import { Image, LinkToProducts, List, ListItem, Subtitle } from './Categories.styled';

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
  {
    imgUrl: `${print3d}`,
    description: 'Друк на 3D-принтері',
    path: '/3D-print',
  },
];

export const Categories = () => {
  return (
    <MainWrapper isCategories={true}>
      <List>
        {categories.map((item, idx) => (
          <ListItem key={idx}>
            <LinkToProducts to={item.path}>
              <Image
                src={item.imgUrl}
                alt={item.description}
                width="50"
                height="38"
              />
              <Subtitle>{item.description}</Subtitle>
            </LinkToProducts>
          </ListItem>
        ))}
      </List>
    </MainWrapper>
  );
};
