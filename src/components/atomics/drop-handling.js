export const handleDrop = (e, setState, setLoading) => {
  e.preventDefault();

  if (e.dataTransfer.items) {
    [...e.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === 'file') {
        const file = item.getAsFile();
        setState(file);
        setLoading(true);
      } else {
        // Use DataTransfer interface to access the file(s)
        [...e.dataTransfer.files].forEach((file, i) => {
          setState(file);
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
