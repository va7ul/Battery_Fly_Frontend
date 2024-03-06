import { Grid } from '@mui/material';
import { Title } from '../SharedComponents/Title/Title';
import { Box, IconSun, LinkToAssortment, List, ListItem, Text } from './Advantages.styled';
import { AdvantagesCard } from '../AdvantagesCard/AdvantagesCard';
import sprite from '../../../assets/images/sprite.svg'
export const Advantages = ({ advantages }) => {
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
              paddingTop: '66px',
              paddingBottom: '66px',
              paddingRight: '90px',
              paddingLeft: '90px',
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
            <LinkToAssortment to="/assortment"><div>До асортименту</div></LinkToAssortment>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};
