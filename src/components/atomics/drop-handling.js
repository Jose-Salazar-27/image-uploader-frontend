export const handleDrop = (e, setState, setLoading) => {
  e.preventDefault();

  if (e.dataTransfer.items) {
    const payload = new FormData();

    [...e.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === 'file') {
        const file = item.getAsFile();

        payload.append('my-file', file);

        setState(payload);
        setLoading(true);
      } else {
        const payload = new FormData();

        // Use DataTransfer interface to access the file(s)
        [...e.dataTransfer.files].forEach((file, i) => {
          payload.append('my-file', file);

          setState(payload);
          setLoading(true);
        });
      }
    });
  }
};

export const dragAndDrop = e => {
  e.preventDefault();
  e.stopPropagation();
};
