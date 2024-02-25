import styled from 'styled-components';

export const Wrapper = styled.section`
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
`;

export const Title = styled.h1`
  width: 200px;
  font-weight: 700;
  font-size: 15px;
  text-align: start;
  color: #636363;
  margin-left: 20px;
  margin-right: auto;
`;
export const HighlightedText = styled.p`
  color: #9a927f;
`;