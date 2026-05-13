import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Highlights.css';

// ── Edit highlight cards here ───────────────────────────────────
const CARDS = [
  {
    icon: '🏆',
    title: 'Capture the Flag Competition',
    body: '24 hours. 50+ challenges. Teams from across Texas competing in web, pwn, crypto, forensics, and OSINT. Last year\'s winning team solved 42 challenges and walked away with top-tier prizes.',
    wide: true,
  },
  {
    icon: '🎙️',
    title: 'Keynotes & Talks',
    body: 'Hear from active CISOs, red team operators, and researchers on the frontlines of cybersecurity.',
  },
  {
    icon: '🛠️',
    title: 'Hands-on Workshops',
    body: 'From beginner Linux to advanced binary exploitation — workshops run all day for every skill level.',
  },
  {
    icon: '🤝',
    title: 'Networking & Recruiting',
    body: 'Direct access to 300+ students actively seeking internships and full-time roles in cybersecurity.',
  },
  {
    icon: '🎁',
    title: 'Merch, Food & Fun',
    body: 'Custom shirts, stickers, catered meals, and a few surprises. RCC takes care of its people.',
  },
];

export default function Highlights() {
  const labelRef = useReveal();
  const titleRef = useReveal();
  const gridRef  = useReveal();

  return (
    <section id="highlights" className="highlights-section">
      <div className="section-inner">
        <div className="section-label reveal" ref={labelRef}>Previous Year Highlights</div>
        <h2 className="section-title reveal" ref={titleRef}>What to Expect</h2>
        <div className="highlights-grid reveal" ref={gridRef}>
          {CARDS.map((c) => (
            <div className={`hl-card ${c.wide ? 'wide' : ''}`} key={c.title}>
              <div className="hl-icon">{c.icon}</div>
              <div className="hl-card-title">{c.title}</div>
              <div className="hl-card-body">{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
