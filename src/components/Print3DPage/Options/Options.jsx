import { useSelector } from 'react-redux';
import { CustomSelect } from './CustomSelect/CustomSelect';
import { selectPrint3D } from '../../../redux/print3D/print3DSelectors';
import { OptionsContainer, Subtitle } from './Options.styled';

export const Options = () => {
  const { accuracy, plactic, color } = useSelector(selectPrint3D);

  return (
    <OptionsContainer>
      <Subtitle>Параметри друку:</Subtitle>
      <CustomSelect data={accuracy} placeholder={'Точність'} />
      <CustomSelect data={plactic} placeholder={'Тип пластику'} />
      <CustomSelect data={color} placeholder={'Колір'} />
    </OptionsContainer>
  );
};
