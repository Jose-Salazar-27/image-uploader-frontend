// External libraries dependencies
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Components
import { Form } from './components/Form/Form';
import { Loader } from './components/Loader/Loader';
import { ImagePreview } from './components/ImagePreview/ImagePreview';

// Services and utilities
import { uploadImages } from './services/images.services';

import './App.css';

export default function App() {
  const [loading, setloading] = useState(false);
  const [files, setFiles] = useState(null);

  const Navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      uploadImages(files)
        .then(response => response.json())
        .then(json => {
          // console.log(json);
          Navigate('/file', { state: { json } });
          setloading(false);
        })
        .catch(error => {
          console.log(error);
          setloading(false);
        });
      console.log('submiting');
    }
  }, [loading]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={!loading ? <Form loading={loading} setLoading={setloading} files={files} setFiles={setFiles} /> : <Loader />} />
        <Route path='/file' element={<ImagePreview />} />
      </Routes>
    </div>
  );
}
