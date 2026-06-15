'use client';
import { useRef, useEffect } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered', sub: 'Across Saudi Arabia' },
  { value: 12, suffix: '+', label: 'Years of Excellence', sub: 'Since 2014' },
  { value: 100, suffix: '%', label: 'In-House Execution', sub: 'Dammam Workshop' },
  { value: 50, suffix: '+', label: 'Industry Professionals', sub: 'Multi-Disciplinary Team' },
  { value: 4, suffix: '', label: 'Core Divisions', sub: 'All Under One Roof' },
];

function useCountUp(target: number, duration: number, trigger: boolean) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!trigger || !ref.current) return;
    let start = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      if (ref.current) ref.current.textContent = current.toString();
      if (progress < 1) requestAnimationFrame(tick);
      else if (ref.current) ref.current.textContent = target.toString();
    };
    requestAnimationFrame(tick);
  }, [trigger, target, duration]);
  return ref;
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);
  const numRef = useCountUp(stat.value, 1800, false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !triggered.current) {
        triggered.current = true;
        // Trigger count-up manually
        let start = 0;
        const startTime = performance.now();
        const target = stat.value;
        const duration = 1800;
        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(ease * target);
          if (numRef.current) numRef.current.textContent = current.toString();
          if (progress < 1) requestAnimationFrame(tick);
          else if (numRef.current) numRef.current.textContent = target.toString();
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [stat.value, numRef]);

  return (
    <div
      ref={sectionRef}
      style={{
        textAlign: 'center',
        padding: 'clamp(2rem,4vw,3rem) clamp(1rem,2vw,2rem)',
        position: 'relative',
        transition: 'transform 0.3s ease',
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-6px)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      {/* Separator line between cards */}
      {index > 0 && (
        <div style={{
          position: 'absolute', left: 0, top: '20%', height: '60%',
          width: 1, background: 'rgba(255,255,255,0.08)',
        }} />
      )}

      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(3rem,6vw,5rem)',
        fontWeight: 900,
        lineHeight: 1,
        color: '#fff',
        letterSpacing: '-0.03em',
      }}>
        <span ref={numRef}>0</span>
        <span style={{ color: '#ea2032' }}>{stat.suffix}</span>
      </div>

      <div style={{
        fontFamily: 'var(--font-ui)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.7)',
        marginTop: 12,
        marginBottom: 4,
      }}>{stat.label}</div>

      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        color: 'rgba(255,255,255,0.3)',
      }}>{stat.sub}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      style={{
        background: 'var(--black)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(4rem,8vw,7rem) 0',
      }}
    >
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.015) 1px,transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Red accent glow */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%,-50%)',
        width: '60%', height: '60%',
        background: 'radial-gradient(ellipse at center, rgba(234,32,50,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem,5vw,4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 40, height: 1, background: '#ea2032' }} />
            <span style={{
              fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
              letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
            }}>By The Numbers</span>
            <div style={{ width: 40, height: 1, background: '#ea2032' }} />
          </div>
          <h2 className="display-sm" style={{ color: '#fff' }}>
            Built on Results
          </h2>
        </div>

        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          border: '1px solid rgba(255,255,255,0.06)',
          clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))',
        }}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
