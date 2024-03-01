import { Text } from '../SharedComponents/Text/Text';
import { Title } from '../SharedComponents/Title/Title';
import {
  Box,
  Holder,
  IconHope,
  IconSpiral,
  IconVerticalSpiral,
  List,
  ListItem,
} from './WhyChooseUs.styled';
import { WhyChooseUsCard } from '../WhyChooseUsCard/WhyChooseUsCard';
import sprite from '../../../assets/images/sprite.svg';
import { Grid } from '@mui/material';
import { useMediaQuery } from 'react-responsive';



export const WhyChooseUs = ({ reasons }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <Grid
      container
      columnSpacing={7}
      sx={{
        '&.MuiGrid-container': {
          background: isBigScreen
            ? 'linear-gradient(180.00deg, rgb(255, 208, 100),rgba(251, 208, 110, 0) 112.295%);'
            : 'transparent',
          height: '655px',
        },
      }}
    >
      <Grid item xs={12} desktop={5}>
        <Box>
          <Title>Чому обирають нас?</Title>
          <Text>
            Наші переваги: впевність у якості, доступна ціна та гарантія.
          </Text>
          <Text>
            Ми прагнемо надавати нашим клієнтам належну вартість та впевненість
            у якості продукції, яку ми пропонуємо.
          </Text>
          <Text>
            Наш бізнес вирізняється завдяки кільком ключовим перевагам, які
            роблять нас найкращим вибором у сфері Li-Ion акумуляторів:
          </Text>
        </Box>
      </Grid>
      <Grid item xs={12} desktop={7}>
        <Holder>
          <IconHope>
            <use href={`${sprite}#icon-about-hope`}></use>
          </IconHope>
          {isBigScreen ?
             (<IconVerticalSpiral>
            <use href={`${sprite}#icon-main-vertical-spiral-desktop`}></use>
          </IconVerticalSpiral>) :(
          <IconVerticalSpiral>
            <use href={`${sprite}#icon-main-vertical-spiral`}></use>
          </IconVerticalSpiral>)}
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
  );
};
