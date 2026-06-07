import './Experience.css';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Invensis Pvt Ltd',
    period: 'Jan 2026 – May 2026',
    location: 'Bengaluru, India',
    bullets: [
      'Worked on full-stack web development tasks using industry-standard tools and technologies.',
      'Leveraged AI tools such as Claude AI and ChatGPT to accelerate development, debug code, and improve overall productivity.',
      'Collaborated with the development team to build and maintain software features for client projects.',
      'Gained practical experience in SDLC, code reviews, and agile workflows.',
    ],
    tech: ['ReactJS', 'Node.js', 'Claude AI', 'ChatGPT', 'Agile'],
  },
];

const education = [
  {
    degree: 'B.E. Computer Science & Engineering',
    institution: 'Mangalore Institute of Technology & Engineering',
    period: '2022 – 2026',
    detail: 'CGPA: 7.81',
    icon: '🎓',
    highlight: true,
  },
  {
    degree: 'Senior Secondary (12th) — DPUE',
    institution: 'Pre-University Education Board',
    period: '2020 – 2021',
    detail: '85%',
    icon: '📚',
    highlight: false,
  },
  {
    degree: 'SSLC — KSEEB',
    institution: 'Karnataka Secondary Education Board',
    period: '2019 – 2020',
    detail: '89%',
    icon: '📖',
    highlight: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="section-title">Experience & <span>Education</span></h2>

        <div className="experience__layout">
          {/* Work Experience */}
          <div>
            <h3 className="experience__sub-heading">Work Experience</h3>
            {experiences.map(exp => (
              <div key={exp.role} className="experience__card card">
                <div className="experience__card-header">
                  <div>
                    <h4 className="experience__role">{exp.role}</h4>
                    <p className="experience__company">{exp.company}</p>
                  </div>
                  <div className="experience__meta">
                    <span className="experience__period">{exp.period}</span>
                    <span className="experience__location">{exp.location}</span>
                  </div>
                </div>
                <ul className="experience__bullets">
                  {exp.bullets.map(b => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="experience__tech">
                  {exp.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Resume Download */}
            <div className="experience__resume card">
              <div className="experience__resume-left">
                <span className="experience__resume-icon">📄</span>
                <div>
                  <p className="experience__resume-title">Resume / CV</p>
                  <p className="experience__resume-sub">Download my latest resume</p>
                </div>
              </div>
              <a
                href="/Nuthana_HS_Resume.pdf"
                download="Nuthana_HS_Resume.pdf"
                className="btn btn-primary experience__resume-btn"
              >
                ↓ Download
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="experience__sub-heading">Education</h3>
            <div className="experience__edu-list">
              {education.map(edu => (
                <div
                  key={edu.degree}
                  className={`experience__edu card ${edu.highlight ? 'experience__edu--highlight' : ''}`}
                >
                  <div className="experience__edu-icon">{edu.icon}</div>
                  <div className="experience__edu-body">
                    <p className="experience__edu-degree">{edu.degree}</p>
                    <p className="experience__edu-inst">{edu.institution}</p>
                    <div className="experience__edu-footer">
                      <span className="experience__period">{edu.period}</span>
                      <span className="experience__edu-grade">{edu.detail}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
