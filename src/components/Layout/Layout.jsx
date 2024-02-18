import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

// import { MenuAppBar } from 'components/Appbar/AppBar';

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
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
