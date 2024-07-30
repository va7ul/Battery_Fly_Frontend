import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 50px 110px;
    max-width: 1280px;
  }
`;

export const MobCase = styled.div`
  display: grid;
  gap: 15px;
  margin-bottom: 20px;
`;

export const Box = styled.div`
  display: grid;
  gap: 20px;
`;

export const Case = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.hoverColor};

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const OrderButton = styled.button`
  width: 170px;
  height: 40px;
  font-size: 15px;
  border-radius: 6px;
  background: ${props => props.theme.colors.secondary};

  &:hover,
  :focus {
    background: ${props => props.theme.colors.hoverColor};
  }

  @media screen and (min-width: 1280px) {
    width: 270px;
    height: 60px;
    font-size: 24px;
    border-radius: 20px;
  }
`;

export const StyledInput = styled.input`
  height: 30px;
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    height: 42px;
    font-size: inherit;
  }

  ::-webkit-file-upload-button {
    background: ${props => props.theme.colors.greyBackgroundPaper};
    height: 30px;
    padding: 8px 14px;
    margin-right: 12px;
    border-radius: 5px;
    border: 1px solid;

    @media screen and (min-width: 1280px) {
      height: 42px;
    }

    :is(:hover, :focus) {
      cursor: pointer;
    }
  }
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;
