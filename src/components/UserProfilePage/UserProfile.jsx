import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SideBarNav } from 'components/Shared/SideBarNav/SideBarNav';
import { UserDataTable } from './UserDataTable/UserDataTable';
import { UserDataEditForm } from './UserDataEditForm/UserDataEditForm';
import { Wrapper, Title } from './UserProfile.styled';

export const UserProfile = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width:1280px)' });

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(!showForm);

  return (
    <Wrapper>
      {isBigScreen && <SideBarNav />}
      <div>
        <Title>Користувач</Title>
        {!showForm && <UserDataTable handleShowForm={handleShowForm} />}
        {showForm && <UserDataEditForm handleShowForm={handleShowForm} />}
      </div>
    </Wrapper>
  );
};
