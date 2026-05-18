import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <a className="nav-logo" href="#hero">
          Rowdy<span>CyberCon</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#highlights">Highlights</a></li>
          <li><a href="#tracks">Tracks</a></li>
          <li><a href="#sponsor">Sponsor Us</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
        <a className="nav-cta" href="https://www.rowdycybercon.org/" target="_blank" rel="noreferrer">
          Register
        </a>
        <div className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
          <span /><span /><span />
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-nav open" onClick={() => setMenuOpen(false)}>
          <div onClick={e => e.stopPropagation()} style={{ display: 'contents' }}>
            <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
            <a href="#about"      onClick={() => setMenuOpen(false)}>About</a>
            <a href="#highlights" onClick={() => setMenuOpen(false)}>Highlights</a>
            <a href="#tracks"     onClick={() => setMenuOpen(false)}>Tracks</a>
            <a href="#sponsor"    onClick={() => setMenuOpen(false)}>Sponsor</a>
            <a href="#team"       onClick={() => setMenuOpen(false)}>Team</a>
            <a href="https://www.rowdycybercon.org/" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Register</a>
          </div>
        </div>
      )}
    </>
  );
}
