import { useMediaQuery } from 'react-responsive';
import sprite from '../../../assets/images/sprite.svg';
import { Wrapper } from '../SharedComponents/Wrapper/Wrapper';
import { Text } from '../SharedComponents/Text/Text';
import {
  Box,
  IconEllipse,
  IconHeavyWaves,
  IconHope,
  IconSpiralDesktop,
  Title,
} from './Mission.styled';

export const Mission = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <section>
      <Wrapper>
        <Box>
          {!isBigScreen && (
            <IconHope>
              <use href={`${sprite}#icon-about-hope`}></use>
            </IconHope>
          )}
          {isBigScreen && (
            <>
              <IconEllipse>
                <use href={`${sprite}#icon-about-ellipse`}></use>
              </IconEllipse>
              <IconHeavyWaves>
                <use href={`${sprite}#icon-about-heavy-waves`}></use>
              </IconHeavyWaves>
              <IconSpiralDesktop>
                <use href={`${sprite}#icon-about-spiral-desktop`}></use>
              </IconSpiralDesktop>
            </>
          )}
          <Title>Наша місія</Title>
          <Text>
            Наша місія - забезпечити клієнтів найкращими рішеннями у сфері
            Li-Ion акумуляторів. Ми прагнемо бути вашими надійними партнерами у
            забезпеченні живлення для вашого обладнання та проектів.
          </Text>
        </Box>
      </Wrapper>
    </section>
  );
};
