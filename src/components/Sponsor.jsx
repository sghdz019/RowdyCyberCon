import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Sponsor.css';

// ── Edit tiers here ─────────────────────────────────────────────
const TIERS = [
  {
    badge: 'bronze',
    label: 'Bronze',
    price: '$$$',
    perks: [
      'Everything...'
    ],
    featured: false,
  },
  {
    badge: 'silver',
    label: 'Silver',
    price: '$$$',
    perks: [
      'Everything in Bronze'
    ],
    featured: false,
  },
  {
    badge: 'gold',
    label: 'Gold',
    price: '$$$',
    perks: [
      'Everything in Silver'
    ],
    featured: true,
  },
  {
    badge: 'platinum',
    label: 'Platinum',
    price: '$$$$',
    perks: [
      'Everything in Gold'
    ],
    featured: false,
  },
];

// ── Change this email ───────────────────────────────────────────
const CONTACT_EMAIL = 'sponsor@rowdycybercon.com';

export default function Sponsor() {
  const labelRef = useReveal();
  const titleRef = useReveal();
  const descRef  = useReveal();
  const gridRef  = useReveal();
  const ctaRef   = useReveal();

  return (
    <section id="sponsor" className="sponsor-section">
      <div className="section-inner">
        <div className="section-label reveal" ref={labelRef}>Become a Partner</div>
        <h2 className="section-title reveal" ref={titleRef}>Sponsorship Tiers</h2>
        <p className="section-desc reveal" ref={descRef}>
          Your sponsorship directly funds prizes, meals, venue, and programming — and puts
          your brand in front of hundreds of motivated cybersecurity students actively seeking employers.
        </p>

        <div className="tiers-grid reveal" ref={gridRef}>
          {TIERS.map((t) => (
            <div className={`tier-card ${t.featured ? 'featured' : ''}`} key={t.label}>
              <div className={`tier-badge ${t.badge}`}>{t.label}</div>
              <div className="tier-price">{t.price}<span>/tier</span></div>
              <ul className="tier-perks">
                {t.perks.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a className="tier-cta" href={`mailto:${CONTACT_EMAIL}`}>Contact Us</a>
            </div>
          ))}
        </div>

        <div className="sponsor-cta reveal" ref={ctaRef}>
          <p className="sponsor-note">
            Interested in something different - reach out and we'll get started on something great!
          </p>
          <a className="btn-primary" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </section>
  );
}
