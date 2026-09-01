import { useState } from 'react';
import './SkillsKeyboard.css';
import KeyCap from './KeyCap';

const skills = [
  { letter: 'React',    iconPath: '/icons/react.svg',    color: '#185FA5' },
  { letter: 'Python',   iconPath: '/icons/python.svg',   color: '#3B6D11' },
  { letter: 'Java',     iconPath: '/icons/java.svg',     color: '#B07219' },
  { letter: 'SQL Server', iconPath: '/icons/sqlServer.svg', color: '#712B13' },
  { letter: 'Postgres', iconPath: '/icons/postgres.svg', color: '#1A5276' },
  { letter: 'Docker',   iconPath: '/icons/docker.svg',   color: '#0C447C' },
  { letter: 'Ignition', iconPath: '/icons/ignition.svg', color: '#633806' },
  { letter: 'Git', iconPath: '/icons/git.svg', color: '#633806' },
];

function SkillsKeyboard() {
  const [hoveredKey, setHoveredKey] = useState(null);

  return (
    <div className="skillKeyboardStage">
  <div className="skillKeyboardRoot">
    <div className="skillKeyboardBase">
      <div className="baseBacking" />
      <div className="baseTop" />
      <div className="baseFront" />
      <div className="baseLeft" />
    </div>
    <div className="skillKeyboardKeys">
      {skills.map((s, i) => (
                <KeyCap
                key={s.letter}
                letter={s.letter}
                iconPath={s.iconPath}
                color={s.color}
                pressed={hoveredKey === i}
                onMouseEnter={() => setHoveredKey(i)}
                onMouseLeave={() => setHoveredKey(null)}
                />
            ))}
    </div>
  </div>
</div>
  );
}

export default SkillsKeyboard;