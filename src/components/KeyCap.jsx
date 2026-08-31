import './KeyCap.css';

function KeyCap({ letter, iconPath, color, pressed, height = 50, onMouseEnter, onMouseLeave }) {
  return (
    <div
        className="keyCap"
        style={{
            '--key-height': `${height}px`,
            transform: pressed ? `translateZ(${height/3}px)` : `translateZ(${height}px)`,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
      <div className="keyTop" style={{ background: color }}>
        {iconPath && <img src={iconPath} className="keyIcon" alt="" />}
        {!iconPath && letter}
      </div>
      <div className="keyFront" style={{ background: color, filter: 'brightness(0.55)' }} />
      <div className="keyLeft" style={{ background: color, filter: 'brightness(0.4)' }} />
    </div>
  );
}

export default KeyCap;