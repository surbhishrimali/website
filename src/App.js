import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Web from './components/Web';
import Page1 from './components/Page1';
import IndividualRegistration from './components/Individualrej.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/page1" element={<Page1 />} />
         <Route path="/individual-registration" element={<IndividualRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
