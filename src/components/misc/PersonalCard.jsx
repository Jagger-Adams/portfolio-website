import './PersonalCard.css';

function PersonalCard({ title, images }) {
  return (
    <div className="personalCard col">
      <span className="personalCardTitle h2">{title}</span>
      <ul className="personalCardImages row">
        {images.map(({ src, alt }) => (
          <li key={src} className="personalCardItem">
            <img className="personalCardImage" src={src} alt={alt} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonalCard;
