import './Home.css';
import BackgroundCanvas from '../components/misc/BackgroundCanvas';
import SkillsDisplay from '../components/skills/SkillsDisplay';
import ExperienceDisplay from '../components/experience/ExperienceDisplay';
import ProjectsPreview from '../components/projects/ProjectsPreview';
import PersonalDisplay from '../components/misc/PersonalDisplay';


export default function Home() {
  return (
    <div className="homeRoot">
      <section className="homeSection homeHero">
        <BackgroundCanvas />
        <div className="homeHeroContent row">
          <div className="heroImageBox">
            <img className="heroImage" src="/images/profpic.png" alt="Jagger Adams" />
          </div>
          <div className="heroTextBox col">
            <span className="h1">Hi, I'm Jagger</span>
            <p>I'm a computer science major at Western University. My academic experience has equipped me with skills in programming, algorithm design, and software development. I'm eager to apply my knowledge to real-world challenges and contribute to large-scale meaningful projects. I'm currently seeking an internship position for the summer term starting May 2027.</p>
          </div>
        </div>
      </section>
      <section className="homeSection tileSection tile1">
        <ExperienceDisplay />
      </section>
      <section className="homeSection tileSection tile2">
        <SkillsDisplay />
      </section>
      <section className="homeSection tileSection tile3">
        <ProjectsPreview />
      </section>
      <section className="homeSection tileSection tile1">
        <PersonalDisplay />
      </section>
        </div>
  );
}
