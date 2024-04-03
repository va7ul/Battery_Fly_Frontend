import { SideBarNav } from 'components/Shared/SideBarNav/SideBarNav';
import { Wrapper, Title } from './UserProfile.styled';

export const UserProfile = () => {
  return (
    <Wrapper>
      <SideBarNav />
      <div>
        <Title>Користувач</Title>
      </div>
    </Wrapper>
  );
};
