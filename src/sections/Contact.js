import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('nuthanahs86@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's <span>connect</span></h2>

        <div className="contact__layout">
          <div className="contact__left">
            <p className="contact__intro">
              I'm actively looking for full-time software engineering opportunities.
              Whether it's a role, a collaboration, or just a chat about tech —
              my inbox is always open.
            </p>

            <div className="contact__cards">
              <div className="contact__card card">
                <div className="contact__card-icon">📧</div>
                <div>
                  <p className="contact__card-label">Email</p>
                  <p className="contact__card-value">nuthanahs86@gmail.com</p>
                </div>
                <button
                  className="contact__copy-btn"
                  onClick={copyEmail}
                  title="Copy email"
                >
                  {copied ? '✓' : '⎘'}
                </button>
              </div>

              <a
                href="https://www.linkedin.com/in/nuthana-h-s-ab7972253"
                target="_blank"
                rel="noreferrer"
                className="contact__card card"
              >
                <div className="contact__card-icon">💼</div>
                <div>
                  <p className="contact__card-label">LinkedIn</p>
                  <p className="contact__card-value">nuthana-h-s-ab7972253</p>
                </div>
                <span className="contact__card-arrow">↗</span>
              </a>

              <a
                href="https://github.com/Nuthana-HS"
                target="_blank"
                rel="noreferrer"
                className="contact__card card"
              >
                <div className="contact__card-icon">🐙</div>
                <div>
                  <p className="contact__card-label">GitHub</p>
                  <p className="contact__card-value">github.com/Nuthana-HS</p>
                </div>
                <span className="contact__card-arrow">↗</span>
              </a>
            </div>
          </div>

          <div className="contact__right">
            <div className="contact__cta card">
              <h3 className="contact__cta-heading">Open to opportunities</h3>
              <p className="contact__cta-text">
                Looking for roles in full-stack development, frontend engineering,
                or technical support. Available immediately.
              </p>
              <a
                href="mailto:nuthanahs86@gmail.com"
                className="btn btn-primary contact__btn"
              >
                Send me an email →
              </a>
              <div className="contact__availability">
                <span className="contact__dot" />
                Available for full-time roles
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
