import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from '../src/pages/navbar/navbar'; // Adjust the path as necessary
import Home from '../src/pages/home'; // Create this component
import Projects from '../src/pages/project'; // Create this component
import Certifications from '../src/pages/certifications'; // Create this component
import Contact from '../src/pages/contact'; // Create this component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
