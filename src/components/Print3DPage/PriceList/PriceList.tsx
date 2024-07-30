import { useTypedSelector } from '../../../redux/hooks';
import { selectPrint3D } from '../../../redux/print3D/print3DSelectors';
import { Wrapper, Title, Table } from './PriceList.styled';

export const PriceList = () => {
  const { table1, table2 } = useTypedSelector(selectPrint3D);

  const tables = [table1, table2];

  return (
    <>
      <Title>Ціни на друк</Title>
      <Wrapper>
        {tables.map(
          table =>
            table && (
              <Table key={table.nameTable}>
                <caption>{table.nameTable}</caption>
                <thead>
                  <tr>
                    <th rowSpan={2}>Точність</th>
                    <th rowSpan={2}>Ціна за грам</th>
                    <th colSpan={3}>Ціна за грам, при замовленні від</th>
                  </tr>
                  <tr>
                    <th>50 грам</th>
                    <th>100 грам</th>
                    <th>250 грам</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>100 мікрон</td>
                    <td>{table[100][1]} грн</td>
                    <td>{table[100][50]} грн</td>
                    <td>{table[100][100]} грн</td>
                    <td>{table[100][250]} грн</td>
                  </tr>
                  <tr>
                    <td>200 мікрон</td>
                    <td>{table[200][1]} грн</td>
                    <td>{table[200][50]} грн</td>
                    <td>{table[200][100]} грн</td>
                    <td>{table[200][250]} грн</td>
                  </tr>
                  <tr>
                    <td>300 мікрон</td>
                    <td>{table[300][1]} грн</td>
                    <td>{table[300][50]} грн</td>
                    <td>{table[300][100]} грн</td>
                    <td>{table[300][250]} грн</td>
                  </tr>
                </tbody>
              </Table>
            )
        )}
      </Wrapper>
    </>
  );
};
