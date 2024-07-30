import errorImage from '../../../assets/images/something-went-wrong.gif';
export const CustomError = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <img src={errorImage} alt="error_image" style={{ margin: '0 auto' }} />
    </div>
  );
};
