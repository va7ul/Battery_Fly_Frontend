import { CustomSelect } from './CustomSelect/CustomSelect';
import { OptionsContainer, Subtitle } from './Options.styled';

export const Options = () => {
  const selectData = {
    accuracy: ['100 мікрон', '200 мікрон', '300 мікрон'],
    plactic: ['PLA', 'PET-G', 'ABC'],
    color: [
      'Чорний',
      'Білий',
      'Сірий',
      'Червоний',
      'Жовтий',
      'Коричневий',
      'Оранжевий',
      'Зелений',
      'Синій',
    ],
  };

  return (
    <OptionsContainer>
      <Subtitle>Параметри друку:</Subtitle>
      <CustomSelect data={selectData.accuracy} placeholder={'Точність'} />
      <CustomSelect data={selectData.plactic} placeholder={'Тип пластику'} />
      <CustomSelect data={selectData.color} placeholder={'Колір'} />
    </OptionsContainer>
  );
};
