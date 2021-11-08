import React from 'react'
import './App.css';
import {Routes, Route} from "react-router-dom";
import Carddetails from './components/CardDetails/Carddetails';
import Home from './components/home/home';

const App = () => {

  return (
  
    <div className="app">
    <Routes>
    <Route exact path="/" element={<Home/>}/>
      <Route path="/carddetails" element={<Carddetails/>}/>
    </Routes>
    </div>
 
   
  )
}

export default App
