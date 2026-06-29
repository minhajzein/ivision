'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Eye, ExternalLink } from 'lucide-react';

const categories = ['All', 'Architecture', 'Events & Media', 'Portable Cabins', 'Real Estate'];

const projects = [
  { id: 1, title: 'Luxury Corporate Office Fit-out', category: 'Architecture', location: 'Khobar Towers, Al Khobar', year: '2025', metric: '1,200 sqm', desc: 'Complete turn-key design and fit-out featuring glass partition walls, custom acoustic ceilings, and smart energy automation.' },
  { id: 2, title: 'Dammam Industrial Exhibition Stage', category: 'Events & Media', location: 'Dammam Expo Center', year: '2025', metric: '15,000 Visitors', desc: 'Design, fabrication, and LED production for a national infrastructure showcase, delivered inside a 48-hour staging window.' },
  { id: 3, title: 'Smart Site Office Complex', category: 'Portable Cabins', location: 'Jubail Industrial City', year: '2024', metric: '18 Modular Units', desc: 'Heavy-duty insulated modular office block with executive boardrooms, dynamic workspaces, and anti-vandal structural designs.' },
  { id: 4, title: 'Commercial Retail Plaza Advisory', category: 'Real Estate', location: 'Ash Shati, Dammam', year: '2024', metric: '92% Occupancy', desc: 'Market feasibility study, tenant positioning coordination, and complete leasing management workflow implementation.' },
  { id: 5, title: 'Minimalist Residential Villa', category: 'Architecture', location: 'Riyadh Province', year: '2025', metric: '850 sqm', desc: 'Architectural planning and structural engineering for a modern custom family residence utilising high-efficiency thermal insulation.' },
  { id: 6, title: 'Kingdom Tourism Summit Activation', category: 'Events & Media', location: 'Ritz-Carlton, Riyadh', year: '2024', metric: '3 Media Zones', desc: 'Multi-sensory brand activation booths, videography production, and custom stage design, completed entirely in-house.' },
  { id: 7, title: 'Eco-Friendly Retail Kiosk Pods', category: 'Portable Cabins', location: 'Corniche Area, Dammam', year: '2025', metric: '4 Customized Pods', desc: 'Modular structural builds for seaside pop-up coffee shops, featuring integrated solar panel brackets and composite cladding.' },
  { id: 8, title: 'Logistics Warehouse Acquisition', category: 'Real Estate', location: 'Jeddah Port Area', year: '2024', metric: '25,000 sqm', desc: 'Acquisition advisory and corporate leasing structuring for a major third-party logistics supplier.' },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

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
        <div className="page-watermark" style={{
          position: 'absolute', right: '3%', bottom: '-8%',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(8rem,18vw,20rem)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.03)',
          textTransform: 'uppercase',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          userSelect: 'none',
          zIndex: 1,
          whiteSpace: 'nowrap',
        }}>WORKS</div>

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
              }}>Showcase</span>
            </div>

            <h1 className="display-lg" style={{ color: '#fff', marginBottom: 24, lineHeight: 0.95 }}>
              Our Built <span style={{ color: '#ea2032' }}>Portfolio</span>
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75,
              maxWidth: 520,
            }}>
              Explore a collection of key projects delivered across Saudi Arabia —
              from Riyadh and Jeddah to the Eastern Province.
              Utilising our unified in-house workshops, we merge architecture, branding, and modular
              builds to bypass traditional delay workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FILTER + GRID ────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 0',
        background: '#fff',
        borderBottom: '1px solid var(--white-3)',
      }}>
        <div className="container">

          {/* Filter tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            marginBottom: 48,
            paddingBottom: 32,
            borderBottom: '1px solid var(--white-3)',
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '10px 20px',
                  border: 'none',
                  cursor: 'none',
                  clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))',
                  transition: 'background 0.2s ease, color 0.2s ease',
                  background: filter === cat ? '#ea2032' : 'var(--white-2)',
                  color: filter === cat ? '#fff' : 'var(--black)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: 24,
          }}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  style={{
                    border: '1px solid var(--white-3)',
                    background: '#fff',
                    clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = '#ea2032';
                    el.style.boxShadow = '0 20px 50px rgba(234,32,50,0.1)';
                    el.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'var(--white-3)';
                    el.style.boxShadow = 'none';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Visual header */}
                  <div style={{
                    aspectRatio: '4/3',
                    background: 'var(--black)',
                    position: 'relative',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden',
                    padding: 24,
                  }}>
                    {/* Grid texture */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.03) 1px,transparent 1px)',
                      backgroundSize: '20px 20px',
                    }} />
                    {/* Gradient fade */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.5) 60%, rgba(10,10,10,0.2) 100%)',
                      zIndex: 1,
                    }} />
                    {/* iV watermark */}
                    <div style={{
                      position: 'absolute', top: 16, left: 16,
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.5rem', fontWeight: 900,
                      color: 'rgba(234,32,50,0.12)',
                      textTransform: 'uppercase',
                      userSelect: 'none',
                      zIndex: 2,
                    }}>iV</div>

                    {/* Card label + title */}
                    <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', width: '100%' }}>
                      <span style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 9, fontWeight: 700,
                        letterSpacing: '3px', textTransform: 'uppercase',
                        color: '#ea2032',
                        background: 'rgba(234,32,50,0.08)',
                        border: '1px solid rgba(234,32,50,0.2)',
                        padding: '4px 12px',
                        display: 'inline-block',
                      }}>{project.category}</span>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(0.95rem, 1.3vw, 1.2rem)',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        color: '#fff',
                        marginTop: 14,
                        letterSpacing: '-0.01em',
                        lineHeight: 1.1,
                      }}>{project.title}</h3>
                    </div>

                    {/* Hover reveal overlay */}
                    <div style={{
                      position: 'absolute', inset: 0, zIndex: 10,
                      background: 'rgba(234,32,50,0.96)',
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      padding: 24, textAlign: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      color: '#fff',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = '1'; }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = '0'; }}
                    >
                      <Eye size={28} style={{ marginBottom: 12 }} />
                      <h4 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem', fontWeight: 900,
                        textTransform: 'uppercase',
                        marginBottom: 10,
                      }}>Project Details</h4>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 12,
                        lineHeight: 1.65,
                        opacity: 0.9,
                        marginBottom: 12,
                      }}>{project.desc}</p>
                      <span style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 10, fontWeight: 700,
                        letterSpacing: '2px', textTransform: 'uppercase',
                        border: '1px solid rgba(255,255,255,0.3)',
                        padding: '5px 14px',
                        background: 'rgba(255,255,255,0.1)',
                      }}>{project.metric}</span>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div style={{
                    padding: '16px 20px',
                    borderTop: '1px solid var(--white-3)',
                    background: '#fff',
                    display: 'flex', flexDirection: 'column', gap: 10,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <MapPin size={11} color="#ea2032" style={{ flexShrink: 0 }} />
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 12, fontWeight: 500,
                        color: 'var(--gray-2)',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      }}>{project.location}</span>
                    </div>
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      borderTop: '1px solid var(--white-2)',
                      paddingTop: 10,
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 10, fontWeight: 600,
                        color: 'var(--gray)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      }}>Completed: {project.year}</span>
                      <span style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 10, fontWeight: 700,
                        color: '#ea2032',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                      }}>{project.metric}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 0',
        background: '#ea2032',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.05) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            marginBottom: 16,
          }}>Have a Similar Venture in Mind?</h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: 520,
            margin: '0 auto 36px',
            lineHeight: 1.7,
          }}>
            Contact our estimating team today. We provide cost evaluations and planning proposals
            for commercial fit-outs, modular units, and media stage setups.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase',
              background: '#fff', color: '#ea2032',
              padding: '16px 40px',
              clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))',
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = 'var(--black)';
              el.style.color = '#fff';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#fff';
              el.style.color = '#ea2032';
            }}
          >
            Start Your Quote <ExternalLink size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
