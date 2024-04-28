import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-content: center;
  width: 100%;
  height: 234px;
  background-color: ${props => props.theme.colors.textPrimary};
  /* padding-top: 90px;
  padding-bottom: 90px; */
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (min-width: 1280px) {
    height: 590px;
    /* padding-top: 142px;
    padding-bottom: 238px; */
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 15px;
  text-align: start;
  /* color: ${props => props.theme.colors.greyBackgroundPaper}; */
  color: ${props => props.theme.colors.greyPlaysholder};

  @media (min-width: 1280px) {
    font-size: 45px;
    font-weight: 900;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 204px;
  gap: 5px;
  margin-left: 20px;
  margin-right: auto;

  @media screen and (min-width: 1280px) {
    width: 510px;
    gap: 20px;
    margin-left: 110px;
  }
`;

export const SliderButtons = styled.button`
  background-color: transparent;
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  right: ${props => props.$next && '20px'};
  /* left: ${props => props.$prev && '20px'}; */

  @media screen and (min-width: 1280px) {
    right: ${props => props.$next && '110px'};
    /* left: ${props => props.$prev && '110px'}; */
  }
`;
