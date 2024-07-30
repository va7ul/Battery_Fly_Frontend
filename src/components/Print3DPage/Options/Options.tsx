import { CustomSelect } from './CustomSelect/CustomSelect';
import { useTypedSelector } from '../../../redux/hooks';
import { selectPrint3D } from '../../../redux/print3D/print3DSelectors';
import { OptionsContainer, Subtitle } from './Options.styled';
import {
  setAccuracy,
  setPlactic,
  setColor,
} from '../../../redux/print3D/print3DSlice';

export const Options = () => {
  const { accuracy, plactic, color } = useTypedSelector(selectPrint3D);

  return (
    <OptionsContainer>
      <Subtitle>Параметри друку:</Subtitle>
      <CustomSelect
        data={accuracy}
        placeholder={'Точність'}
        action={setAccuracy}
      />
      <CustomSelect
        data={plactic}
        placeholder={'Тип пластику'}
        action={setPlactic}
      />
      <CustomSelect data={color} placeholder={'Колір'} action={setColor} />
    </OptionsContainer>
  );
};
