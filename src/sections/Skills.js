import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['ReactJS', 'Tailwind CSS', 'shadcn/ui', 'HTML5', 'CSS3'],
    color: 'blue',
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'REST APIs', 'Ruby on Rails', 'Express.js'],
    color: 'green',
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: ['PostgreSQL', 'SQL'],
    color: 'purple',
  },
  {
    category: 'Languages',
    icon: '💻',
    skills: ['JavaScript', 'Python'],
    color: 'orange',
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Postman', 'GitHub Copilot', 'VS Code'],
    color: 'blue',
  },
  {
    category: 'AI & ML',
    icon: '🤖',
    skills: ['Claude API', 'Prompt Engineering', 'ChatGPT', 'Machine Learning'],
    color: 'green',
  },
  {
    category: 'Salesforce',
    icon: '☁️',
    skills: ['Salesforce Platform', 'Developer Catalyst', 'Trailhead'],
    color: 'purple',
  },
  {
    category: 'Cloud',
    icon: '🌐',
    skills: ['Oracle Cloud', 'Data Science Platform'],
    color: 'orange',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technical <span>toolkit</span></h2>
        <div className="skills__grid">
          {skillGroups.map(group => (
            <div key={group.category} className={`skills__card card skills__card--${group.color}`}>
              <div className="skills__card-header">
                <span className="skills__icon">{group.icon}</span>
                <h3 className="skills__category">{group.category}</h3>
              </div>
              <div className="skills__tags">
                {group.skills.map(skill => (
                  <span key={skill} className="skills__tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
