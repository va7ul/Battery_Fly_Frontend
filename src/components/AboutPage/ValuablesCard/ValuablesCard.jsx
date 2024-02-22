import { Text } from "../BaseComponents/Text/Text";

export const ValuablesCard = ({ title, text }) => {
  return (
    <>
      <div>
        <h3>{title}</h3>
        <svg>
          <use href=""></use>
        </svg>
      </div>
      <Text>{text}</Text>
    </>
  );
};
