export const getDate = data => {
  const day = data.slice(8, 10);
  const month = data.slice(5, 7);
  const year = data.slice(0, 4);
  const newBirthDate = `${day}.${month}.${year}`;
  return newBirthDate;
};
