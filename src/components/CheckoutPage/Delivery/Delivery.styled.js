import styled from 'styled-components';

export const Title = styled.p`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  width: 155px;
  height: 40px;
  font-size: 12px;
  font-weight: 500;
  /* background: ${props => props.theme.colors.greyBackgroundPaper}; */
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  padding: 14px;
  background: ${props =>
    props.$show
      ? props.theme.colors.yellow
      : props.theme.colors.greyBackgroundPaper};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.yellow};
  }

  &:focus {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 1280px) {
    width: 233px;
    height: 61px;
    font-size: 20px;
    padding: 18px;
    border-radius: 12px;
  }
`;

export const NPTitle = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    gap: 7px;
  }
`;

export const NPText = styled.p`
  text-transform: uppercase;
  font-weight: 800;
  color: #ec2028;

  @media screen and (min-width: 1280px) {
    gap: 7px;
  }
`;

export const NPIcon = styled.svg`
  width: 12px;
  height: 12px;
  fill: #ec2028;

  @media screen and (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`;

export const BoxAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    gap: 15px;
    margin-bottom: 20px;
  }
`;

export const BoxIcon = styled.div`
  color: ${props => props.theme.colors.backgroundPaper};
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 15px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const TextNp = styled.p`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 15px;

  &::after {
    content: '*';
    color: ${props => props.theme.colors.error};
    padding: 1px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Address = styled.a`
  color: ${props => props.theme.colors.textPrimary};
  font-size: 15px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const BoxNP = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    gap: 15px;
    margin-bottom: 20px;
  }
`;

export const selectStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'rgba(247, 247, 247, 1)',
    borderRadius: '8px',
    borderStyle: 'none',
    width: '320px',
    height: '40px',
    border: '1px solid rgb(157, 157, 157)',
    '@media only screen and (min-width: 1280px)': {
      width: '476px',
      height: '51px',
    },
  }),
  menu: styles => ({
    ...styles,
    backgroundColor: 'rgba(247, 247, 247, 1)',
    fontSize: '10px',
    width: '320px',
    borderRadius: '8px',
    border: '1px solid rgb(157, 157, 157)',
    '@media only screen and (min-width: 1280px)': {
      fontSize: '20px',
      width: '476px',
    },
  }),
  input: styles => ({
    ...styles,
    fontSize: '10px',
    padding: '0px 8px',
    margin: 0,
    '@media only screen and (min-width: 1280px)': {
      fontSize: '20px',
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
