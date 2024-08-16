import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  @media screen and (min-width: 1280px) {
    right: 30px;
    bottom: 50px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 6px;
  transition: 0.3s ease;
`;

export const Item = styled.li`
  border-radius: 50%;
  cursor: pointer;
  width: 34px;
  height: 34px;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    width: 44px;
    height: 44px;
  }
`;

export const Insta = styled.li`
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  border-radius: 50%;
  cursor: pointer;
  width: 34px;
  height: 34px;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 1280px) {
    width: 44px;
    height: 44px;
  }
`;

export const Icon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  color: white;
  &:hover {
    color: ${props => props.theme.colors.textPrimary};
  }
  @media screen and (min-width: 1280px) {
    width: 44px;
    height: 44px;
  }
`;

export const Button = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.background};
  animation: animation_button 3s linear infinite;
  transition: all 200ms;

  @keyframes animation_button {
    0% {
      box-shadow: 0 0 0 0 #ffba26, 0 0 0 0 rgba(255, 206, 9, 0.7);
    }
    40% {
      box-shadow: 0 0 0 13.62667px rgba(255, 186, 38, 0),
        0 0 0 6.81333px rgba(255, 206, 9, 0.7);
    }
    80% {
      box-shadow: 0 0 0 27.25333px rgba(255, 186, 38, 0),
        0 0 0 13.62667px rgba(255, 206, 9, 0);
    }
    100% {
      box-shadow: 0 0 0 34.06667px rgba(255, 186, 38, 0),
        0 0 0 27.25333px rgba(255, 206, 9, 0);
    }
  }
  @media screen and (min-width: 1280px) {
    width: 70px;
    height: 70px;
  }
`;
