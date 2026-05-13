import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Stats.css';

// ── Edit these to update your numbers ──────────────────────────
const STATS = [
  { num: '300+',  label: 'Attendees Expected',      color: ''      },
  { num: '12+',   label: 'Universities Represented', color: 'cyan'  },
  { num: '24',    label: 'Hour CTF Competition',     color: 'green' },
  { num: '8+',    label: 'Industry Speakers',        color: ''      },
  { num: '$5k+',  label: 'In Prizes',                color: 'cyan'  },
  { num: '100%',  label: 'Free to Attend',           color: 'green' },
];

export default function Stats() {
  const labelRef  = useReveal();
  const titleRef  = useReveal();
  const descRef   = useReveal();
  const gridRef   = useReveal();

  return (
    <section id="stats" className="stats-section">
      <div className="section-inner">
        <div className="section-label" ref={labelRef}>Impact Metrics</div>
        <h2 className="section-title" ref={titleRef}>By the Numbers</h2>
        <p className="section-desc" ref={descRef}>
          Rowdy CyberCon brings together the best cybersecurity minds in South Texas.
          Here's what we've built — and where we're going.
        </p>
        <div className="stats-grid reveal" ref={gridRef}>
          {STATS.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className={`stat-num ${s.color}`}>{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
