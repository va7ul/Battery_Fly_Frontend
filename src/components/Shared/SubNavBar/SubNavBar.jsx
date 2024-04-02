import {
  StyledNav,
  StyledList,
  StyledNavLink,
  ArrowButton,
} from './SubNavBar.styled';
import sprite from '../../../assets/images/sprite.svg';

export const SubNavBar = () => {
  return (
    <section>
      <StyledNav>
        <StyledList>
          <li>
            <StyledNavLink to="../batteries">
              <span>Акумулятори</span>
              <ArrowButton>
                <svg>
                  <use href={`${sprite}#arrow-left`}></use>
                </svg>
              </ArrowButton>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../assembly">
              <span>Готові батареї</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../batteries-for-fpv">
              <span>Для FPV-дронів</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../batteries-for-transport">
              <span>Для електротранпорту</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../batteries-for-toys">
              <span>Для іграшок</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../devices">
              <span>Прилади</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../materials">
              <span>Розхідні матеріали</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../3D-print">
              <span>3D друк</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../sales">
              <span>Акції</span>
            </StyledNavLink>
          </li>
        </StyledList>
      </StyledNav>
    </section>
  );
};
