import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-height: 234px;
  background-color: ${props => props.theme.colors.textPrimary};
  padding-top: 90px;
  padding-bottom: 90px;
  /* background-image: linear-gradient(rgba(46, 47, 66, 0.7),rgba(46, 47, 66, 0.7)),
                      url('../images/hero-bg-mob.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover; */
  @media (min-width: 1280px) {
    max-height: 590px;
    padding-top: 142px;
    padding-bottom: 238px;
  }
`;

export const Title = styled.h1`
  width: 200px;
  font-weight: 700;
  font-size: 15px;
  text-align: start;
  color: #636363;
  margin-left: 20px;
  margin-right: auto;

  @media (min-width: 1280px) {
    width: 510px;
    font-size: 40px;
    font-weight: 900;
    margin-left: 110px;
    margin-bottom: 36px;
  }
`;

export const HighlightedText = styled.p`
  color: #9a927f;
`;