import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        Rowdy<span className="cyan">CyberCon</span>{' '}
        <span className="dim">Fall 2026</span>
      </div>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#sponsor">Sponsor</a>
        <a href="mailto:sponsor@rowdycybercon.com">Contact</a>
      </div>
      <div className="footer-meta">
        © 2026 Rowdy CyberCon · UTSA · San Antonio, TX
      </div>
    </footer>
  );
}
