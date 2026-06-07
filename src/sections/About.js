import './About.css';
import profilePhoto from '../assets/nuthana_photo.jpeg';

const stats = [
  { value: '3+', label: 'Projects built' },
  { value: '5mo', label: 'Internship' },
  { value: '4', label: 'Certifications' },
  { value: '7.81', label: 'CGPA' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section-label">About</p>
        <div className="about__grid">
          <div className="about__text">
            <h2 className="about__heading">
              Turning ideas into<br />
              <span style={{ color: 'var(--accent)' }}>working products</span>
            </h2>
            <p className="about__para">
              I'm a Computer Science & Engineering graduate from Mangalore Institute of Technology & Engineering,
              with hands-on experience building full-stack web applications. During my internship at
              <strong> Invensis Pvt Ltd</strong>, I worked on real client projects using ReactJS, Node.js, and AI tools
              in an agile team environment.
            </p>
            <p className="about__para">
              I'm passionate about clean code, intuitive UX, and using AI tools effectively to ship faster.
              Currently seeking a software engineering role where I can contribute and grow.
            </p>
            <div className="about__links">
              <a
                href="https://github.com/Nuthana-HS"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                GitHub Profile ↗
              </a>
              <a
                href="https://www.linkedin.com/in/nuthana-h-s-ab7972253"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="about__right">
            <div className="about__photo-wrap">
              <img
                src={profilePhoto}
                alt="Nuthana H S"
                className="about__photo"
              />
              <div className="about__photo-badge">
                <span className="about__photo-dot" />
                Open to work
              </div>
            </div>

            <div className="about__stats">
              {stats.map(s => (
                <div key={s.label} className="about__stat card">
                  <span className="about__stat-value">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="about__info card">
              <div className="about__info-row">
                <span className="about__info-icon">📍</span>
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="about__info-row">
                <span className="about__info-icon">🎓</span>
                <span>BE in Computer Science & Engineering</span>
              </div>
              <div className="about__info-row">
                <span className="about__info-icon">💼</span>
                <span>Open to full-time opportunities</span>
              </div>
              <div className="about__info-row">
                <span className="about__info-icon">📧</span>
                <a href="mailto:nuthanahs86@gmail.com">nuthanahs86@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
