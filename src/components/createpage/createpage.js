import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "sideproject/src/components/nav/nav";
import Section2 from "sideproject/src/components/section2/section2"; // 섹션2 컴포넌트 import
import Footer from "sideproject/src/components/footer/footer";
import './createpage.css'; // CSS 파일 import

function CreatePage() {
    return (
        <div>
            <Nav /> {/* 네비게이션 바 호출 */}
            <div className="content-container">
                <img src="https://i.namu.wiki/i/sJP57jG46ZMxtguzyqmOl-xyOqW6yteOiTfiKzlLkJFrO0HmDQh_DVdnTJp_zo7MWkjVbpFHDwnJJIcWrq-ViQ.webp" alt="" />
                <div className="footer-line"></div>
                <Section2 /> {/* 섹션2 호출 */}
            </div>
            <Footer />
        </div>
    );
}

export default CreatePage;
