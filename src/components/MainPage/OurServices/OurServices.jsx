import { OurServicesCard } from "../OurServicesCard/OurServicesCard";
import { Text } from "../SharedComponents/Text/Text";
import { Title } from "../SharedComponents/Title/Title";
import { List, ListItem } from "./OurServices.styled";

export const OurServices = (arr) => {
  return (
    <>
      <Title></Title>
      <Text></Text>
      {/* <List>
        {arr.map((item, idx) => (
          <ListItem key={idx}>
            <OurServicesCard text={item} />
          </ListItem>
        ))}
      </List> */}
    </>
  );
};
