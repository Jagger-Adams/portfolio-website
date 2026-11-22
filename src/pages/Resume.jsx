import './Resume.css';

const RESUME_URL = encodeURI('/resume/Portfolio Resume.pdf');

export default function Resume() {
  return (
    <div className="resumeRoot">
      <section className="resumeSection tileSection tile2">
        <iframe className="resumeFrame" src={RESUME_URL} title="Jagger Adams resume" />
      </section>
    </div>
  );
}
