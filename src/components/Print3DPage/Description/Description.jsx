// import { useSelector } from 'react-redux';

import { Container, Desc, Item, Subtitle } from './Description.styled';

export const Description = ({ description }) => {
  //   const { description } = useSelector(select3DPrint);

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
