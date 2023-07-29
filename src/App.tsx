import { Routes, Route } from 'react-router-dom';

import { NotFound } from '@pages'

import './reset.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>oke</p>} />
      <Route path="/anime" element={<p>gas</p>} />
      <Route path="/anime/:id" element={<p>gas</p>} />
      <Route path="/collection" element={<p>oke</p>} />
      <Route path="/collection/:id" element={<p>oke</p>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
