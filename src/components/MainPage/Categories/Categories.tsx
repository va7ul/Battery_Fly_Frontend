import accumulator from '../../../assets/images/main-accumulator.png';
import accumulatorWEBP from '../../../assets/images/main-accumulator.webp';
import butteries from '../../../assets/images/main-butteries.png';
import butteriesWEBP from '../../../assets/images/main-butteries.webp';
import fpv from '../../../assets/images/main-for-fpv.png';
import fpvWEBP from '../../../assets/images/main-for-fpv.webp';
import transport from '../../../assets/images/main-for-transport.png';
import transportWEBP from '../../../assets/images/main-for-transport.webp';
import toys from '../../../assets/images/main-for-toys.png';
import toysWEBP from '../../../assets/images/main-for-toys.webp';
import print3d from '../../../assets/images/main-3d-print.png';
import print3dWEBP from '../../../assets/images/main-3d-print.webp';
import { MainWrapper } from '../SharedComponents/MainWrapper/MainWrapper';
import {
  Image,
  LinkToProducts,
  List,
  ListItem,
  Subtitle,
} from './Categories.styled';

type Categorie = {
  imgUrl: string;
  imgUrlWEBP: string;
  description: string;
  path: string;
};

const categories: Categorie[] = [
  {
    imgUrl: `${accumulator}`,
    imgUrlWEBP: `${accumulatorWEBP}`,
    description: 'Акумулятори',
    path: '/batteries',
  },
  {
    imgUrl: `${butteries}`,
    imgUrlWEBP: `${butteriesWEBP}`,
    description: 'Готові батареї',
    path: '/assembly',
  },
  {
    imgUrl: `${fpv}`,
    imgUrlWEBP: `${fpvWEBP}`,
    description: 'Батареї для FPV-дронів',
    path: '/batteries-for-fpv',
  },
  {
    imgUrl: `${transport}`,
    imgUrlWEBP: `${transportWEBP}`,
    description: 'Батареї для електротранспорту',
    path: '/batteries-for-transport',
  },
  {
    imgUrl: `${toys}`,
    imgUrlWEBP: `${toysWEBP}`,
    description: 'Батареї для іграшок',
    path: '/batteries-for-toys',
  },
  {
    imgUrl: `${print3d}`,
    imgUrlWEBP: `${print3dWEBP}`,
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
              <picture>
                <source srcSet={item.imgUrlWEBP} type="image/webp"/>
                <Image
                  src={item.imgUrl}
                  alt={"Фото '" + item.description + "'"}
                  width="50"
                  height="38"
                />
              </picture>
              <Subtitle>{item.description}</Subtitle>
            </LinkToProducts>
          </ListItem>
        ))}
      </List>
    </MainWrapper>
  );
};
