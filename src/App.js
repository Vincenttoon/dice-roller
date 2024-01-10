import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Classic from './components/Classic/Classic';
import D20 from './components/D20/D20';
import D12 from './components/D12/D12';
import D10 from './components/D10/D10';
import D8 from './components/D8/D8';
import D6 from './components/D6/D6';
import D4 from './components/D4/D4';

import ComingSoon from './components/ComingSoon';

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
          <Route path='/d10' element={<D10 />} />
          <Route path='/d8' element={<D8 />} />
          <Route path='/d6' element={<D6 />} />
          <Route path='/d4' element={<D4 />} />
          <Route path='/coming-soon' element={<ComingSoon />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
