import './SkillsKeyboard.css';
import KeyCap from './KeyCap';

function SkillsKeyboard({ skills, hoveredIndex, onHover }) {
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
              key={s.label}
              label={s.label}
              iconPath={s.iconPath}
              color={s.color}
              pressed={hoveredIndex === i}
              onMouseEnter={() => onHover(i)}
              onMouseLeave={() => onHover(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsKeyboard;