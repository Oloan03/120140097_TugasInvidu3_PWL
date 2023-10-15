import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <Router>
      <div>
        
        <NavBar />
        <Routes>
          <Route path='Home' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
