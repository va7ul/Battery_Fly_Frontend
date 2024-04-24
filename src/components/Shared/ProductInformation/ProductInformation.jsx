import { InfoBox, Subject, Info } from './ProductInformation.styled';

export const ProductInformation = ({ information }) => {
  const newInfo = information.split(';');
  return (
    <InfoBox>
      <Subject>Опис</Subject>
      <Info>
        {newInfo.map(item => (
          <div key={item}>
            <div>{item}</div>
          </div>
        ))}
      </Info>
    </InfoBox>
  );
};
