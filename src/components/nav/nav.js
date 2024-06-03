import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; 

const Nav = () => {
  // 검색어 상태 설정
  const [searchQuery, setSearchQuery] = useState('');

  // 검색어 입력 시 상태 업데이트
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // 검색 실행
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // 여기에 검색 실행하는 코드를 추가하세요.
    console.log("검색어:", searchQuery);
    // 예시: 검색 실행 후 경로 변경
    // history.push(`/search?q=${searchQuery}`);
  };

  return (    
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="HiddenGemsPlaylist" className="logo-img" />
        </Link>
      </div>
      
      <ul className="navbar-menu">
        <li>
          <Link to="/" className="navbarMenu">홈</Link>
        </li>
        <li>
        <Link to= "/createpage" className="navbarMenu">플레이리스트 작성</Link>
        </li>
        <li>
          <Link to="/my-page" className="navbarMenu">마이페이지</Link> 
        </li>
      </ul>

      {/* 검색 입력 상자와 버튼 */}
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input 
          type="text" 
          placeholder="search" 
          value={searchQuery} 
          onChange={handleSearchInputChange} 
          className="search-input" 
        />
        <button type="submit" className="search-button">검색</button>
      </form>
      
    <div className="profile-share-button">
         <button color="black" type="submit" className="profile-share-button">프로필 공유</button>
    </div>
    <div className="sign-button">
         <button color="black" onClick={() => window.location.href="/login"} className="sign-button">SIGH IN/UP</button>
    </div>
    </nav>
  );
}

export default Nav;
