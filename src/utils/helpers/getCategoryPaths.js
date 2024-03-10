export const getPath = category => {
  switch (category) {
    case 'Акції':
      return 'sales';
    case 'Акумулятори':
      return 'batteries';
    case 'Готові батареї':
      return 'assembly';
    case 'Батареї для FPV-дронів':
      return 'batteries-for-fpv';
    case 'Батареї для електротранпорту':
      return 'batteries-for-transport';
    case 'Батареї для іграшок':
      return 'batteries-for-toys';
    case 'Прилади':
      return 'devices';
    case 'Розхідні матеріали':
      return 'materials';
    case 'Акумулятори 18650':
      return 'batteries-18650';
    case 'Акумулятори 21700':
      return 'batteries-21700';
    case 'Акумулятори 32650':
      return 'batteries-32650';
    case 'Акумулятори Li-Po':
      return 'batteries-li-po';
    case 'Акумулятори LiFePo4':
      return 'batteries-lifepo4';
    default:
      break;
  }
};
