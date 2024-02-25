import { HighlightedText, Title, Wrapper } from "./Hero.styled";

export const Hero = () => {
  return (
    <section>
      <Wrapper>
        <Title>
          Широкий спектр продуктів і послуг у сфері
          <HighlightedText>Li-Ion акумуляторів</HighlightedText>
        </Title>
      </Wrapper>
    </section>
  );
};