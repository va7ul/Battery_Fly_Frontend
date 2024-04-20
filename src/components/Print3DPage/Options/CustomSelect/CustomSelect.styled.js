export const selectStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'rgba(225, 225, 225, 1)',
    borderRadius: '6px',
    borderStyle: 'none',
    width: '132px',
    maxHeight: '30px',
    minHeight: '25px',
    border: '1px solid rgb(31, 31, 31)',
    ':hover': { borderColor: 'currentColor', boxShadow: 'none' },
    '@media only screen and (min-width: 1280px)': {
      width: '220px',
      minHeight: '42px',
      borderRadius: '12px',
    },
  }),
  menu: styles => ({
    ...styles,
    backgroundColor: 'rgba(225, 225, 225, 1)',
    fontSize: '10px',
    width: '132px',
    border: '1px solid rgb(31, 31, 31)',
    '@media only screen and (min-width: 1280px)': {
      fontSize: '20px',
      width: '220px',
      borderRadius: '12px',
    },
  }),
  input: styles => ({ ...styles, display: 'none' }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? 'rgb(255, 208, 100)' : undefined,
      color: !isDisabled
        ? isSelected
          ? 'rgb(31, 31, 31);'
          : 'rgb(31, 31, 31);'
        : undefined,
      cursor: isDisabled ? 'not-allowed' : 'default',
      padding: '2px 8px',
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? 'rgb(255, 208, 100)'
            : 'rgb(255, 208, 100)'
          : undefined,
      },
      '@media only screen and (min-width: 1280px)': {
        borderRadius: '6px',
      },
    };
  },
  placeholder: styles => ({
    ...styles,
    fontSize: '10px',
    padding: '0px 8px',
    margin: 0,
    '@media only screen and (min-width: 1280px)': {
      fontSize: '20px',
    },
  }),
  indicatorsContainer: styles => ({
    ...styles,
    height: '30px',
    width: '38px',
    '@media only screen and (min-width: 1280px)': {
      height: '42px',
      width: '40px',
    },
  }),
  valueContainer: styles => ({ ...styles, padding: 0 }),
  singleValue: styles => ({
    ...styles,
    fontSize: '10px',
    margin: 0,
    padding: '8px',
    '@media only screen and (min-width: 1280px)': {
      fontSize: '20px',
    },
  }),
};
