import './ExperienceCard.css';

export default function ExperienceCard({ company, role, dateRange, logoPath, bullets = [], skills = [], upcoming = false }) {
  const showBullets = !upcoming && bullets.length > 0;
  const showSkills = !upcoming && skills.length > 0;

  return (
    <div className="expCard col">
      <div className="expCardHeader row">
        <img src={logoPath} className="expCardLogo" alt={`${company} logo`} />
        <div className="col">
          <span className="h2">{company}</span>
          <span className="h3">{role}</span>
        </div>
        <div className="expCardMeta col">
          {upcoming && <span className="expUpcoming h5">Upcoming</span>}
          <span className="expDateRange h4">{dateRange}</span>
        </div>
      </div>

      {showBullets && (
        <ul className="expBullets col">
          {bullets.map((b) => (
            <li key={b} className="expBullet h4">{b}</li>
          ))}
        </ul>
      )}

      {showSkills && (
        <div className="expSkillsContainer col">
          <span className="h3">Skills/Stack</span>
          <ul className="expSkills row">
            {skills.map((s) => (
              <li key={s} className="expSkill h4">{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
