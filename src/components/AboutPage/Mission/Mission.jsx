import { useMediaQuery } from 'react-responsive';
import { Text } from '../SharedComponents/Text/Text';
import { Wrapper } from '../SharedComponents/Wrapper/Wrapper';
import { Box, IconEllipse, IconHeavyWaves, IconSpiral, Title } from './Mission.styled';
import sprite from '../../../assets/images/sprite.svg';

export const Mission = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <section>
      <Wrapper>
        <Box>
          {isBigScreen && (
            <>
              <IconEllipse>
                <use href={`${sprite}#icon-about-ellipse`}></use>
              </IconEllipse>
              <IconHeavyWaves>
                <use href={`${sprite}#icon-about-heavy-waves`}></use>
              </IconHeavyWaves>
              <IconSpiral>
                <use href={`${sprite}#icon-about-spiral-desktop`}></use>
              </IconSpiral>
            </>
          )}
          <Title>Наша місія</Title>
          <Text>
            Наша місія - забезпечити наших клієнтів найкращими рішеннями у сфері
            Li-Ion акумуляторів. Ми прагнемо бути вашими надійними партнерами у
            забезпеченні живлення для вашого обладнання та проектів.
          </Text>
        </Box>
      </Wrapper>
    </section>
  );
};
