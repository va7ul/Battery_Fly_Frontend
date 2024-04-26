import { SideBarNav } from 'components/Shared/SideBarNav/SideBarNav';
import { Wrapper, Title } from './UserProfile.styled';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAuth } from 'utils/hooks';



export const UserProfile = () => {
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
  createData('Мобільний номер телефону', tel),
  createData('Email', email),
  createData('Пароль', '*********'),
];
 
  return (
    <Wrapper>
      <SideBarNav />
      <div>
        <Title>Користувач</Title>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="user data table">
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.userData}>
                  <TableCell component="th" scope="row">
                    {row.userData}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Wrapper>
  );
};
