import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto 30px auto;
  padding: 0 20px;

  @media (min-width: 1280px) {
    max-width: 1280px;
    margin: 0 auto 90px auto;
    padding: 0 30px 0 110px;
  }
`;

export const Holder = styled.div`
  margin-bottom: 20px;

  @media (min-width: 1280px) {
    margin-bottom: 70px;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  @media (min-width: 1280px) {
    width: 690px;
  }
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 32px 32px;
  gap: 8px;
  position: absolute;
  right: 40px;
  top: 50px;

  @media (min-width: 1280px) {
    grid-template-columns: 66px 66px;
    gap: 34px;
    right: 134px;
    top: 120px;
  }
`;

export const Button = styled.button`
  width: 32px;
  height: 20px;
  background: ${props => props.theme.colors.gradient};
  box-shadow: 6px 4px 5px 0px rgba(0, 0, 0, 0.08);
  border: transparent;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1280px) {
    width: 66px;
    height: 66px;
    border-radius: 16px;
  }

  svg {
    width: 32px;
    height: 20px;

    @media (min-width: 1280px) {
      width: 66px;
      height: 66px;
    }
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 154px);
  gap: 10px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, 255px);
    gap: 34px;
  }
`;

export const ListItem = styled.li`
  background: ${props => props.theme.colors.gradient};
  width: 154px;
  height: 226px;
  padding: 14px 10px;
  border-radius: 12px;
  box-shadow: 0px 17px 17px 0px rgba(0, 0, 0, 0.07);

  @media (min-width: 1280px) {
    width: 255px;
    height: 344px;
    padding: 18px 12px;
    border-radius: 20px;
  }
`;
