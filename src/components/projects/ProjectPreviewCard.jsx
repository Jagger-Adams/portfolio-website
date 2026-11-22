import './ProjectPreviewCard.css';

export default function ProjectPreviewCard({ title, description, tags = [], href }) {
  return (
    <div className="projPreviewCard fadeIn col">
      <span className="h2">
        {href ? (
          <a
            className="projPreviewLink"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </span>
      <p className="projPreviewDescription h4">{description}</p>

      {tags.length > 0 && (
        <ul className="projPreviewTags row">
          {tags.map((t) => (
            <li key={t} className="projPreviewTag h4">{t}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
