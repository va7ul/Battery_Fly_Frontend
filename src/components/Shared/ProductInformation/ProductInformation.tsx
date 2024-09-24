import { InfoBox, Subject, Info } from './ProductInformation.styled';

type ProductInformationProps = {
  information: string;
};

export const ProductInformation: React.FC<ProductInformationProps> = ({
  information,
}) => {
  const newInfo = information.split(';');
  return (
    <InfoBox>
      <Subject>Опис</Subject>
      <Info>
        {newInfo.map(item => (
          <div key={item}>
            <div>{item}</div><br />
          </div>
        ))}
      </Info>
    </InfoBox>
  );
};
