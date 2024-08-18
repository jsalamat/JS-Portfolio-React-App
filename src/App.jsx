import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";
import React from 'react';
import Header2 from './components/navbar';
import Header from './components/mainnav';
import Hero from './components/hero';
import Hero2 from './components/hero2';
import About from './components/about';
import Skills from './components/skillsInfo';
import SlideSkills from './components/skillsSlide';
import FeaturesInfo from './components/featureInfo';
import TestA from './components/testReact';
import TestB from './components/Testcode';
import TestC from './components/Testif';
import Ctalinks from './components/ctalinks';
import Footer from './components/footer';


function App() {
  return (
    <div className="App fs-6 ">
    
    
    <Header/>
    {/* <Header2/> */}
    {/* <Hero/> */}
    <Hero2/>
    <About/>
    {/* <Skills/> */}
    <SlideSkills/>
    <FeaturesInfo/>
    {/* <TestA/>
    <TestB/> 
    <TestC/> */}
    <Ctalinks/>
    <Footer/>

    </div>
  );
}

export default App;
