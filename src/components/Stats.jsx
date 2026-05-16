import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Stats.css';

// ── Edit these to update your numbers ──────────────────────────
const STATS = [
  { num: '250+',  label: 'Attendees',                color: ''      },
  { num: '9',     label: 'Sponsors',                 color: 'cyan'  },
  { num: '24',    label: 'Hour CTF Competition',     color: 'green' },
  { num: '12',    label: 'Workshops',                color: ''      },
  { num: '15',    label: 'Organizers',               color: 'cyan'  },
  { num: '100%',  label: 'Free to Attend',           color: 'green' },
  { num: '25',    label: 'Volunteers',               color:'cyan'}
];

export default function Stats() {
  const labelRef  = useReveal();
  const titleRef  = useReveal();
  const descRef   = useReveal();
  const gridRef   = useReveal();

  return (
    <section id="stats" className="stats-section">
      <div className="section-inner">
        <div className="section-label" ref={labelRef}>Spring 2026 Impact Metrics</div>
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
