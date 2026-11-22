import { useEffect, useRef } from 'react';
import './BackgroundCanvas.css';

const SPEED = 0.5;
const LINK_DISTANCE = 150;
const TRAIL_POINT_SIZE = 4;
const TRAIL_MAX = 50;
const TRAIL_SPACING = 2;
const TRAIL_DECAY_MS = 10;

const PARTICLE_SEEDS = [
  { r: 4, x: 0.50, y: 0.875, vx: -3, vy:  2 },
  { r: 2, x: 0.30, y: 0.50,  vx: -2, vy:  1 },
  { r: 3, x: 0.40, y: 0.75,  vx:  1, vy: -3 },
  { r: 5, x: 0.65, y: 0.50,  vx: -2, vy: -1 },
  { r: 4, x: 0.80, y: 0.625, vx:  2, vy:  1 },
  { r: 2, x: 0.20, y: 0.25,  vx:  1, vy:  2 },
  { r: 3, x: 0.70, y: 0.75,  vx:  3, vy:  2 },
  { r: 4, x: 0.10, y: 0.875, vx:  2, vy:  2 },
];

function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    const particles = PARTICLE_SEEDS.map((s) => ({
      x: s.x * width,
      y: s.y * height,
      radius: s.r,
      vx: s.vx,
      vy: s.vy,
    }));

    let trail = [];
    let lastPoint = null;
    let waveOffset = 0;
    let decayCarry = 0;
    let lastTime = performance.now();
    let frameId = null;

    function handleMouseMove(e) {
      const curr = { x: e.clientX, y: e.clientY };
      if (lastPoint) {
        const rect = canvas.getBoundingClientRect();
        const dx = curr.x - lastPoint.x;
        const dy = curr.y - lastPoint.y;
        const steps = Math.max(1, Math.floor(Math.hypot(dx, dy) / TRAIL_SPACING));
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          trail.push({
            x: lastPoint.x + dx * t - rect.left,
            y: lastPoint.y + dy * t - rect.top,
          });
        }
        if (trail.length > TRAIL_MAX) trail.splice(0, trail.length - TRAIL_MAX);
      }
      lastPoint = curr;
    }

    function handleMouseLeave() {
      lastPoint = null;
    }

    function updateParticles(step) {
      for (const p of particles) {
        p.x += p.vx * SPEED * step;
        p.y += p.vy * SPEED * step;
        if (p.x - p.radius <= 0) p.vx = Math.abs(p.vx);
        else if (p.x + p.radius >= width) p.vx = -Math.abs(p.vx);
        if (p.y - p.radius <= 0) p.vy = Math.abs(p.vy);
        else if (p.y + p.radius >= height) p.vy = -Math.abs(p.vy);
      }
    }

    function decayTrail(dt) {
      decayCarry += dt;
      const remove = Math.floor(decayCarry / TRAIL_DECAY_MS);
      if (remove > 0) {
        trail.splice(0, remove);
        decayCarry -= remove * TRAIL_DECAY_MS;
      }
    }

    function drawWave(amplitude, direction, fill) {
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x++) {
        const y = height / 2 + amplitude * Math.sin(0.02 * x + direction * waveOffset) + 0.7 * x;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
    }

    function drawParticles() {
      ctx.strokeStyle = 'grey';
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          if (Math.hypot(a.x - b.x, a.y - b.y) <= LINK_DISTANCE) {
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          }
        }
      }
      ctx.stroke();

      ctx.fillStyle = 'grey';
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawTrail() {
      ctx.fillStyle = 'rgba(40, 40, 80, 0.5)';
      for (const point of trail) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, TRAIL_POINT_SIZE, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function render() {
      ctx.clearRect(0, 0, width, height);
      drawWave(50, -1, 'rgba(55, 52, 52, 0.8)');
      drawWave(40, 1, 'rgba(40, 39, 41, 0.4)');
      drawParticles();
      drawTrail();
    }

    function frame(now) {
      const dt = Math.min(now - lastTime, 50);
      lastTime = now;
      const step = dt / (1000 / 60);

      waveOffset += 0.01 * step;
      updateParticles(step);
      decayTrail(dt);
      render();

      frameId = requestAnimationFrame(frame);
    }

    function start() {
      if (frameId !== null) return;
      lastTime = performance.now();
      frameId = requestAnimationFrame(frame);
    }

    function stop() {
      cancelAnimationFrame(frameId);
      frameId = null;
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduceMotion) render();
    });

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });

    resizeObserver.observe(canvas);

    if (reduceMotion) {
      render();
    } else {
      window.addEventListener('mousemove', handleMouseMove);
      document.documentElement.addEventListener('mouseleave', handleMouseLeave);
      visibilityObserver.observe(canvas);
    }

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="backgroundCanvas" aria-hidden="true" />;
}

export default BackgroundCanvas;