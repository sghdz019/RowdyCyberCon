import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Tracks.css';

// Add more Tracks from Competitions Team
const TRACKS = [
  {
    num: '01',
    title: 'Web Exploitation',
    desc: 'SQL injection, XSS, SSRF, and beyond. Attack real-world web vulnerabilities in controlled CTF environments.',
  },
  {
    num: '02',
    title: 'Cryptography',
    desc: 'Break ciphers, crack RSA, and exploit flawed implementations of modern cryptographic protocols.',
  },
  {
    num: '03',
    title: 'Binary & Pwn',
    desc: 'Buffer overflows, ROP chains, heap exploitation. Get shell access and prove your low-level skills.',
  },
  {
    num: '04',
    title: 'Forensics & OSINT',
    desc: 'Recover deleted files, analyze network captures, and hunt for flags hidden in plain sight.',
  },
];

export default function Tracks() {
  const labelRef = useReveal();
  const titleRef = useReveal();
  const gridRef  = useReveal();

  return (
    <section id="tracks" className="tracks-section">
      <div className="section-inner">
        <div className="section-label reveal" ref={labelRef}>Competition Tracks</div>
        <h2 className="section-title reveal" ref={titleRef}>CTF Challenge Categories</h2>
        <div className="tracks-grid reveal" ref={gridRef}>
          {TRACKS.map((t) => (
            <div className="track-card" key={t.num}>
              <div className="track-num">{t.num} TRACK</div>
              <div className="track-title">{t.title}</div>
              <div className="track-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
