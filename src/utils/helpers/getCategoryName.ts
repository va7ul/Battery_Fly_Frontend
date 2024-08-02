export const getCategoryName = (category: string): string | undefined => {
  const categoryNames: { [key: string]: string } = {
    Акції: 'sale',
    Акумулятори: 'battery',
    'Готові батареї': 'assembly',
    'Батареї для FPV-дронів': 'fpv',
    'Батареї для електротранпорту': 'transport',
    'Батареї для іграшок': 'toys',
    Прилади: 'devices',
    'Розхідні матеріали': 'materials',
  };

  return categoryNames[category];
};
