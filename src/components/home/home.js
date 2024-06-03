import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
//import './home.css';

import Header from "sideproject/src/components/header/header";
import Nav from "sideproject/src/components/nav/nav";
import Section1 from "sideproject/src/components/section1/section1";
import Footer from "sideproject/src/components/footer/footer";
function Home() {
  return (
   
    <div>
        <Nav />
        
        <h1 style={{ textAlign: 'center'}}>Hidden Gems Playlist</h1>
        <h4 style={{ textAlign: 'center', opacity: 0.6 }}>숨어서 듣는 명곡</h4>
        <Section1 />
        <Footer />
    </div>
  );
}

export default Home;
