import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Web from './components/Web';
import Page1 from './components/Page1';
import IndividualRegistration from './components/Individualrej.js';
import GroupRegistration from './components/Groupid.js';
import GeneratedId from './components/Generatedid.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/page1" element={<Page1 />} />
         <Route path="/individual-registration" element={<IndividualRegistration />} />
          <Route path="/group-registration" element={<GroupRegistration />} />
         <Route path="/generated-id" element={<GeneratedId />} /> 
      </Routes>
    </Router>
  );
}

export default App;
