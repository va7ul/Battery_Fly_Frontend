import Select from 'react-select';
import { selectStyles } from './CustomSelect.styled';

export const CustomSelect = ({ data, placeholder }) => {
  const options = data.map(item => {
    return {
      value: item,
      label: item,
    };
  });

  return (
    <Select
      options={options}
      // onChange={handleSelect}
      placeholder={placeholder}
      styles={selectStyles}
    />
  );
};
