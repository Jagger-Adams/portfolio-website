import './ProjectCard.css';

export default function ProjectCard({ label, title, description, img, tags = [], links = [], reverse = false }) {
  return (
    <article className={`projCard fadeIn${reverse ? ' reverse' : ''}`}>
      <div className="projContent">
        <span className="projLabel h3">{label}</span>
        <h2 className="projTitle h1">{title}</h2>
        <p className="projDescription h4">{description}</p>

        <ul className="projPills">
          {tags.map((tag) => (
            <li key={tag} className="projTag h4">{tag}</li>
          ))}
          {links.map(({ label, href }) => (
            <li key={label}>
              <a className="projLink h4" href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {img && <img className="projImage" src={img} alt={`${title} preview`} />}
    </article>
  );
}
