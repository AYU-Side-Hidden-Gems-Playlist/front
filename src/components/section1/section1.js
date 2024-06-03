import React, { Component } from "react";
//import Container from 'react-bootstrap/Container';
import { Container, Row, Col } from "react-bootstrap";
//import { Link, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./section1.css";


class Section1 extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="item">
            <Link to="playlist/page1">
              <img src="https://i.ytimg.com/vi/rNpSYxIVWOo/maxresdefault.jpg" alt="플레이리스트1" />
              <div className="TextBox">
                <p>홍대병 걸린 플리</p>
                <p style={{ opacity: 0.6 }}>홍대병 걸린 플리</p>
              </div>
            </Link>
          </Col>
          <Col className="item">
            <Link to="playlist/page2" style={{ textDecoration: "none" }}>
              <img src="https://lh3.googleusercontent.com/proxy/z5wkx_C-P1FQ4P36kZFZ1c8koJfH1oF7pkQ2rm4DQuw2fYlzLAmfB8Xh_Hln3XYPFbeN0f_vwqa2X8xL54XnDeyglA5oQenmwhDoEk60Of5prQXYwAuMyqSWbdLZ" alt="플레이리스트2" />
              <div className="TextBox">
                <p>홍대병 걸린 플리</p>
                <p style={{ opacity: 0.6 }}>홍대병 걸린 플리</p>
              </div>
            </Link>
          </Col>
        </Row>
        
        <Row>
          <Col className="item">
            <Link to="playlist/page3" style={{ textDecoration: "none" }}>
              <img src="https://i.namu.wiki/i/1K2dF7bwJBUmt6lFN3wssCBLpRQ_ORuu5PeIODn4_UvLqVNevr66XJaXyyjfnzBAy8EKX-tJtJZctJsI1iF6nw.gif" alt="" />
              <div className="TextBox">
                <p>홍대병 걸린 플리</p>
                <p style={{ opacity: 0.6 }}>홍대병 걸린 플리</p>
              </div>
            </Link>
          </Col>
          <Col className="item">
            <Link to="playlist/page4" style={{ textDecoration: "none" }}>
              <img src="https://i.namu.wiki/i/sJP57jG46ZMxtguzyqmOl-xyOqW6yteOiTfiKzlLkJFrO0HmDQh_DVdnTJp_zo7MWkjVbpFHDwnJJIcWrq-ViQ.webp" alt="" />
              <div className="TextBox">
                <p>홍대병 걸린 플리</p>
                <p style={{ opacity: 0.6 }}>홍대병 걸린 플리</p>
              </div>
            </Link>
          </Col>
        </Row>

        <div className="sc1">
          <hr />
        </div>

        <Row claseName="item1">
          <h2>추천 재생목록</h2>
        </Row>


        <Row>
          <Col className="item2">
            <Link to="playlist/page5" style={{ textDecoration: "none" }}>
              <img src="https://i.ytimg.com/vi/rNpSYxIVWOo/maxresdefault.jpg" alt="플레이리스트1" />
              <div className="TextBox">
                <p>홍대병 걸린 플리</p>
                <p style={{ opacity: 0.6 }}>홍대병 걸린 플리</p>
              </div>
            </Link>
          </Col>
          <Col className="item2">
            <Link to="playlist/page6" style={{ textDecoration: "none" }}>
              <img src="https://lh3.googleusercontent.com/proxy/z5wkx_C-P1FQ4P36kZFZ1c8koJfH1oF7pkQ2rm4DQuw2fYlzLAmfB8Xh_Hln3XYPFbeN0f_vwqa2X8xL54XnDeyglA5oQenmwhDoEk60Of5prQXYwAuMyqSWbdLZ" alt="" />
              <div className="TextBox">
                <p>홍대병 걸린 플리</p>
                <p style={{ opacity: 0.6 }}>홍대병 걸린 플리</p>
              </div>
            </Link>
          </Col>
          <Col className="item2">
            <Link to="playlist/page7" style={{ textDecoration: "none" }}>
              <img src="https://i.namu.wiki/i/1K2dF7bwJBUmt6lFN3wssCBLpRQ_ORuu5PeIODn4_UvLqVNevr66XJaXyyjfnzBAy8EKX-tJtJZctJsI1iF6nw.gif" alt="" />
              <div className="TextBox">
                <p>홍대병 걸린 플리</p>
                <p style={{ opacity: 0.6 }}>홍대병 걸린 플리</p>
              </div>
            </Link>
          </Col>
          <Col className="item2">
            <Link to="playlist/page7" style={{ textDecoration: "none" }}>
              <img src="https://i.namu.wiki/i/sJP57jG46ZMxtguzyqmOl-xyOqW6yteOiTfiKzlLkJFrO0HmDQh_DVdnTJp_zo7MWkjVbpFHDwnJJIcWrq-ViQ.webp" alt="" />
              <div className="TextBox">
               <p>홍대병 걸린 플리</p>
               <p style={{ opacity: 0.6 }}>홍대병 걸린 플리</p>
             </div>
             </Link>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default Section1;