import './PersonalDisplay.css';
import PersonalCard from './PersonalCard';

const PERSONAL_GROUPS = [
  {
    title: 'Sports',
    images: [
      { src: '/images/bench.gif', alt: 'Bench pressing' },
      { src: '/images/ski.png', alt: 'Skiing' },
      { src: '/images/golf.gif', alt: 'Golfing' },
      { src: '/images/jetski.JPG', alt: 'Jet skiing' },
    ],
  },
  {
    title: 'Travel',
    images: [
      { src: '/images/timeSquare.jpg', alt: 'Times Square' },
      { src: '/images/waves.gif', alt: 'Ocean waves' },
      { src: '/images/jungle.jpg', alt: 'Jungle' },
      { src: '/images/volleyball.gif', alt: 'Beach volleyball' },
    ],
  },
];

function PersonalDisplay() {
  return (
    <div className="personalSection col">
      <span className="personalTitle h1">Personal</span>
      {PERSONAL_GROUPS.map((group) => (
        <PersonalCard key={group.title} title={group.title} images={group.images} />
      ))}
    </div>
  );
}

export default PersonalDisplay;
