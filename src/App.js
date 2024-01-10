import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Classic from './components/Classic/Classic';

import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/classic' element={<Classic />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
