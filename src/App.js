import React from 'react';
import Header from './components/Header';
import Howitwork from './components/Howitwork';
import About from './components/About';
import Agent from './components/Agent';
import Clothes from './components/Clothes';
import Hero from './components/Hero';
import HeroSection from './components/HeroSection';
import Carousel from './components/Carousel';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Howitwork/>
      <About/>
      <Agent/>
      <Clothes/>
      <Hero/>
      <HeroSection/>
      <Carousel/>
      <Contact/>
      </div>
  );
}

export default App;
