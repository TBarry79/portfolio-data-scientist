import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectDetail from './components/MyWork/ProjectDetail';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <MyWork />
            <Contact />
            <Footer />
          </>
        } />
        {/* Route dynamique pour afficher les détails des projets */}
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
};

export default App;
