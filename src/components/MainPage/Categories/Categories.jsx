import accumulator from '../../../assets/images/main-accumulator.png';
import butteries from '../../../assets/images/main-butteries.png';
import fpv from '../../../assets/images/main-for-fpv.png';
import transport from '../../../assets/images/main-for-transport.png';
import toys from '../../../assets/images/main-for-toys.png';

const categories = [
  {
    imgUrl: `${accumulator}`,
    description: 'Акумулятори',
  },
  {
    imgUrl: `${butteries}`,
    description: 'Готові батареї',
  },
  {
    imgUrl: `${fpv}`,
    description: 'Батареї для FPV-дронів',
  },
  {
    imgUrl: `${transport}`,
    description: 'Батареї для електротранспорту',
  },
  {
    imgUrl: `${toys}`,
    description: 'Батареї для іграшок',
  },
];

export const Categories = () => {
  return (
    <ul>
      {categories.map((item, idx) => (
        <li key={idx}>
          <img src={item.imgUrl} alt={item.description} width="66" height="46" />
        </li>
      ))}
    </ul>
  );
};
