import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">
          <span style={{ color: 'var(--accent)' }}>&lt;</span>
          NHS
          <span style={{ color: 'var(--accent)' }}>/&gt;</span>
        </span>
        <p className="footer__copy">
          Designed & built by Nuthana H S · 2026
        </p>
        <div className="footer__links">
          <a href="https://github.com/Nuthana-HS" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/nuthana-h-s-ab7972253" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:nuthanahs86@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
