'use client';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTABand() {
  return (
    <section
      style={{
        background: '#ea2032',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(4rem,8vw,7rem) 0',
      }}
    >
      {/* Decorative noise overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        opacity: 0.07,
        pointerEvents: 'none',
      }} />

      {/* Giant watermark text */}
      <div style={{
        position: 'absolute',
        right: '-5%',
        top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(6rem,20vw,18rem)',
        fontWeight: 900,
        color: 'rgba(255,255,255,0.06)',
        textTransform: 'uppercase',
        letterSpacing: '-0.05em',
        lineHeight: 1,
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}>
        iVision
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 40,
          flexWrap: 'wrap',
        }}>
          {/* Left: Headline */}
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 32, height: 2, background: 'rgba(255,255,255,0.5)' }} />
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
                letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
              }}>Start Your Project</span>
            </div>
            <h2 className="display-md" style={{ color: '#fff', marginBottom: 20, maxWidth: 600 }}>
              Have a Project in Mind?
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem,1.2vw,1.1rem)',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
              maxWidth: 500,
            }}>
              From the first blueprint to the final handover — our estimators are ready to scope 
              your project and deliver a comprehensive proposal within 24 hours.
            </p>
          </div>

          {/* Right: CTAs */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            alignItems: 'flex-start',
          }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 36px',
                background: '#fff',
                color: '#ea2032',
                fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 700,
                letterSpacing: '2px', textTransform: 'uppercase',
                textDecoration: 'none',
                clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))',
                transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background 0.2s, color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'var(--black)';
                (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px) scale(1.03)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#fff';
                (e.currentTarget as HTMLAnchorElement).style.color = '#ea2032';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
              }}
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>

            <a
              href="tel:+966500000000"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '14px 34px',
                background: 'transparent',
                color: '#fff',
                fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 700,
                letterSpacing: '2px', textTransform: 'uppercase',
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.4)',
                clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))',
                transition: 'transform 0.3s ease, border-color 0.2s, background 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = '#fff';
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.1)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.4)';
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
              }}
            >
              <Phone size={14} /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
