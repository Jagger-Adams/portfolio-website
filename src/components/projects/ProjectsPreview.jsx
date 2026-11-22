import { Link } from 'react-router-dom';
import './ProjectsPreview.css';
import ProjectPreviewCard from './ProjectPreviewCard';

function ProjectsPreview() {
  return (
    <div className="projectsPreviewSection col">
      <span className="projectsPreviewTitle h1">Projects</span>
      <div className="projectsPreviewRow row">
        <ProjectPreviewCard
          title="JobTrends.ca"
          href="https://jobtrends.ca"
          description="A self-hosted web app that turns Canada’s National Job Bank open data into interactive insights on hiring trends, salaries, and industries. An automated Python pipeline processes monthly job postings into a PostgreSQL database, and a FastAPI backend serves a responsive React dashboard, all running on my own home server with Docker, nginx, and HTTPS. Built with Python, FastAPI, PostgreSQL, React, and Docker."
          tags={["Python", "FastAPI", "PostgreSQL", "React", "Docker", "nginx"]}
        />
        <ProjectPreviewCard
          title="Study App with AI Chatbot"
          description="A user-friendly study app that allows users to dynamically create, delete, and load saved cue card decks using JSON. The app also features a built-in AI assistant chatbot that I implemented using the Deepseek API. This project was developed using JavaScript, as well as HTML and CSS for styling."
          tags={['JavaScript', 'HTML', 'CSS']}
        />
      </div>
      <Link to="/projects" className="projectsPreviewBtn h3">View all projects</Link>
    </div>
  );
}

export default ProjectsPreview;
