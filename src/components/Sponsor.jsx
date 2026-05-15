import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Sponsor.css';

// ── Edit tiers here ─────────────────────────────────────────────
const TIERS = [
  {
    badge: 'bronze',
    label: 'Protector',
    price: '$750',
    perks: [
      'Recruiting Booth',
      'Logo on Website',
      'Ceremony Spotlight'
    ],
    featured: true,
  },
  {
    badge: 'silver',
    label: 'Sentinel',
    price: '$1,500',
    perks: [
      'Everything in Protector',
      'Social Media Posts',
      'Logo on Marketing Materials',
      "Logo on T-Shirt"
    ],
    featured: true,
  },
  {
    badge: 'gold',
    label: 'Guardian',
    price: '$3,500',
    perks: [
      'Everything in Sentinal',
      'Prominent Logo Placement',
      'Resume Book Access'
    ],
    featured: true,
  },
  {
    badge: 'platinum',
    label: 'Defender',
    price: '$5,000',
    perks: [
      'Everything in Guardian',
      'Thank You Tribute',
      'Photo Book',
      'Year Round Updates'
    ],
    featured: true,
  },
];

// ── Change this email ───────────────────────────────────────────
const CONTACT_EMAIL = 'pr@rowdycybercon.org';

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
            Interested in something different - reach out and we'll create a custom package!
          </p>
          <a className="btn-primary" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </section>
  );
}
