import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import Header from './components/navbar';
import Hero from './components/hero';
import Hero2 from './components/hero2';
import About from './components/about';
import Skills from "./components/skillsInfo";
import Footer from './components/footer';

function App() {
  return (
    <div className="App fs-6 ">
    
    <Header/>
    <Hero/>
    <About/>
    <Skills/>
    <Footer/>

    </div>
  );
}

export default App;
