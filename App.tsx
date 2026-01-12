import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <About />
        <Stats />
        <Services />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;