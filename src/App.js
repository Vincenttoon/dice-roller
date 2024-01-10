import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Classic from './components/Classic/Classic';
import D20 from './components/D20/D20';
import D12 from './components/D12/D12';

import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/classic' element={<Classic />} />
          <Route path='/d20' element={<D20 />} />
          <Route path='/d12' element={<D12 />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
