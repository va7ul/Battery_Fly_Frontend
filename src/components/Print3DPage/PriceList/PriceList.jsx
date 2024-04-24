import { Wrapper, Title, Table } from './PriceList.styled';

export const PriceList = () => {
  return (
    <>
      <Title>Ціни на друк</Title>
      <Wrapper>
        <Table>
          <caption>PREMIUM PLA, ABS GP450, PLA+, ABS+, PC, ABS PRO</caption>
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
              <td>12 грн</td>
              <td>11 грн</td>
              <td>10 грн</td>
              <td>9 грн</td>
            </tr>
            <tr>
              <td>200 мікрон</td>
              <td>11 грн</td>
              <td>10 грн</td>
              <td>9 грн</td>
              <td>8 грн</td>
            </tr>
            <tr>
              <td>300 мікрон</td>
              <td>9 грн</td>
              <td>8 грн</td>
              <td>7 грн</td>
              <td>6 грн</td>
            </tr>
          </tbody>
        </Table>
        <Table>
          <caption>
            ELASTAN D70, ABS Flex, ELASTAN D100, COPET-CCF (CARBON FIBER), WOOD
          </caption>
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
              <td>21 грн</td>
              <td>20 грн</td>
              <td>19 грн</td>
              <td>18 грн</td>
            </tr>
            <tr>
              <td>200 мікрон</td>
              <td>17 грн</td>
              <td>16 грн</td>
              <td>15 грн</td>
              <td>14 грн</td>
            </tr>
            <tr>
              <td>300 мікрон</td>
              <td>15 грн</td>
              <td>14 грн</td>
              <td>13 грн</td>
              <td>12 грн</td>
            </tr>
          </tbody>
        </Table>
      </Wrapper>
    </>
  );
};
