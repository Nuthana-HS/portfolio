import './Certifications.css';

const certs = [
  {
    name: 'Claude with the Anthropic API',
    issuer: 'Anthropic',
    year: '2026',
    icon: '🤖',
    color: 'blue',
    link: null,
  },
  {
    name: 'Oracle Cloud Infrastructure Data Science Professional',
    issuer: 'Oracle',
    year: '2025',
    icon: '☁️',
    color: 'orange',
    link: null,
  },
  {
    name: 'Salesforce Developer Catalyst',
    issuer: 'Salesforce',
    year: '2024',
    icon: '⚡',
    color: 'purple',
    link: null,
  },
  {
    name: 'Salesforce Trailhead Badges',
    issuer: 'Salesforce',
    year: '2025',
    icon: '🏆',
    color: 'green',
    link: 'https://www.salesforce.com/trailblazer/lr7a83owwconw28sxm',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <p className="section-label">Credentials</p>
        <h2 className="section-title">Certifications & <span>Badges</span></h2>
        <div className="certs__grid">
          {certs.map(cert => (
            <div key={cert.name} className={`certs__card card certs__card--${cert.color}`}>
              <div className="certs__icon-wrap">
                <span className="certs__icon">{cert.icon}</span>
              </div>
              <div className="certs__body">
                <h3 className="certs__name">{cert.name}</h3>
                <p className="certs__issuer">{cert.issuer}</p>
                <div className="certs__footer">
                  <span className="certs__year">{cert.year}</span>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noreferrer" className="certs__link">
                      View ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
