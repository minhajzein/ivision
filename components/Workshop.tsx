'use client';
import Link from 'next/link';
import { ArrowRight, Wrench, Zap, Shield } from 'lucide-react';

const WORKSHOP_FEATURES = [
  { icon: Wrench, title: 'Precision Fabrication', desc: 'CNC machinery, custom steel joinery, and composite panel cutting — all in-house.' },
  { icon: Zap, title: 'Rapid Turnaround', desc: 'From spec to delivery in record time. No import delays, no third-party queues.' },
  { icon: Shield, title: 'Quality Certified', desc: 'ISO-aligned manufacturing processes with comprehensive quality audits.' },
];

export default function Workshop() {
  return (
    <section
      style={{
        background: 'var(--black)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Left accent panel */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: 4,
        background: '#ea2032',
      }} />

      <div className="container" style={{ padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,5rem)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem,6vw,6rem)',
          alignItems: 'center',
        }}>
          {/* Left: Text content */}
          <div className="fade-up">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{ width: 32, height: 2, background: '#ea2032' }} />
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
                letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
              }}>Dammam Workshop</span>
            </div>

            <h2 className="display-md" style={{ color: '#fff', marginBottom: 24 }}>
              Built In-House.<br />
              <span style={{ color: '#ea2032' }}>Delivered On-Time.</span>
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem,1.2vw,1.1rem)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 480,
            }}>
              At the core of iVision is our advanced manufacturing facility in Dammam's industrial zone. 
              Unlike competitors who rely on third-party suppliers, we fabricate every component internally — 
              giving us unmatched control over quality, cost, and delivery timelines.
            </p>

            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 40 }}>
              {WORKSHOP_FEATURES.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 36, height: 36, background: 'rgba(234,32,50,0.12)',
                      border: '1px solid rgba(234,32,50,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={16} color="#ea2032" />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700,
                        textTransform: 'uppercase', color: '#fff', marginBottom: 4, letterSpacing: '0.02em',
                      }}>{feat.title}</div>
                      <div style={{
                        fontFamily: 'var(--font-body)', fontSize: 12,
                        color: 'rgba(255,255,255,0.4)', lineHeight: 1.6,
                      }}>{feat.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href="/services" className="btn-outline-white" style={{ fontSize: 12 }}>
              Explore Services <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right: Visual Workshop Graphic */}
          <div className="fade-up delay-2" style={{ position: 'relative' }}>
            {/* Main visual box */}
            <div style={{
              border: '1px solid rgba(234,32,50,0.2)',
              background: 'var(--black-2)',
              padding: 'clamp(2rem,4vw,3rem)',
              clipPath: 'polygon(0 0,calc(100% - 24px) 0,100% 24px,100% 100%,24px 100%,0 calc(100% - 24px))',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Grid */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(to right,rgba(234,32,50,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(234,32,50,0.04) 1px,transparent 1px)',
                backgroundSize: '20px 20px',
              }} />

              {/* Central graphic */}
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '2rem 0' }}>
                <div style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 9, fontWeight: 700,
                  letterSpacing: '5px', textTransform: 'uppercase',
                  color: '#ea2032', marginBottom: 16,
                }}>Workshop Capacity</div>

                {/* Circular progress rings */}
                <div style={{ position: 'relative', width: 200, height: 200, margin: '0 auto 24px' }}>
                  <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="12" />
                    <circle cx="100" cy="100" r="80" fill="none" stroke="#ea2032" strokeWidth="12"
                      strokeDasharray={`${2 * Math.PI * 80 * 0.92} ${2 * Math.PI * 80 * 0.08}`}
                      strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 6px rgba(234,32,50,0.5))' }} />
                    <circle cx="100" cy="100" r="58" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="8" />
                    <circle cx="100" cy="100" r="58" fill="none" stroke="rgba(234,32,50,0.4)" strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 58 * 0.75} ${2 * Math.PI * 58 * 0.25}`}
                      strokeLinecap="round" />
                  </svg>
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 900, color: '#fff', lineHeight: 1 }}>92%</div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontSize: 8, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>Utilization</div>
                  </div>
                </div>

                {/* Mini stats row */}
                <div className="grid-3-col" style={{ gap: 12 }}>
                  {[
                    { v: '3,000', u: 'sqm', l: 'Workshop Area' },
                    { v: '24/7', u: '', l: 'Operations' },
                    { v: '48h', u: '', l: 'Rush Turnaround' },
                  ].map(s => (
                    <div key={s.l} style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)', padding: '12px 8px' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                        {s.v}<span style={{ fontSize: 11, color: '#ea2032' }}>{s.u}</span>
                      </div>
                      <div style={{ fontFamily: 'var(--font-ui)', fontSize: 8, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: -20, right: -20,
              background: '#ea2032',
              padding: '12px 20px',
              clipPath: 'polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))',
              fontFamily: 'var(--font-display)',
              fontSize: 13, fontWeight: 900,
              textTransform: 'uppercase',
              color: '#fff',
              letterSpacing: '1px',
            }}>
              Dammam, KSA
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          section > .container > div { grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  );
}
