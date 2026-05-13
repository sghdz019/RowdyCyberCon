import React from 'react';
import './Sponsors.css';

// ── Replace with real sponsor names or logo <img> tags ──────────
const SPONSORS = [
  'Company 1',
  'Sponsor Slot',
  'Company 2',
  'Sponsor Slot',
  'Company 3',
  'Sponsor Slot',
];

export default function Sponsors() {
  // Duplicate the list so the marquee loops seamlessly
  const items = [...SPONSORS, ...SPONSORS];

  return (
    <section id="sponsors" className="sponsors-section">
      <p className="sponsors-label">Our Sponsors &amp; Partners</p>
      <div className="marquee-wrap">
        <div className="marquee">
          {items.map((name, i) => (
            <React.Fragment key={i}>
              <span className="marquee-item">{name}</span>
              <span className="marquee-sep">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
