'use client';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const LINKS = {
  'Company': [
    { label: 'About iVision', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],
  'Services': [
    { label: 'Architecture & Fit-out', href: '/services/architecture' },
    { label: 'Events & Media', href: '/services/events-media' },
    { label: 'Portable Cabins', href: '/services/portable-cabins' },
    { label: 'Real Estate', href: '/services/real-estate' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.012) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.012) 1px,transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      {/* Top border */}
      <div style={{ height: 3, background: 'linear-gradient(to right,#ea2032,transparent 60%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Main footer grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: 'clamp(2rem,4vw,4rem)',
          padding: 'clamp(3rem,6vw,6rem) 0 clamp(2rem,4vw,4rem)',
        }}>
          {/* Brand column */}
          <div>
            {/* Brand logo */}
            <div style={{ marginBottom: 20 }}>
              <Image
                src="/logo-white.png"
                alt="iVision"
                width={160}
                height={52}
                style={{ height: 48, width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.7,
              maxWidth: 320,
              marginBottom: 28,
            }}>
              Saudi Arabia's premier multi-disciplinary contracting company. 
              Architecture, events, modular fabrication, and real estate — 
              delivered in-house across the Kingdom.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={12} color="#ea2032" style={{ marginTop: 3, flexShrink: 0 }} />
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.4)',
                  lineHeight: 1.6,
                }}>
                  <div>4571, 9th Street, Al Adamah, 7758</div>
                  <div>Dammam 32242- K S A</div>
                  <div>M : 0503913735</div>
                </div>
              </div>
              {[
                { icon: Phone, text: '0503913735' },
                { icon: Mail, text: 'sskhan@ivisionads.com', href: 'mailto:sskhan@ivisionads.com' },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon size={12} color="#ea2032" />
                  {href ? (
                    <a
                      href={href}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.4)',
                        textDecoration: 'none',
                      }}
                    >{text}</a>
                  ) : (
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{text}</span>
                  )}
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <ArrowUpRight size={12} color="#ea2032" />
                <a
                  href="https://www.ivisionads.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                  }}
                >www.ivisionads.com</a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <div style={{
                fontFamily: 'var(--font-ui)', fontSize: 9, fontWeight: 700,
                letterSpacing: '4px', textTransform: 'uppercase',
                color: '#ea2032', marginBottom: 24,
              }}>{title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {links.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      fontFamily: 'var(--font-body)', fontSize: 13,
                      color: 'rgba(255,255,255,0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'flex', alignItems: 'center', gap: 4,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* CTA column */}
          <div>
            <div style={{
              fontFamily: 'var(--font-ui)', fontSize: 9, fontWeight: 700,
              letterSpacing: '4px', textTransform: 'uppercase',
              color: '#ea2032', marginBottom: 24,
            }}>Ready to Build?</div>

            <div style={{
              background: 'var(--black-2)',
              border: '1px solid rgba(234,32,50,0.2)',
              padding: 24,
              clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))',
              marginBottom: 16,
            }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 12,
                color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 16,
              }}>
                Tell us about your project and get a comprehensive proposal within 24 hours.
              </p>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
                  letterSpacing: '2px', textTransform: 'uppercase',
                  color: '#ea2032', textDecoration: 'none',
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
                onMouseLeave={e => (e.currentTarget.style.gap = '6px')}
              >
                Get Free Quote <ArrowUpRight size={12} />
              </Link>
            </div>

            {/* Vision 2030 badge */}
            <div style={{
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '12px 16px',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ width: 8, height: 8, background: '#ea2032', borderRadius: '50%', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: 9, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
                Aligned with Saudi Vision 2030
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 0',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: '1px' }}>
            © {year} iVision Contracting Co. All rights reserved.
          </span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: '1px' }}>
            Serving clients across the Kingdom of Saudi Arabia
          </span>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          footer > .container > div:first-child { grid-template-columns:1fr 1fr !important; }
          footer > .container > div:first-child > div:first-child { grid-column:span 2; }
        }
        @media(max-width:600px){
          footer > .container > div:first-child { grid-template-columns:1fr !important; }
          footer > .container > div:first-child > div:first-child { grid-column:span 1; }
        }
      `}</style>
    </footer>
  );
}
