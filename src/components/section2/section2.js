import React, { useState } from "react";
import "./section2.css";

const Section2 = () => {
  const [list, setList] = useState([]);
  const [rowNumber, setRowNumber] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [songLink, setSongLink] = useState('');

  const handleRowNumberChange = (e) => setRowNumber(e.target.value);
  const handleSongTitleChange = (e) => setSongTitle(e.target.value);
  const handleArtistChange = (e) => setArtist(e.target.value);
  const handleSongLinkChange = (e) => setSongLink(e.target.value);

  const handleAddToList = (e) => {
    e.preventDefault();
    const newItem = { rowNumber, songTitle, artist, songLink };
    setList([...list, newItem]);
    setRowNumber('');
    setSongTitle('');
    setArtist('');
    setSongLink('');
  };

  return (
    <div className="playlist">
      <form onSubmit={handleAddToList} className="form">
        <div className="input-group">
          <label className="label-text">번호</label>
          <input
            className="input-field"
            type="text"
            placeholder="번호"
            value={rowNumber}
            onChange={handleRowNumberChange}
          />
        </div>
        <div className="input-group">
          <label className="label-text">노래 제목</label>
          <input
            className="input-field"
            type="text"
            placeholder="노래 제목"
            value={songTitle}
            onChange={handleSongTitleChange}
          />
        </div>
        <div className="input-group">
          <label className="label-text">가수</label>
          <input
            className="input-field"
            type="text"
            placeholder="가수"
            value={artist}
            onChange={handleArtistChange}
          />
        </div>
        <div className="input-group">
          <label className="label-text">노래 링크</label>
          <input
            className="input-field"
            type="text"
            placeholder="노래 링크"
            value={songLink}
            onChange={handleSongLinkChange}
          />
        </div>
        <button type="submit">추가</button>
      </form>

      <ul className="list">
        {list.map((item, index) => (
          <li key={index}>
            <span className="item">{item.rowNumber}</span>
            <span className="item">{item.songTitle}</span>
            <span className="item">{item.artist}</span>
            <span className="item">{item.songLink}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section2;
