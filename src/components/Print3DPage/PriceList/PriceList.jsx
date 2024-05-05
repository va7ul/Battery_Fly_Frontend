import { useSelector } from 'react-redux';
import { selectPrint3D } from '../../../redux/print3D/print3DSelectors';
import { Wrapper, Title, Table } from './PriceList.styled';

export const PriceList = () => {
  const { table1, table2 } = useSelector(selectPrint3D);

  const data = [table1, table2];

  return (
    <>
      <Title>Ціни на друк</Title>
      <Wrapper>
        {data.map(
          data =>
            data[100] && (
              <Table key={data.nameTable}>
                <caption>{data.nameTable}</caption>
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
                    <td>{data[100][1]} грн</td>
                    <td>{data[100][50]} грн</td>
                    <td>{data[100][100]} грн</td>
                    <td>{data[100][250]} грн</td>
                  </tr>
                  <tr>
                    <td>200 мікрон</td>
                    <td>{data[200][1]} грн</td>
                    <td>{data[200][50]} грн</td>
                    <td>{data[200][100]} грн</td>
                    <td>{data[200][250]} грн</td>
                  </tr>
                  <tr>
                    <td>300 мікрон</td>
                    <td>{data[300][1]} грн</td>
                    <td>{data[300][50]} грн</td>
                    <td>{data[300][100]} грн</td>
                    <td>{data[300][250]} грн</td>
                  </tr>
                </tbody>
              </Table>
            )
        )}
      </Wrapper>
    </>
  );
};
