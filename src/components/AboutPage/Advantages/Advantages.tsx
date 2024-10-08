import { FC } from 'react';
import { Grid } from '@mui/material';
import sprite from '../../../assets/images/sprite.svg'
import { Title } from '../SharedComponents/Title/Title';
import { AdvantagesCard } from '../AdvantagesCard/AdvantagesCard';
import { Box, IconSun, LinkToAssortment, List, ListItem, Text } from './Advantages.styled';
import { Advantage } from '../../../@types/aboutUsPage.types';

type Props = {
  advantages: Advantage[];
};

export const Advantages: FC<Props> = ({ advantages }) => {
  return (
    <section>
      <Title>Наші переваги</Title>
      <Grid container>
        <Grid item desktop={6}>
          <List>
            {advantages.map((item, idx) => (
              <ListItem key={idx}>
                <AdvantagesCard text={item} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          desktop={6}
          sx={{
            '&.MuiGrid-item': {
              paddingTop: '44px',
              paddingBottom: '44px',
              paddingRight: '60px',
              paddingLeft: '50px',
            },
          }}
        >
          <Box>
            <IconSun>
              <use href={`${sprite}#icon-about-sun`}></use>
            </IconSun>
            <Text>
              Наш бізнес втілює в собі відданість якості, доступність та
              надійність. Нехай наші акумулятори стануть надійним джерелом
              енергії для ваших інновацій та успіху. Разом ми зможемо досягнути
              більших висот та втілити ваші амбіції. Не соромтеся зв'язатися з
              нами, і ми будемо раді допомогти вам у всьому, що стосується
              Li-Ion акумуляторів.
            </Text>
            <LinkToAssortment to="/assortment">
              <div>До асортименту</div>
            </LinkToAssortment>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};
