import './ExperienceDisplay.css';
import ExperienceCard from './ExperienceCard';

function ExperienceDisplay() {
  return (
    <div className="experienceSection col">
      <span className="experienceTitle h1">Experience</span>
      <ExperienceCard
        company="Infotech Research Group"
        role="Software Developer Intern"
        dateRange="Jan 2027 - Apr 2027"
        logoPath="/images/infotech.jpg"
        upcoming
      />
      <ExperienceCard
        company="RidgeTech Automation"
        role="Integrated Software Intern"
        dateRange="Jan 2026 – Aug 2026"
        logoPath="/images/RTA.png"
        bullets={[
          'Built SCADA applications for manufacturing clients across multiple industries using Ignition, Python, and SQL',
          'Contributed full-stack development across multiple client projects',
          'Participated in an on-site client visit to gather requirements directly from the production floor',
          'Delivered a 15-minute project presentation at a company-wide townhall meeting to an audience of ~50',
        ]}
        skills={['Ignition', 'Python', 'SQL']}
      />
    </div>
  );
}

export default ExperienceDisplay;
