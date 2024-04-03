import { useMediaQuery } from 'react-responsive';
import { SubNavBar } from 'components/Shared/SubNavBar/SubNavBar';

const Print3DPage = () => {
  const desktopVersion = useMediaQuery({ query: '(min-width:1280px)' });

  return (
    <>
      {desktopVersion && <SubNavBar />}
      Print3DPage
    </>
  );
};

export default Print3DPage;
