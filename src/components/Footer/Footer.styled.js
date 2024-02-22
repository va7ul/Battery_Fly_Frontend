import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 25px 30px;
  max-width: 360px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 56px 110px;
    max-width: 1280px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 36px;

  @media screen and (min-width: 1280px) {
  }
`;

export const Logo = styled.img`
  width: 78px;
  height: 24px;
  margin-bottom: 10px;
`;

// export const Text = styled.p`
//   font-size: 10px;

//   @media screen and (min-width: 1280px) {
//     font-size: 15px;
//   }
// `;

// export const Box = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
// `;

// export const Title = styled.h4`
//   font-size: 10px;
//   font-weight: 600;

//   @media screen and (min-width: 1280px) {
//     font-size: 15px;
//   }
// `;

// export const Link = styled(NavLink)`
//   font-size: 10px;

//   &:hover {
//     color: ${props => props.theme.colors.secondary};
//   }

//   @media screen and (min-width: 1280px) {

//   }
// `;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 1280px) {
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1280px) {
  }
`;
