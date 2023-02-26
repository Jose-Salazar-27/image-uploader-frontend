import { useState } from 'react';

import { Form } from './components/Form/Form';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='container'>
        <Form />
      </div>
    </div>
  );
}

export default App;
