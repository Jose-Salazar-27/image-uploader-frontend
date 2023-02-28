export const handleSelectFile = (e, setState, setLoading) => {
  const file = e.target.files;

  const payload = new FormData();
  payload.append('my-file', file[0]);

  setState(payload);
  setLoading(true);
};

export const submitFile = async (e, state, setLoading) => {
  e.preventDefault();

  const payload = new FormData();
  payload.append('my-file', state);

  setLoading(true);
};
