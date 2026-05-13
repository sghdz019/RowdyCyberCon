import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Team.css';

// ── Edit team members here ──────────────────────────────────────
// initials: eventually to be replaced with headshots
// name: full display name
// role: position title
export const TEAM = [
  { initials: 'DD', name: 'Drew',       role: 'RCC Co-Director'       },
  { initials: 'CM', name: 'Carlington', role: 'RCC Co-Director'       },
  { initials: 'SR', name: 'Spencer',    role: 'Logistics'             },
  { initials: 'GR', name: 'Gizelle',    role: 'Media & Comms'         },
  { initials: 'A',  name: 'Aidan',      role: 'Competitions Co-Lead'  },
  { initials: 'N',  name: 'Nat',        role: 'Competitions Co-Lead'  }
];

export default function Team() {
  const labelRef = useReveal();
  const titleRef = useReveal();
  const gridRef  = useReveal();

  return (
    <section id="team" className="team-section">
      <div className="section-inner">
        <div className="section-label reveal" ref={labelRef}>The Organizers</div>
        <h2 className="section-title reveal" ref={titleRef}>Meet the Team</h2>
        <div className="team-grid reveal" ref={gridRef}>
          {TEAM.map((m) => (
            <div className="team-card" key={m.name}>
              <div className="team-avatar">{m.initials}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
