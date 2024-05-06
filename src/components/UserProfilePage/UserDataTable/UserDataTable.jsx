import { useAuth } from 'utils/hooks';
import { useMediaQuery } from 'react-responsive';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LiaPenAltSolid } from 'react-icons/lia';
import { EditButton } from './UserDataTable.styled';

export const UserDataTable = ({ handleShowForm }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width:1280px)' });

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
    <>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: themeMUI => themeMUI.palette.background.default,
          boxShadow: '0',
        }}
      >
        <Table sx={{ minWidth: 175 }} aria-label="user data table">
          <TableBody
          >
            {rows.map(row => (
              <TableRow key={row.userData}>
                <TableCell
                  style={{
                    fontSize: isBigScreen ? '15px' : '10px',
                    padding: isBigScreen
                      ? '20px 20px 20px 0'
                      : '10px 10px 10px 0',
                    borderBottom: '1px solid rgba(91, 91, 91, 0.5)',
                  }}
                  component="th"
                  scope="row"
                >
                  {row.userData}
                </TableCell>
                <TableCell
                  style={{
                    fontSize: isBigScreen ? '15px' : '10px',
                    fontWeight: '600',
                    textAlign: 'left',
                    padding: isBigScreen ? '20px' : '10px',
                    borderBottom: '1px solid rgba(91, 91, 91, 0.5)',
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
      <EditButton type="button" onClick={handleShowForm}>
        <LiaPenAltSolid />
        Редагувати дані
      </EditButton>
    </>
  );
};
