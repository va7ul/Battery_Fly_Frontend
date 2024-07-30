import { useTypedSelector } from '../../../redux/hooks';
import { selectPrint3D } from '../../../redux/print3D/print3DSelectors';
import { Container, Desc, Item, Subtitle } from './Description.styled';

export const Description = () => {
  const { description } = useTypedSelector(selectPrint3D);

  const newDescription = description.split(';');

  return (
    <Container>
      <Subtitle>Технічні особливості:</Subtitle>
      <Desc>
        {newDescription.map(i => (
          <Item key={i}>{i}</Item>
        ))}
      </Desc>
    </Container>
  );
};
