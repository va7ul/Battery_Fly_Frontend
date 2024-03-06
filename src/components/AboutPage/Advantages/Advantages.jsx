import { Grid } from '@mui/material';
import { Title } from '../SharedComponents/Title/Title';
import { List, ListItem } from './Advantages.styled';
import { AdvantagesCard } from '../AdvantagesCard/AdvantagesCard';

export const Advantages = ({ advantages }) => {
  return (
    <section>
      <Title>Наші переваги</Title>
      <Grid container>
        <Grid
          item
          desktop={6}
        >
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
        >
        </Grid>
      </Grid>
    </section>
  );
};
