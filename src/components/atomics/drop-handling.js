export const handleDrop = (e, setState) => {
  e.preventDefault();
  // const { items } = e.dataTransfer;

  if (e.dataTransfer.items) {
    [...e.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === 'file') {
        const file = item.getAsFile();
        setState(file);
      } else {
        // Use DataTransfer interface to access the file(s)
        [...e.dataTransfer.files].forEach((file, i) => {
          setState(file);
        });
      }
    });
  }
};

export const dragAndDrop = e => {
  e.preventDefault();
  e.stopPropagation();
};
