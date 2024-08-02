export const getPath = (category: string): string | undefined => {
  const categoryPaths: { [key: string]: string } = {
    Акції: 'sales',
    Акумулятори: 'batteries',
    'Готові батареї': 'assembly',
    'Батареї для FPV-дронів': 'batteries-for-fpv',
    'Батареї для електротранпорту': 'batteries-for-transport',
    'Батареї для іграшок': 'batteries-for-toys',
    Прилади: 'devices',
    'Розхідні матеріали': 'materials',
    'Акумулятори 18650': 'batteries-18650',
    'Акумулятори 21700': 'batteries-21700',
    'Акумулятори 32650': 'batteries-32650',
    'Акумулятори Li-Po': 'batteries-li-po',
    'Акумулятори LiFePo4': 'batteries-lifepo4',
  };

  return categoryPaths[category];
};
