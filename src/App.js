import React from 'react';

import Landing from './components/landing/landing';
import About from './components/about/about';
import Porfolio from './components/portfolio/portfolio';
import Footer from './components/footer/footer';

import './App.css';

function App() {
  return (
    <div className="app">
      <Landing/>
      <About/>
      <Porfolio/>
      <Footer/>
    </div>
  );
}

export default App;
