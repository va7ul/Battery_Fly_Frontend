import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(66px, 1fr));
  gap: 6px;
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: center;
  justify-items: center;
`;

// export const LinkItem = styled(Link)`
//   display: inline-block;
//   text-decoration: none;
//   padding: 16px 0;
//   color: #000000;
// `;