import React from 'react';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Stats      from './components/Stats';
import About      from './components/About';
import Highlights from './components/Highlights';
import Tracks     from './components/Tracks';
import Sponsor    from './components/Sponsor';
import Team       from './components/Team';
import Sponsors   from './components/Sponsors';
import Footer     from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Highlights />
      <Tracks />
      <Sponsor />
      <Team />
      <Sponsors />
      <Footer />
    </>
  );
}
