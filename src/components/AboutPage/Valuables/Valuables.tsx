import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import sprite from '../../../assets/images/sprite.svg';
import { Title } from '../SharedComponents/Title/Title';
import { ValuablesCard } from '../ValuablesCard/ValuablesCard';
import {
  Box,
  IconRectangle,
  IconSpiral,
  List,
  ListItem,
  Wrapper,
} from './Valuables.styled';
import { Value } from '../../../@types/aboutUsPage.types';

type Props = {
  valuables: Value[];
};

export const Valuables: FC<Props> = ({ valuables }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <section>
      {!isBigScreen && (
        <Box>
          <IconSpiral>
            <use href={`${sprite}#icon-about-spiral`}></use>
          </IconSpiral>
          <IconRectangle>
            <use href={`${sprite}#icon-about-rectangle`}></use>
          </IconRectangle>
        </Box>
      )}
      <Wrapper>
        <Title>Наші цінності</Title>
        <List>
          {valuables.map((item, idx) => (
            <ListItem key={idx}>
              <ValuablesCard text={item} />
            </ListItem>
          ))}
        </List>
      </Wrapper>
    </section>
  );
};
