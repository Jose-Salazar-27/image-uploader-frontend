export const uploadImages = data => {
  const config = {
    method: 'POST',
    body: data,
  };
  return fetch('http://localhost:8800/api/test', config);
};
