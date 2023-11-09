import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark'){
      setMode ('light')
      // using DOM
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#343a40'
    }
    else {
      setMode ('dark')
      document.body.style.backgroundColor = '#343a40'
      document.body.style.color = 'white'
    }
  }

  return (
    <>
  
      <Router>
      <Navbar title = "TextUtils" mode={mode} toggleMode = {toggleMode} />  
      <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter text here" mode={mode} />} />
          </Routes>
        </div>
      </Router>

    </> 
  ); 
}

export default App;
// by using props we can send text content we want to display 

