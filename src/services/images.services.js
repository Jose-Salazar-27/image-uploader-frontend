export const uploadImages = (data, controller) => {
  const config = {
    method: 'POST',
    body: data,
    signal: controller.signal,
  };
  return fetch('https://image-uploader-backend-production-865d.up.railway.app/api/upload', config);
};
