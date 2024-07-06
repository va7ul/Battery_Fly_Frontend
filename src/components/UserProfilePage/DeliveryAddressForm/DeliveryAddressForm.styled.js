import styled from 'styled-components';

export const Text = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 30px;
    margin-bottom: 20px;
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
      borderRadius: '8px',
      width: '328px',
      minHeight: '45px',
      height: '45px',
    },
  }),
  menu: styles => ({
    ...styles,
    backgroundColor: 'rgba(247, 247, 247, 1)',
    fontSize: '10px',
    borderRadius: '6px',
    width: '320px',
    border: '1px solid rgba(145, 145, 145, 1)',
    '@media only screen and (min-width: 1280px)': {
      fontSize: '15px',
      borderRadius: '8px',
      width: '328px',
    },
  }),
  input: styles => ({
    ...styles,
    fontSize: '10px',
    padding: '0px 14px',
    margin: 0,
    '@media only screen and (min-width: 1280px)': {
      fontSize: '15px',
      padding: '0px 10px',
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
        borderRadius: '8px',
      },
    };
  },
  placeholder: styles => ({
    ...styles,
    fontSize: '10px',
    fontWeight: '600',
    padding: '0px 14px',
    margin: 0,
    color: 'rgba(165, 165, 165, 1)',
    '@media only screen and (min-width: 1280px)': {
      fontSize: '15px',
      padding: '0px 10px',
    },
  }),
  valueContainer: styles => ({ ...styles, padding: 0 }),
  singleValue: styles => ({
    ...styles,
    fontSize: '10px',
    margin: 0,
    padding: '8px',
    '@media only screen and (min-width: 1280px)': {
      fontSize: '15px',
    },
  }),
  indicatorsContainer: styles => ({
    ...styles,
    div: {
      padding: '4px',
    },
    '@media only screen and (min-width: 1280px)': {
      div: {
        padding: '8px',
      },
    },
  }),
};

export const BtnWrapper = styled.div`
  display: flex;
  gap: 36px;
  margin-top: 10px;

  @media (min-width: 1280px) {
    gap: 90px;
  }
`;

export const SubmitAddressBtn = styled.button`
  max-width: 138px;
  padding: 12px;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  background: ${props => props.theme.colors.secondary};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    max-width: 200px;
    padding: 18px 14px;
    border-radius: 12px;
    border: none;
    font-size: 20px;
  }
`;

export const CancelBtn = styled.button`
  font-size: 12px;
  font-weight: 500;
  background-color: transparent;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hoverColor};
  }

  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;
