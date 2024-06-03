/* App.js */

//import React, { Fragment } from 'react';
import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

//import Header from "./components/header/header";
//import Nav from "./components/nav/nav";
//import Footer from "./components/footer/footer";
//import Section1 from "./components/section1/section1";
//import Section2 from "./components/section2/section2";
//import Section3 from "./components/section3/section3";
//import Section4 from "./components/section4/section4";
//import Section5 from "./components/section5/section5";
//import Page1 from "./pagees/Page1";
import Home from "./components/home/home";
import Createpage from "./components/createpage/createpage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/createpage" element={<Createpage/>} />
      </Routes>
    </div>
  );
}

export default App;