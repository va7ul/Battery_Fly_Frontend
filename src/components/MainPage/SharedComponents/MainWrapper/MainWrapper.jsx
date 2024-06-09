import { Wrapper } from "./MainWrapper.styled";


export const MainWrapper = ({ children, isCategories = false }) => {
  return <Wrapper $isCategories={isCategories}>{children}</Wrapper>;
};
