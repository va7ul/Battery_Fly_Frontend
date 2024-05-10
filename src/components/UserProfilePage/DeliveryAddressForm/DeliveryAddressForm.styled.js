import styled from 'styled-components';

export const Text = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {

  }
`;

export const selectStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'rgba(247, 247, 247, 1)',
    borderRadius: '6px',
    borderStyle: 'none',
    width: '320px',
    minHeight: '30px',
    height: '30px',
    border: '1px solid rgba(145, 145, 145, 1)',
    '@media only screen and (min-width: 1280px)': {

    },
  }),
  menu: styles => ({
    ...styles,
    backgroundColor: 'rgba(247, 247, 247, 1)',
    fontSize: '10px',
    width: '320px',
    borderRadius: '6px',
    border: '1px solid rgba(145, 145, 145, 1)',
    '@media only screen and (min-width: 1280px)': {
 
    },
  }),
  input: styles => ({
    ...styles,
    fontSize: '10px',
    padding: '0px 8px',
    margin: 0,
    '@media only screen and (min-width: 1280px)': {
      
    },
  }),
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
      
      },
    };
  },
  placeholder: styles => ({
    ...styles,
    fontSize: '10px',
    fontWeight: '600',
    padding: '0px 8px',
    margin: 0,
    color: 'rgba(165, 165, 165, 1)',
    '@media only screen and (min-width: 1280px)': {

    },
  }),
  valueContainer: styles => ({ ...styles, padding: 0 }),
  singleValue: styles => ({
    ...styles,
    fontSize: '10px',
    margin: 0,
    padding: '8px',
    '@media only screen and (min-width: 1280px)': {

    },
  }),
  indicatorsContainer: styles => ({
    ...styles,
    div: {
      padding: '4px',
    },
    '@media only screen and (min-width: 1280px)': {},
  }),
};
