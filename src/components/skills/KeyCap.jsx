import './KeyCap.css';

function KeyCap({ letter, iconPath, color, pressed, height = 70, onMouseEnter, onMouseLeave }) {
  return (
    <div
        className="keyCap"
        style={{
            '--key-height': `${height}px`,
            transform: pressed ? `translateZ(${height/2}px)` : `translateZ(${height}px)`,
        }}
    >
      <div className="keyBase" style={{ background: color, filter: 'brightness(0.5)' }}/>
      <div className="keyTop" 
            style={{ background: color }} 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
        {iconPath && <img src={iconPath} className="keyIcon" alt="" />}
        {!iconPath && letter}
      </div>
      <div className="keyFront" style={{ background: color, filter: 'brightness(0.55)' }} />
      <div className="keyLeft" style={{ background: color, filter: 'brightness(0.4)' }} />
      <div className="keyCornerNear" style={{ background: color, filter: 'brightness(0.46)' }} />
      <div className="keyCornerBack" style={{ background: color, filter: 'brightness(0.34)' }} />
      <div className="keyCornerRight" style={{ background: color, filter: 'brightness(0.5)' }} />
    </div>
  );
}

export default KeyCap;