import { FC, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SideBarNav } from 'components/Shared/SideBarNav/SideBarNav';
import { UserDataTable } from './UserDataTable/UserDataTable';
import { UserDataEditForm } from './UserDataEditForm/UserDataEditForm';
import { DeliveryAddress } from './DeliveryAddress/DeliveryAddress';
import { Wrapper, Title, Box } from './UserProfile.styled';

export const UserProfile: FC = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width:1280px)' });

  const [showForm, setShowForm] = useState(false);


  const handleShowForm = () => {
      setShowForm(showForm => !showForm);
  };

  return (
    <Wrapper>
      {isBigScreen && <SideBarNav />}
      <div>
        <Box>
          <Title>Користувач</Title>
          {!showForm && <UserDataTable handleShowForm={handleShowForm} />}
          {showForm && <UserDataEditForm handleShowForm={handleShowForm} />}
        </Box>
        <DeliveryAddress />
      </div>
    </Wrapper>
  );
};
