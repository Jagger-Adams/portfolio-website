import './Projects.css';
import ProjectCard from '../components/projects/ProjectCard';

const GITHUB = 'https://github.com/Jagger-Adams';

const projects = [
  {
    label: 'Personal Project',
    title: 'JobTrends.ca',
    img: '/images/jobTrends.gif',
    description:
      'A full-stack job market analytics platform that ingests monthly Government of Canada Job Bank open data into PostgreSQL, then serves trends, salary data, and industry insights through a FastAPI REST API and a React web app. Fully self-hosted on my own server with Docker, an nginx reverse proxy, and HTTPS.',
    tags: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'REST API', 'Docker', 'nginx'],
    links: [
      { label: 'Live Site', href: 'https://jobtrends.ca' },
      { label: 'Github Repo', href: `${GITHUB}/job-market-analyzer` },
    ],
  },
  {
    label: 'Personal Project',
    title: 'Study App with AI Chatbot',
    img: '/images/studyApp.gif',
    description:
      'A user-friendly study app that allows users to dynamically create, delete, and load saved cue card decks using JSON. The app also features a built-in AI assistant chatbot that I implemented using the Deepseek API. This project was developed using JavaScript, as well as HTML and CSS for styling.',
    tags: ['JavaScript', 'API Requests', 'JSON', 'UI/UX Design', 'CSS', 'HTML'],
    links: [{ label: 'Github Repo', href: `${GITHUB}/Study-App` }],
  },
  {
    label: 'Group Coursework',
    title: 'Virtual Pet Game',
    img: '/images/petGame.gif',
    description:
      "A virtual pet simulator where multiple pets' vital stats (e.g. happiness, hunger, etc.) and lives persist across sessions using JSON files. This project also includes password-protected parental controls, enabling parents to set time restrictions, monitor playtime stats, and revive dead pets. For this project, we chose Java as the programming language and JavaFX to implement the GUI.",
    tags: ['Java', 'JavaFX', 'FXML', 'CSS', 'UI/UX Design', 'JSON', 'Git'],
    links: [{ label: 'Github Repo', href: `${GITHUB}/Virtual-Pet-Game` }],
  },
  {
    label: 'Personal Project',
    title: 'Crossy Road-Inspired 2D Game',
    img: '/images/crossyRoad.gif',
    description:
      'Built a 2 dimensional Crossy Road-inspired game with collision detection and a GUI. For this project, I chose Java as the programming language and used the Java Swing library to implement the GUI. The avatar, NPCs, and background tiles were designed using Affinity Photo.',
    tags: ['Java', 'Java Swing', 'UI/UX Design'],
    links: [{ label: 'Github Repo', href: `${GITHUB}/Crossy-Road-Inspired-Game` }],
  },
  {
    label: 'Personal Project',
    title: 'BEDMAS Calculator',
    img: '/images/calculator.png',
    description:
      'A fully functional BEDMAS calculator with a GUI, developed in Java. The GUI was designed using Java Swing, offering an intuitive and user-friendly experience for performing complex calculations.',
    tags: ['Java', 'Java Swing', 'UI/UX Design'],
    links: [{ label: 'Github Repo', href: `${GITHUB}/BEDMAS-Calculator` }],
  },
];

export default function Projects() {
  return (
    <div className="projectsRoot">
      <section className="projSection tileSection tile1">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} reverse={i % 2 === 1} {...project} />
        ))}
      </section>
    </div>
  );
}
