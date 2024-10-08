import styled from 'styled-components';

export const Wrapper = styled.section<{ background: string }>`
  display: flex;
  width: 100%;
  height: 234px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (min-width: 1280px) {
    height: 590px;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 15px;
  text-align: start;
  color: ${props => props.theme.colors.greyBackgroundPaper};

  @media (min-width: 1280px) {
    font-size: 45px;
    font-weight: 900;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  width: 204px;
  gap: 5px;
  margin-left: 20px;
  margin-right: auto;

  @media screen and (min-width: 1280px) {
    width: 560px;
    gap: 20px;
    margin-left: 110px;
  }
`;

export const SliderButtons = styled.button<{ 'data-next'?: boolean }>`
  background-color: transparent;
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  right: ${props => props['data-next'] && '20px'};

  @media screen and (min-width: 1280px) {
    right: ${props => props['data-next'] && '110px'};
  }
`;
