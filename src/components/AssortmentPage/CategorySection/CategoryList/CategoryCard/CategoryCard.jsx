import { StyledImage } from './CategoryCard.styled';

export const CategoryCard = () => {
  return (
    <>
      <StyledImage src="" alt="text" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '15px',
        }}
      >
        <p style={{ textAlign: 'center', marginBottom: '10px' }}>
          Lorem ipsum dolor sit amet consectetur
        </p>
        <span
          style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}
        >
          15000 грн
        </span>
        <button
          style={{
            marginBottom: '10px',
          }}
        >
          - 1 шт +
        </button>
        <button
          style={{
            padding: '6px 18px',
            border: 'transparent',
            borderRadius: '15px',
            background: 'rgba(255, 224, 153, 1)',
          }}
        >
          В кошик
        </button>
      </div>
    </>
  );
};
