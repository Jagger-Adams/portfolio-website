import { useState } from 'react';
import './SkillsDisplay.css';
import SkillsKeyboard from './SkillsKeyboard';
import SkillsMonitor from './SkillsMonitor';

const skills = [
  { label: 'JavaScript',  iconPath: '/icons/javascript.svg', color: '#C9B231', description: 'Programming Language' },
  { label: 'Ignition',    iconPath: '/icons/ignition.svg',   color: '#C4842B', description: 'SCADA / Industrial Automation Platform' },
  { label: 'HTML',        iconPath: '/icons/html.svg',       color: '#C75F2E', description: 'Markup Language' },
  { label: 'Git',         iconPath: '/icons/git.svg',        color: '#C0442F', description: 'Version Control System' },
  { label: 'Java',        iconPath: '/icons/java.svg',       color: '#A8413F', description: 'Programming Language' },
  { label: 'SQL Server',  iconPath: '/icons/sqlServer.svg',  color: '#8E3B4E', description: 'Database Management System' },
  { label: 'CSS',         iconPath: '/icons/css.svg',        color: '#5B5BA8', description: 'Styling Language' },
  { label: 'C++',         iconPath: '/icons/cpp.svg',        color: '#3A6EA5', description: 'Programming Language' },
  { label: 'Postgres',    iconPath: '/icons/postgres.svg',   color: '#3D5F8C', description: 'Database Management System' },
  { label: 'Docker',      iconPath: '/icons/docker.svg',     color: '#2A6DB0', description: 'Containerization Platform' },
  { label: 'React',       iconPath: '/icons/react.svg',      color: '#2F9CB8', description: 'Frontend JavaScript Library' },
  { label: 'Python',      iconPath: '/icons/python.svg',     color: '#4C8A3A', description: 'Programming Language' },
];

function SkillsDisplay() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const hoveredSkill = hoveredIndex !== null ? skills[hoveredIndex] : null;

  return (
    <div className="skillsSection col">
      <span className='skillsTitle h1'>Skills</span>
      <div className="skillsDisplay row">
        <SkillsMonitor skill={hoveredSkill} />
        <SkillsKeyboard skills={skills} hoveredIndex={hoveredIndex} onHover={setHoveredIndex} />
      </div>
    </div>
  );
}

export default SkillsDisplay;