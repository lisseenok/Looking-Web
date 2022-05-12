import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8Yo71IK1kf8Nk8GxD7hM4oBW5Q7gwZEU",
    authDomain: "looking-2f220.firebaseapp.com",
    databaseURL: "https://looking-2f220-default-rtdb.firebaseio.com",
    projectId: "looking-2f220",
    storageBucket: "looking-2f220.appspot.com",
    messagingSenderId: "780871056760",
    appId: "1:780871056760:web:01e74b4b4ff3a10f7e9c8d",
    measurementId: "G-V121L635KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  return (
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
  );
};


export default App;
