import React from 'react';
import './Register.css';

const EVENT_URL = 'https://www.rowdycybercon.org/';

export default function Register() {
  return (
    <section id="register" className="register-section">
      <div className="register-inner">
        <p className="register-label">Fall 2026</p>
        <h2 className="register-title">Ready to Compete?</h2>
        <p className="register-desc">
          Registration is free and open to all students. Head to our event portal
          to sign up, form a team, and get updates as we get closer to the con.
        </p>
        <a className="btn-primary" href={EVENT_URL} target="_blank" rel="noreferrer">
          Register for the Event →
        </a>
      </div>
    </section>
  );
}