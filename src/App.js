import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
    } else {
      setMode('light');
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <TextForm heading="Enter the text to Analyze"/>
    {/* <About/> */}
    </div>
    </>
    
  );
}

export default App;
