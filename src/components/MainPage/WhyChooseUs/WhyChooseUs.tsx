import { useMediaQuery } from 'react-responsive';
import { Grid, SxProps, Theme } from '@mui/material';
import sprite from '../../../assets/images/sprite.svg';
import { Title } from '../SharedComponents/Title/Title';
import { Text } from '../SharedComponents/Text/Text';
import { WhyChooseUsCard } from '../WhyChooseUsCard/WhyChooseUsCard';
import {
  Box,
  Holder,
  IconHope,
  IconSpiral,
  IconVerticalSpiral,
  List,
  ListItem,
} from './WhyChooseUs.styled';
import { Reason } from '../../../@types/mainPage.types';
import { FC } from 'react';

type Props = {
  reasons: Reason[];
};

export const WhyChooseUs: FC<Props> = ({ reasons }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <section>
      <Grid
        container
        sx={
          {
            '&.MuiGrid-container': {
              background: isBigScreen
                ? 'linear-gradient(180.00deg, rgb(255, 208, 100),rgba(251, 208, 110, 0) 112.295%);'
                : 'transparent',
              height: isBigScreen && '655px',
            },
          } as SxProps<Theme>
        }
      >
        <Grid
          item
          desktop={5}
          sx={
            {
              '&.MuiGrid-item': {
                paddingRight: isBigScreen && '88px',
                paddingLeft: isBigScreen && '110px',
              },
            } as SxProps<Theme>
          }
        >
          <Box>
            <Title>Чому обирають нас?</Title>
            <Text>
              Наші переваги: впевність у якості, доступна ціна та гарантія.
            </Text>
            <Text>
              Ми прагнемо надавати нашим клієнтам належну вартість та
              впевненість у якості продукції, яку ми пропонуємо.
            </Text>
            <Text>
              Наш бізнес вирізняється завдяки кільком ключовим перевагам, які
              роблять нас найкращим вибором у сфері Li-Ion акумуляторів:
            </Text>
          </Box>
        </Grid>
        <Grid
          item
          desktop={7}
          sx={
            {
              '&.MuiGrid-item': {
                paddingLeft: isBigScreen && '20px',
                paddingRight: isBigScreen && '110px',
              },
            } as SxProps<Theme>
          }
        >
          <Holder>
            <IconHope>
              <use href={`${sprite}#icon-about-hope`}></use>
            </IconHope>
            {isBigScreen ? (
              <IconVerticalSpiral>
                <use href={`${sprite}#icon-main-vertical-spiral-desktop`}></use>
              </IconVerticalSpiral>
            ) : (
              <IconVerticalSpiral>
                <use href={`${sprite}#icon-main-vertical-spiral`}></use>
              </IconVerticalSpiral>
            )}
            <IconSpiral>
              <use href={`${sprite}#icon-main-spiral-thin`}></use>
            </IconSpiral>
            <List>
              {reasons.map((item, idx) => (
                <ListItem key={idx}>
                  <WhyChooseUsCard text={item} />
                </ListItem>
              ))}
            </List>
          </Holder>
        </Grid>
      </Grid>
    </section>
  );
};
