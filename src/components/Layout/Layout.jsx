import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'styles/GlobalStyled';
import { Container } from './Layout.styled';
import { Footer } from '../Footer/Footer';
import { Header } from '../../components/Header/Header';

// import { MenuAppBar } from 'components/Appbar/AppBar';
// ghbvt
export const Layout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
};
