'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="section-pad" style={{ background: '#fff', overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'clamp(2rem,5vw,5rem)',
          alignItems: 'center',
        }}>
          {/* Left: Visual block */}
          <div className="fade-up" style={{ gridColumn: 'span 5', position: 'relative', minHeight: 400 }}>
            {/* Giant watermark */}
            <div style={{
              position: 'absolute', top: -40, left: -20,
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(6rem,14vw,14rem)',
              fontWeight: 900,
              color: 'rgba(234,32,50,0.04)',
              lineHeight: 1,
              userSelect: 'none',
              letterSpacing: '-0.05em',
            }}>01</div>

            {/* Card */}
            <div
              style={{
                position: 'relative',
                background: 'var(--black)',
                color: '#fff',
                padding: 'clamp(2rem,4vw,3.5rem)',
                clipPath: 'polygon(0 0,calc(100% - 24px) 0,100% 24px,100% 100%,24px 100%,0 calc(100% - 24px))',
              }}
            >
              {/* Grid pattern */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.02) 1px,transparent 1px)',
                backgroundSize: '24px 24px',
              }} />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
                  letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032', marginBottom: 20,
                }}>Who We Are</div>

                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem,4vw,3rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  marginBottom: 20,
                }}>
                  One Team.<br />
                  <span style={{ color: '#ea2032' }}>Every Phase.</span>
                </h2>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.85rem,1.1vw,1rem)',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}>
                  Based in Dammam, iVision is Saudi Arabia's premier multi-disciplinary contracting firm — 
                  delivering architecture, events, modular builds, and real estate under one roof.
                </p>

                <Link href="/about" className="btn-outline-white" style={{ fontSize: 12 }}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Accent bar */}
            <div style={{
              position: 'absolute', bottom: -8, left: 32,
              width: 60, height: 4, background: '#ea2032',
            }} />
          </div>

          {/* Right: 2×2 Feature Grid */}
          <div style={{ gridColumn: 'span 7', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              {
                num: '01', label: 'Unified Delivery',
                desc: 'Architecture, events, modular fabrication, and real estate — one company, one timeline.',
                delay: 0,
              },
              {
                num: '02', label: 'Kingdom-Wide Reach',
                desc: 'Serving clients across Saudi Arabia with end-to-end project execution.',
                delay: 1,
              },
              {
                num: '03', label: 'In-House Workshop',
                desc: 'Fabrication, staging, and fit-out handled internally for quality and speed.',
                delay: 2,
              },
              {
                num: '04', label: 'Vision 2030 Aligned',
                desc: 'Driving local content, industrial capability, and contracting innovation.',
                delay: 3,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`fade-up delay-${item.delay + 1}`}
                style={{
                  background: 'var(--white-2)',
                  border: '1px solid var(--white-3)',
                  padding: 'clamp(1.5rem,3vw,2.5rem)',
                  clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))',
                  transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#ea2032';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(234,32,50,0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--white-3)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem,5vw,4rem)',
                  fontWeight: 900,
                  color: '#ea2032',
                  lineHeight: 1,
                  marginBottom: 8,
                }}>{item.num}</div>
                <div style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: 'var(--black)',
                  marginBottom: 12,
                }}>{item.label}</div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'var(--gray-2)',
                  lineHeight: 1.6,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          [style*="gridColumn: span 5"]{grid-column:span 12 !important;}
          [style*="gridColumn: span 7"]{grid-column:span 12 !important;}
        }
      `}</style>
    </section>
  );
}
