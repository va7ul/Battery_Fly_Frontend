import styled from 'styled-components';

export const PriceContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 4px;
  padding: 5px 8px;
  border-radius: 8px;
  background: rgba(217, 217, 217, 0.38);

  @media screen and (min-width: 1280px) {
    gap: 8px;
    padding: 10px;
  }
`;

export const Sum = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Discount = styled.p<{ discount: number }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  span {
    color: ${props =>
      props.discount ? props.theme.colors.success : 'inherit'};
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Total = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;

  @media screen and (min-width: 1280px) {
    text-align: end;
    border: none;
    font-size: 24px;
  }
`;

export const AddPromo = styled.div`
  font-size: 12px;
  text-align: right;
  margin-top: 4px;

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    margin-top: 8px;
  }

  button {
    background: transparent;
    color: ${props => props.theme.colors.hoverColor};
  }
`;

export const UsePromo = styled.form`
  font-size: 12px;
  text-align: right;
  margin-top: 15px;
  height: 40px;
  border-radius: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    margin-top: 20px;
    height: 60px;
  }

  input {
    width: 185px;
    height: 100%;
    padding-left: 10px;
    border-radius: 12px 0px 0px 12px;
    border: transparent;
    background: ${props => props.theme.colors.greyBackgroundPaper};

    ::placeholder {
      color: ${props => props.theme.colors.textDisabled};
    }

    &:focus {
      outline: none;
      border: 1px solid ${props => props.theme.colors.secondary};
    }

    @media screen and (min-width: 1280px) {
      width: 288px;
    }
  }

  button {
    width: 135px;
    height: 100%;
    border-radius: 0px 12px 12px 0px;
    background: ${props => props.theme.colors.secondary};
    border: transparent;

    &:hover,
    :focus {
      background: ${props => props.theme.colors.hoverColor};
    }

    @media screen and (min-width: 1280px) {
      width: 240px;
    }
  }
`;

export const Advert = styled.div`
  font-size: 10px;
  margin-top: 4px;
  margin-left: 4px;
  color: ${props => props.theme.colors.error};

  @media screen and (min-width: 1280px) {
    font-size: 14px;
  }
`;
