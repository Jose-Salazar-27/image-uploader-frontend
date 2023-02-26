import { uploadImages } from '../../services/images.services';

export const handleSelectFile = (e, setState) => {
  const file = e.target.files;
  setState(file[0]);
};

export const submitFile = async (e, state) => {
  e.preventDefault();

  const payload = new FormData();
  payload.append('my-file', state);

  await uploadImages(payload);
};
