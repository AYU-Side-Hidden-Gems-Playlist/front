import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "sideproject/src/components/nav/nav";
import Section3 from "sideproject/src/components/section3/section3"; // 섹션2 컴포넌트 import
import Footer from "sideproject/src/components/footer/footer";
function Login() {
    return (
        <div>
            <Nav /> {/* 네비게이션 바 호출 */}
            <Section3 /> {/* 섹션2 호출 */}
            <Footer />
        </div>
    );
}

export default Login;