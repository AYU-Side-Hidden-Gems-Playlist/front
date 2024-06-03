import React, { Component } from "react";
//import Container from 'react-bootstrap/Container';
import { Container, Row, Col } from "react-bootstrap";
//import { Link, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./section3.css";
class Section3 extends Component {
    render() {
        return (
            <div className="section3">
                <img src="/logo2.png" alt="HiddenGemsPlaylist" className="logo2-img" />
                <h1>간편하게 로그인하고</h1>
                <h2>다양한 서비스를 이용해보세요.</h2>
                <img src="/kakao.png" alt="login" className="kakao-img" />
            </div>
        );
    }
}

export default Section3;