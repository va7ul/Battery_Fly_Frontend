import { useMediaQuery } from "react-responsive";
import { HighlightedText, Title, Wrapper } from "./Hero.styled";
import { FeedBackButton } from "components/Shared/FeedbackButton/FeedbackButton";

  

export const Hero = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <section>
      <Wrapper>
        {isBigScreen ? (
          <Title>
            Пропонуємо широкий спектр продуктів і послуг у сфері
            <HighlightedText>Li-Ion акумуляторів</HighlightedText>
          </Title>
        ) : (
          <Title>
            Широкий спектр продуктів і послуг у сфері
            <HighlightedText>Li-Ion акумуляторів</HighlightedText>
          </Title>
        )}
        {isBigScreen && <FeedBackButton />}
      </Wrapper>
    </section>
  );
};