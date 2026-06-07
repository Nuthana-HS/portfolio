import './Projects.css';

const projects = [
  {
    title: 'Resume Analyzer',
    status: 'Ongoing',
    desc: 'AI-powered resume skill extraction web app that parses resumes and automatically identifies key skills using AI APIs. Continuously improving UI/UX and extraction accuracy.',
    tech: ['ReactJS', 'Node.js', 'AI APIs', 'REST'],
    github: 'https://github.com/Nuthana-HS/resume-analyser',
    demo: null,
    highlight: true,
  },
  {
    title: 'Diabetes Tracker App',
    status: 'Completed',
    desc: 'Full-stack health tracking system for logging and monitoring diabetes-related metrics in real time. Features a responsive dashboard with user authentication and secure session management.',
    tech: ['ReactJS', 'Node.js', 'PostgreSQL', 'REST APIs'],
    github: 'https://github.com/Nuthana-HS/diabetes-tracker-app',
    demo: null,
    highlight: false,
  },
  {
    title: 'Vehicle Engine Sound Diagnosis',
    status: 'Completed',
    desc: 'ML-based fault detection system that analyzes vehicle engine audio signals to identify mechanical issues. Achieved 92% classification accuracy using audio feature extraction and signal processing.',
    tech: ['Python', 'Machine Learning', 'Signal Processing', 'Audio Analysis'],
    github: null,
    demo: null,
    highlight: false,
  },
  {
    title: 'Invensis Internship Journey',
    status: 'Archived',
    desc: 'Repository documenting my software developer internship at Invensis Pvt Ltd — projects, learnings, and code samples from 5 months of professional full-stack development.',
    tech: ['ReactJS', 'Node.js', 'Team Collaboration', 'Agile'],
    github: 'https://github.com/Nuthana-HS/Invensis-Intenship-Journey',
    demo: null,
    highlight: false,
  },
];

const statusColors = {
  Ongoing: 'var(--green)',
  Completed: 'var(--accent)',
  Archived: 'var(--text-muted)',
};

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I've <span>built</span></h2>
        <div className="projects__grid">
          {projects.map(p => (
            <div key={p.title} className={`projects__card card ${p.highlight ? 'projects__card--highlight' : ''}`}>
              <div className="projects__card-top">
                <div className="projects__card-header">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" className="projects__folder-icon"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
                  <span
                    className="projects__status"
                    style={{ color: statusColors[p.status] }}
                  >
                    ● {p.status}
                  </span>
                </div>
                <div className="projects__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="projects__link" title="View code">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="projects__link" title="Live demo">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="projects__title">{p.title}</h3>
              <p className="projects__desc">{p.desc}</p>

              <div className="projects__tech">
                {p.tech.map(t => (
                  <span key={t} className="projects__tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="projects__footer">
          <a
            href="https://github.com/Nuthana-HS"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            View all on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
