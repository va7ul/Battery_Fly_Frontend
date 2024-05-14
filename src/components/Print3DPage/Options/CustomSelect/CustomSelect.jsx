import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { selectStyles } from './CustomSelect.styled';

export const CustomSelect = ({ data, placeholder, action }) => {
  const dispatch = useDispatch();

  const options = data.map(item => {
    return {
      value: item,
      label: item,
    };
  });

  const handleSelect = option => {
    const value = option.value;
    dispatch(action(value));
  };

  return (
    <Select
      options={options}
      onChange={handleSelect}
      placeholder={placeholder}
      isSearchable={false}
      styles={selectStyles}
    />
  );
};
