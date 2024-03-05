import { Title } from '../SharedComponents/Title/Title';
import { ValuablesCard } from '../ValuablesCard/ValuablesCard';
import { List, ListItem } from './Valuables.styled';

export const Valuables = ({ valuables }) => {
  return (
    <section>
      <Title>Наші цінності</Title>
      <List>
        {valuables.map((item, idx) => (
          <ListItem key={idx}>
            <ValuablesCard text={item} />
          </ListItem>
        ))}
      </List>
    </section>
  );
};
