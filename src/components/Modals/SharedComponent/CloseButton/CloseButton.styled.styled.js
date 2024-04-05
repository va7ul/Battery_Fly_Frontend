import styled from "styled-components";

export const CloseBtn = styled.button`
  position: absolute;
  top: 6px;
  right: 10px;
  width: 24px;
  height: 24px;
  border: 0;
  background-size: 40%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  outline: none;

  svg {
    width: 24px;
    height: 24px;
    color: rgba(99, 99, 99, 1);
    stroke-width: 1;
  }

  @media (min-width: 1280px) {
    width: 40px;
    height: 40px;
    top: 12px;
    right: 12px;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;