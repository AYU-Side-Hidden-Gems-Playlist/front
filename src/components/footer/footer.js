import React, {Component} from "react";
import './footer.css'; 
class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-line"></div> {/* 선 추가 */}
                <img src="/logo1.png" alt="HiddenGemsPlaylist" className="logo1-img" />
                <img src="/insta.png" alt="instagram" className="insta-img" />
            </div>
        );
    }
}

export default footer;