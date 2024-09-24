import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from '../src/pages/navbar/navbar'; // Adjust the path as necessary
import Home from '../src/pages/home'; // Create this component
import Projects from '../src/pages/project'; // Create this component
import Certifications from '../src/pages/certifications'; // Create this component
import HeroBanner from './components/banner/banner';
import Footer from './components/footer/footer';


function App() {
  return (
    <div>'
      <Router>
        <div className='container'>
          <Navbar />
          <HeroBanner /></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />

        </Routes>
        <div>
          <Footer />
        </div>
      </Router>

    </div>

  );
}

export default App;
