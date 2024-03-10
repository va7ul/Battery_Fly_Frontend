export const getCategoryName = category => {
  switch (category) {
    case 'Акції':
      return 'sale';
    case 'Акумулятори':
      return 'battery';
    case 'Готові батареї':
      return 'assembly';
    case 'Батареї для FPV-дронів':
      return 'fpv';
    case 'Батареї для електротранпорту':
      return 'transport';
    case 'Батареї для іграшок':
      return 'toys';
    case 'Прилади':
      return 'devices';
    case 'Розхідні матеріали':
      return 'materials';
    default:
      break;
  }
};
