import { Hourglass } from 'react-loader-spinner';
import { theme } from 'styles/GlobalStyled';

export const CustomLoader = () => {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '70vh' }}>
      <Hourglass
        height="150"
        width="150"
        colors={[`${theme.colors.hoverColor}`, `${theme.colors.secondary}`]}
      />
    </div>
  );
};
