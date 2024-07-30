import Select, { SingleValue } from 'react-select';
import { Option } from '../../../../@types/customSelect.types';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useTypedDispatch } from '../../../../redux/hooks';
import { selectStyles } from './CustomSelect.styled';

type CustomSelectProps = {
  data: string[];
  placeholder: string;
  action: ActionCreatorWithPayload<string>;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  data,
  placeholder,
  action,
}) => {
  const dispatch = useTypedDispatch();

  const options: Option[] = data.map(item => {
    return {
      value: item,
      label: item,
    };
  });

  const handleSelect = (option: SingleValue<Option>) => {
    if (option) {
      const value = option.value;
      dispatch(action(value));
    }
  };

  return (
    <Select<Option, false>
      options={options}
      onChange={handleSelect}
      placeholder={placeholder}
      isSearchable={false}
      styles={selectStyles}
    />
  );
};
