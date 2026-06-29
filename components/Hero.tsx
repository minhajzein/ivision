'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Three.js orb — loaded client-side only (no SSR)
const IVisionOrb = dynamic(() => import('./IVisionOrb'), { ssr: false });

const WORDS = ['ARCHITECTURE', 'EVENTS', 'MEDIA', 'FABRICATION', 'REAL ESTATE'];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  // Rotating words
  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length);
        setFading(false);
      }, 350);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    interface Particle { x: number; y: number; vx: number; vy: number; r: number; a: number; }
    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      a: Math.random(),
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234,32,50,${p.a * 0.5})`;
        ctx.fill();
      });
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(234,32,50,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animRef.current = requestAnimationFrame(render);
    };

    render();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--black)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.8 }}
      />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.02) 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Gradient overlays */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to right, rgba(10,10,10,0.9) 50%, transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', zIndex: 2, background: 'linear-gradient(to top, rgba(10,10,10,1), transparent)' }} />

      {/* Giant background text */}
      <div style={{
        position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(8rem,20vw,22rem)',
        fontWeight: 900,
        color: 'rgba(255,255,255,0.025)',
        textTransform: 'uppercase',
        letterSpacing: '-0.05em',
        lineHeight: 1,
        userSelect: 'none',
        zIndex: 1,
        whiteSpace: 'nowrap',
      }}>
        iVision
      </div>

      {/* Two-column hero layout */}
      <div className="container hero-grid" style={{
        position: 'relative', zIndex: 5,
        paddingTop: 120, paddingBottom: 100,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        alignItems: 'flex-start',
      }}>

        {/* ── LEFT: Text content ── */}
        <div>
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <div style={{ width: 40, height: 2, background: '#ea2032' }} />
            <span style={{
              fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700,
              letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032'
            }}>
              Kingdom of Saudi Arabia
            </span>
          </div>

          {/* Headline */}
          <h1
            className="display-xl"
            style={{
              color: '#fff',
              marginBottom: 24,
              lineHeight: 0.95,
              fontSize: 'clamp(2.75rem, 5.5vw, 5.25rem)',
            }}
          >
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>From&nbsp;Vision</span>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
              to&nbsp;<span style={{ color: '#ea2032' }}>Reality.</span>
            </span>
          </h1>

          {/* Rotating word */}
          <div style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 'clamp(0.75rem,1.2vw,1rem)',
            fontWeight: 600,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: 40,
            height: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}>
            <span>We specialize in</span>
            <span style={{
              color: '#ea2032',
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateY(-8px)' : 'translateY(0)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              display: 'inline-block',
            }}>
              {WORDS[wordIdx]}
            </span>
          </div>

          {/* Body text */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.9rem,1.3vw,1.1rem)',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.7,
            maxWidth: 480,
            marginBottom: 48,
          }}>
            A multi-disciplinary contracting powerhouse — unifying architecture,
            events production, modular fabrication, and real estate into one
            seamless delivery system.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/services" className="btn-primary">
              Explore Services <ArrowRight size={16} />
            </Link>
            <Link href="/portfolio" className="btn-outline-white">
              View Portfolio
            </Link>
          </div>
        </div>

        {/* ── RIGHT: 3D iVision Orb ── */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 560,
          marginTop: 16,
        }}>
          {/* Radial glow behind the orb */}
          <div style={{
            position: 'absolute',
            width: '70%',
            height: '70%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(234,32,50,0.18) 0%, transparent 70%)',
            filter: 'blur(40px)',
            zIndex: 1,
          }} />
          {/* Three.js canvas container — fills the right column */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: 560,
            zIndex: 2,
          }}>
            <IVisionOrb />
          </div>
          {/* Decorative label */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-ui)',
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)',
            zIndex: 3,
            whiteSpace: 'nowrap',
          }}>iVision Mark · 3D</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 40,
        right: 60,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        zIndex: 5,
        opacity: 0.5,
      }}>
        <div className="scroll-line" />
        <ChevronDown size={14} color="#fff" />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
