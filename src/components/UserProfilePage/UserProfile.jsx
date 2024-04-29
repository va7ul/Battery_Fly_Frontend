import { SideBarNav } from 'components/Shared/SideBarNav/SideBarNav';
import { Wrapper, Title, Button } from './UserProfile.styled';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAuth } from 'utils/hooks';
import { useMediaQuery } from 'react-responsive';

import { LuPencilLine } from 'react-icons/lu';



export const UserProfile = () => {
    const desktopVersion = useMediaQuery({ query: '(min-width:1280px)' });
  const {
    userData: { firstName, lastName, patronymic, tel, email },
  } = useAuth();

  function createData(userData, value) {
  return { userData, value };
}

const rows = [
  createData('Ім’я', firstName),
  createData('Прізвище', lastName),
  createData('По батькові', patronymic),
  createData('Мобільний номер', tel),
  createData('Email', email),
  createData('Пароль', '*********'),
];
 
  return (
    <Wrapper>
      {desktopVersion && <SideBarNav />}
      <div>
        <Title>Користувач</Title>

        <TableContainer
          component={Paper}
          sx={{ backgroundColor: 'rgba(247,247,247,1)' }}
        >
          <Table sx={{ minWidth: 175 }} aria-label="user data table">
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.userData}>
                  <TableCell
                    style={{
                      fontSize: desktopVersion ? '15px' : '10px',
                      padding: desktopVersion ? '20px' : '10px',
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.userData}
                  </TableCell>
                  <TableCell
                    style={{
                      fontSize: desktopVersion ? '15px' : '10px',
                      fontWeight: '600',
                      textAlign: 'left',
                      padding: desktopVersion ? '20px' : '10px',
                    }}
                    align="right"
                  >
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button type="button">
          <LuPencilLine />
          Редагувати дані
        </Button>
      </div>
    </Wrapper>
  );
};
