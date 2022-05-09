import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";


const App = () => {
  return (
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
  );
};


export default App;
