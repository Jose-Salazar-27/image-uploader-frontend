export const uploadImages = data => {
  const controller = new AbortController();
  const config = {
    method: 'POST',
    body: data,
    signal: controller.signal,
  };
  return fetch('http://localhost:8800/api/upload', config);
};
