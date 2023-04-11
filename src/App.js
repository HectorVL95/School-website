import React from 'react'
import { useEffect } from 'react';
import './App.css';
import HeaderNav from './components/HeaderNav.jsx';
import Main from './components/Main';
import WebFont from 'webfontloader';
import Footer from './components/Footer.jsx'



function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Teko', 'sans-serif']
      }
    });
   }, []);
  

  return (
    <div className="App">
        <HeaderNav/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
