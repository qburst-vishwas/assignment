import React from 'react'
import './App.css';
import {Routes, Route} from "react-router-dom";
import Carddetails from './components/CardDetails/Carddetails';
import Carditems from './components/Card/Carditems';
import Home from './components/home/home';
import { Provider } from 'react-redux'
import store from './store/index';


const App = () => {

  return (
    <Provider store={store}>
    <div className="app">
    <Routes>
    <Carditems/>
    <Route exact path="/" element={<Home/>}/>
      <Route path="/carddetails" element={<Carddetails/>}/>
    </Routes>
    </div>
    </Provider>
 
   
  )
}

export default App
