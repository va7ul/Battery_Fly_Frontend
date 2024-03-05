import { InfoBox, Subject, Desc } from "./Card.styled";

export const Information = ({ information }) => {
    // const newInfo = information.split(";")
    return (
        <InfoBox>
            <Subject>Опис</Subject>
            {/* <Desc>{newInfo.map(item => <li key={item}>{item}</li>)}</Desc> */}
        </InfoBox>
    );
};