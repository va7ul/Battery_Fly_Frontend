import { InfoBox, Subject, Info } from "./Card.styled";

export const Information = ({ information }) => {
    const newInfo = information.split(";")
    return (
        <InfoBox>
            <Subject>Опис</Subject>
            <Info>{newInfo.map(item => <div key={item}><div>{item}</div><br /></div>)}</Info>
        </InfoBox>
    );
};