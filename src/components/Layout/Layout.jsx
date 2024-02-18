import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container } from '../layout/Layout.styled';
import { Footer } from './footer/Footer';

// import { MenuAppBar } from 'components/Appbar/AppBar';

export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Головна</NavLink>
        <NavLink to="/about">Про нас</NavLink>
        <NavLink to="/assortment">Асортимент</NavLink>
        <NavLink to="/delivery-and-payment">Доставка та оплата</NavLink>
        <NavLink to="/contacts">Контакти</NavLink>
        {/* <MenuAppBar /> */}
        <hr />
      </header>
      <main>
        <section>
          <Container>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
