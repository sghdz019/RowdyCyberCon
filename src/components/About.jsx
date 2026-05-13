import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './About.css';

// ── Edit FAQ items here ─────────────────────────────────────────
const FAQ = [
  {
    q: 'Where is Rowdy CyberCon held?',
    a: 'In the San Pedro 1 & 2 buidlings at UTSA\'s downtown campus in San Antonio, TX.',
  },
  {
    q: 'Who can attend?',
    a: 'Any student, professional, or enthusiast.',
  },
  {
    q: 'What is a CTF?',
    a: 'Capture the Flag — a cybersecurity competition where teams solve challenges to find hidden "flags." Categories include ....',
  },
  {
    q: 'Is it free?',
    a: 'Yes. 100% free to attend, thanks to our amazing sponsors. Meals and merch are provided on-site.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className={`faq-q ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        {q}
      </div>
      <div className={`faq-a ${open ? 'open' : ''}`}>{a}</div>
    </div>
  );
}

export default function About() {
  const labelRef  = useReveal();
  const titleRef  = useReveal();
  const leftRef   = useReveal();
  const rightRef  = useReveal();

  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <div className="section-label reveal" ref={labelRef}>Who We Are</div>
        <h2 className="section-title reveal" ref={titleRef}>Defending the<br />Rowdy Frontier</h2>
        <div className="about-grid">
          <div className="reveal" ref={leftRef}>
            <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
              RowdyCyberCon is a one-day cybersecurity conference where San Antonio area-based 
              students can learn new skills, participate in challenges, and network! You'll also 
              have the opportunity to attend a plethora of different workshops and meet employers. 
            </p>
            <p className="section-desc" style={{ marginBottom: '2rem' }}>
              We unite students, professionals, and researchers for a
              day of workshops, talks, and competition, no matter what major
              or skill level, so go ahead and register today to secure your spot!
            </p>
            <div className="faq-list">
              {FAQ.map((item) => <FaqItem key={item.q} {...item} />)}
            </div>
          </div>

          <div className="about-visual reveal" ref={rightRef}>
            <div className="terminal-line"><span className="prompt">▶ </span><span className="cmd">whoami</span></div>
            <div className="terminal-line"><span className="out">rowdy_cybercon_2026</span></div>
            <div className="terminal-line mt"><span className="prompt">▶ </span><span className="cmd">cat mission.txt</span></div>
            <div className="terminal-line"><span className="out">Building SA's cyber community</span></div>
            <div className="terminal-line"><span className="out">one flag at a time.</span></div>
            <div className="terminal-line mt"><span className="prompt">▶ </span><span className="cmd">date</span></div>
            <div className="terminal-line"><span className="out">Fall 2026</span></div>
            <div className="terminal-line mt"><span className="prompt">▶ </span><span className="cmd">nmap -sV utsa.edu</span></div>
            <div className="terminal-line"><span className="out">PORT     STATE  SERVICE</span></div>
            <div className="terminal-line"><span className="out">443/tcp  open   https</span></div>
            <div className="terminal-line"><span className="out">22/tcp   open   ssh</span></div>
            <div className="terminal-line mt"><span className="prompt">▶ </span><span className="cmd">./register_sponsor.sh</span></div>
            <div className="terminal-line"><span className="prompt">▶ </span><span className="terminal-cursor" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
