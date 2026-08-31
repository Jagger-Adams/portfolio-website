import { useState } from 'react';
import './SkillsKeyboard.css';
import KeyCap from './KeyCap';

const skills = [
  { letter: 'React',   iconPath: '/icons/react.svg',   color: '#185FA5' },
  { letter: 'Python',  iconPath: '/icons/python.svg',  color: '#3B6D11' },
  { letter: 'SQL',     iconPath: '/icons/sql.svg',     color: '#712B13' },
  { letter: 'Docker',  iconPath: '/icons/docker.svg',  color: '#0C447C' },
  { letter: 'FastAPI', iconPath: '/icons/fastapi.svg', color: '#085041' },
  { letter: 'Nginx',   iconPath: '/icons/nginx.svg',   color: '#27500A' },
  { letter: 'Git',     iconPath: '/icons/git.svg',     color: '#712B13' },
  { letter: 'AWS',     iconPath: '/icons/aws.svg',     color: '#633806' },
];

function SkillsKeyboard() {
  const [hoveredKey, setHoveredKey] = useState(null);

  return (
    <div className="skillKeyboardRoot">
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
  );
}

export default SkillsKeyboard;