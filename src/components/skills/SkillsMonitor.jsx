import './SkillsMonitor.css';

function SkillsMonitor({ skill }) {
  return (
    <div className="skillsMonitor col">
        <div className="monitorFrame">
            <div className="monitorScreen">
              {skill ? (
                <div
                  className="monitorContent"
                  key={skill.label}
                  style={{ '--skill-color': skill.color }}
                >
                  <img src={skill.iconPath} className="monitorIcon" alt="" />
                  <span className="monitorLabel">{skill.label}</span>
                  <span className="monitorDescription">{skill.description}</span>
                </div>
              ) : (
                <div className="monitorContent monitorIdle" key="idle">
                  <p>Hover a key to see details</p>
                </div>
              )}
            </div>
        </div>
      <div className="monitorStand" />
      <div className="monitorBase" />
    </div>
  );
}

export default SkillsMonitor;
