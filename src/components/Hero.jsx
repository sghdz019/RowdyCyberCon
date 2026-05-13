import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="badge">Fall 2026 &nbsp;·&nbsp; San Antonio, TX</div>
      <h1 className="hero-title">
        <span className="line1">Rowdy</span>
        <span className="line2">CyberCon</span>
      </h1>
      <p className="hero-sub">
        San Antonio's Premier Student-Led Cybersecurity Conference &amp; CTF &nbsp;—&nbsp; UTSA
      </p>
      <div className="hero-ctas">
        <a className="btn-primary" href="#sponsor">Sponsor Us</a>
        <a className="btn-secondary" href="#about">Learn More</a>
      </div>
      <div className="scroll-hint">scroll</div>
    </section>
  );
}
