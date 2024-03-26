import { NavLink } from 'react-router-dom';
import { StyledNav, StyledList, StyledItem } from './SubNavBar.styled';

export const SubNavBar = () => {
  return (
    <section>
      <StyledNav>
        <StyledList>
          <StyledItem>
            <NavLink to="../batteries">Акумулятори</NavLink>
          </StyledItem>
          <li>
            <NavLink to="../assembly">Готові батареї</NavLink>
          </li>
          <li>
            <NavLink to="../batteries-for-fpv">Для FPV-дронів</NavLink>
          </li>
          <li>
            <NavLink to="../batteries-for-transport">
              Для електротранпорту
            </NavLink>
          </li>
          <li>
            <NavLink to="../batteries-for-toys">Для іграшок</NavLink>
          </li>
          <li>
            <NavLink to="../devices">Прилади</NavLink>
          </li>
          <li>
            <NavLink to="../materials">Розхідні матеріали</NavLink>
          </li>
          <li>
            <NavLink to="../sales">Акції</NavLink>
          </li>
        </StyledList>
      </StyledNav>
    </section>
  );
};
