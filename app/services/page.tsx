'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, Calendar, Container, Home, ArrowRight } from 'lucide-react';

const divisions = [
  {
    id: 'architecture',
    number: '01',
    icon: Building2,
    title: 'Architecture & Fit-out',
    href: '/services/architecture',
    desc: 'From conceptual planning to structural engineering and interior fit-outs. We design modern spaces with high-end premium materials, fully managed in-house.',
    dark: true,
  },
  {
    id: 'events-media',
    number: '02',
    icon: Calendar,
    title: 'Events & Media Production',
    href: '/services/events-media',
    desc: 'Corporate event coordination, trade show booths, professional photography, post-production media, and LED stage systems executed under tight timelines.',
    dark: false,
  },
  {
    id: 'portable-cabins',
    number: '03',
    icon: Container,
    title: 'Portable Cabins & Modular',
    href: '/services/portable-cabins',
    desc: 'Custom prefabricated site offices, anti-vandal units, retail pop-up kiosks, and modular housing built directly inside our Dammam floor workshop.',
    dark: true,
  },
  {
    id: 'real-estate',
    number: '04',
    icon: Home,
    title: 'Real Estate & Property',
    href: '/services/real-estate',
    desc: 'Acquisition advisory, market evaluation, commercial property management, and strategic leasing workflows tailored for corporate assets across Saudi Arabia.',
    dark: false,
  },
];

export default function ServicesPage() {
  return (
    <main style={{ background: '#fff', overflow: 'hidden' }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--black)',
        color: '#fff',
        paddingTop: 'clamp(9rem, 16vw, 13rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.015) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(234,32,50,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        {/* Giant bg watermark */}
        <div style={{
          position: 'absolute', right: '3%', bottom: '-10%',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(8rem, 18vw, 20rem)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.03)',
          textTransform: 'uppercase',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          userSelect: 'none',
          zIndex: 1,
          whiteSpace: 'nowrap',
        }}>DIVISIONS</div>

        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: 680 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div style={{ width: 32, height: 2, background: '#ea2032', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700,
                letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
              }}>Capabilities</span>
            </div>

            <h1 className="display-lg" style={{ color: '#fff', marginBottom: 24, lineHeight: 0.95 }}>
              Four Divisions.<br />
              <span style={{ color: '#ea2032' }}>One Team.</span>
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75,
              maxWidth: 520,
            }}>
              iVision operates as a multi-disciplinary network. Select a division below to explore
              specialized technical capacities, specifications, and project catalogs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── DIVISION CARDS ───────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        background: '#fff',
        borderBottom: '1px solid var(--white-3)',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 28,
          }}>
            {divisions.map((div, i) => {
              const Icon = div.icon;
              return (
                <motion.div
                  key={div.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                  style={{
                    padding: 'clamp(2rem, 4vw, 3.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    clipPath: 'polygon(0 0,calc(100% - 24px) 0,100% 24px,100% 100%,24px 100%,0 calc(100% - 24px))',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                    background: div.dark ? 'var(--black)' : 'var(--white-2)',
                    border: div.dark ? 'none' : '1px solid var(--white-3)',
                    color: div.dark ? '#fff' : 'var(--black)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateY(-4px)';
                    el.style.boxShadow = div.dark
                      ? '0 24px 60px rgba(0,0,0,0.5)'
                      : '0 24px 60px rgba(234,32,50,0.1)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {/* Watermark number */}
                  <div style={{
                    position: 'absolute', top: -16, right: -8,
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(6rem, 12vw, 10rem)',
                    fontWeight: 900,
                    color: 'rgba(234,32,50,0.05)',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}>{div.number}</div>

                  <div style={{ position: 'relative', zIndex: 2 }}>
                    {/* Icon box */}
                    <div style={{
                      width: 56, height: 56,
                      background: '#ea2032',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 28,
                      clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))',
                    }}>
                      <Icon size={24} color="#fff" />
                    </div>

                    <h2 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.02em',
                      marginBottom: 16,
                      color: div.dark ? '#fff' : 'var(--black)',
                    }}>{div.title}</h2>

                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
                      color: div.dark ? 'rgba(255,255,255,0.55)' : 'var(--gray-2)',
                      lineHeight: 1.75,
                      maxWidth: 420,
                    }}>{div.desc}</p>
                  </div>

                  {/* Footer link strip */}
                  <div style={{
                    position: 'relative', zIndex: 2,
                    marginTop: 36,
                    paddingTop: 24,
                    borderTop: div.dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--white-3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      color: '#ea2032',
                    }}>Explore Specifications</span>

                    <Link
                      href={div.href}
                      style={{
                        width: 42, height: 42,
                        background: '#ea2032',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        clipPath: 'polygon(0 0,calc(100% - 4px) 0,100% 4px,100% 100%,4px 100%,0 calc(100% - 4px))',
                        transition: 'background 0.2s ease, transform 0.2s ease',
                        flexShrink: 0,
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.background = '#fff';
                        el.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.background = '#ea2032';
                        el.style.transform = 'scale(1)';
                      }}
                    >
                      <ArrowRight size={16} color="#fff" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
