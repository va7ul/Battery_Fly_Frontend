import { Subject, Desc } from "./Card.styled";

export const Information = ({information}) => {
    return (
        <div>
            <Subject>Опис</Subject>
            <Desc>{information}</Desc>
        </div>
    );
};