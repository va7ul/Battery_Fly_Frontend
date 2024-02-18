import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Footer } from '../../components/Layout/Footer/Footer';
import { Header } from '../../components/Layout/Header/Header';

// import { MenuAppBar } from 'components/Appbar/AppBar';
// ghbvt
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
