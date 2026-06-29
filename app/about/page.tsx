'use client';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Rocket, Landmark, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '18+', label: 'Years of Excellence', sub: 'Industry Experience' },
  { value: '3600', label: 'Projects Completed', sub: 'Kingdom-wide' },
  { value: '100%', label: 'In-House Execution', sub: 'Workshop Built' },
  { value: '68', label: 'Professional Staff', sub: 'Multi-disciplinary' },
];

const timeline = [
  { year: '2014', title: 'The Blueprint', desc: 'iVision is founded in Dammam, Eastern Province, offering localized Architecture and Structural Planning services.' },
  { year: '2017', title: 'Modular Evolution', desc: 'Launches the Portable Cabin & Custom Fabrication division with an advanced in-house workshop to handle turn-key modular systems.' },
  { year: '2020', title: 'Events & Media Production', desc: 'Expands into corporate event management, stage construction, branding, and photography to support large-scale national exhibitions.' },
  { year: '2023', title: 'Real Estate Portfolio', desc: 'Adds real estate investment advisory, commercial property management, and strategic leasing services across the Kingdom.' },
  { year: '2026 & Beyond', title: 'Saudi Vision 2030 Aligned', desc: 'Consolidates all four divisions into a unified contracting powerhouse driving infrastructure development aligned with Saudi Vision 2030.' },
];

const values = [
  { icon: Shield, title: 'Uncompromising Quality', desc: 'We control every stage of production in-house to guarantee structural excellence and premium finishes.' },
  { icon: Users, title: 'Collaborative Partnership', desc: 'Our clients are partners. We coordinate closely from initial blueprint to final execution.' },
  { icon: Target, title: 'Saudi Vision 2030', desc: 'Actively driving local content development, industrial capability, and contracting innovation in Dammam.' },
];

export default function AboutPage() {
  return (
    <main style={{ background: '#fff', overflow: 'hidden' }}>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          background: 'var(--black)',
          color: '#fff',
          /* paddingTop clears the fixed navbar (~72px) + generous breathing room */
          paddingTop: 'clamp(9rem, 16vw, 13rem)',
          paddingBottom: 'clamp(5rem, 10vw, 8rem)',
          overflow: 'hidden',
        }}
      >
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.015) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Red gradient wash */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(234,32,50,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        {/* Giant background watermark */}
        <div className="page-watermark" style={{
          position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)',
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
        }}>
          iVision
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: 820 }}
          >
            {/* Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div style={{ width: 40, height: 2, background: '#ea2032', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700,
                letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
              }}>
                Who We Are
              </span>
            </div>

            <h1 className="display-lg" style={{ color: '#fff', marginBottom: 32, lineHeight: 0.95 }}>
              Shaping <span style={{ color: '#ea2032' }}>Vision</span><br />
              Into Landmarked Reality.
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.75,
              maxWidth: 620,
              marginBottom: 48,
            }}>
              iVision is a premier multi-disciplinary contracting company serving clients across
              Saudi Arabia. By integrating architecture, events production, custom fabrication,
              and real estate, we deliver turn-key solutions with unparalleled quality and efficiency.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/services" className="btn-primary">
                Our Services <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline-white">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO / STATS ────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        background: '#fff',
        borderBottom: '1px solid var(--white-3)',
      }}>
        <div className="container">
          <div className="grid-12" style={{
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'center',
          }} data-about-intro>
            {/* Left text */}
            <div className="col-span-5">
              <div style={{ position: 'relative' }}>
                {/* Giant watermark number */}
                <div style={{
                  position: 'absolute', top: -50, left: -10,
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(8rem, 16vw, 14rem)',
                  fontWeight: 900,
                  color: 'rgba(234,32,50,0.04)',
                  lineHeight: 1,
                  userSelect: 'none',
                  letterSpacing: '-0.05em',
                }}>01</div>

                <div style={{ position: 'relative', borderLeft: '4px solid #ea2032', paddingLeft: 28, paddingTop: 4, paddingBottom: 4 }}>
                  <div style={{
                    fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
                    letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032', marginBottom: 16,
                  }}>
                    The iVision Difference
                  </div>

                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    color: 'var(--black)',
                    marginBottom: 24,
                  }}>
                    From Blueprint<br />To Brand.<br />
                    <span style={{ color: '#ea2032' }}>One Team.</span>
                  </h2>

                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(0.875rem, 1.1vw, 1rem)',
                    color: 'var(--gray-2)',
                    lineHeight: 1.75,
                    marginBottom: 20,
                  }}>
                    Typically, clients hire separate firms for architecture, events production,
                    and temporary structural fabrication. This leads to scheduling friction,
                    mismatched brand guidelines, and soaring overheads.
                  </p>

                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(0.875rem, 1.1vw, 1rem)',
                    color: 'var(--black)',
                    fontWeight: 600,
                    lineHeight: 1.65,
                  }}>
                    iVision eliminates that compromise. We execute everything in-house in our
                    Dammam workshop, driving down costs while amplifying delivery speed.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: stat cards */}
            <div className="col-span-7 grid-2-col" style={{ gap: 20 }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  style={{
                    background: 'var(--white-2)',
                    border: '1px solid var(--white-3)',
                    padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                    clipPath: 'polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))',
                    transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = '#ea2032';
                    el.style.transform = 'translateY(-4px)';
                    el.style.boxShadow = '0 16px 40px rgba(234,32,50,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'var(--white-3)';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                    fontWeight: 900,
                    color: 'var(--black)',
                    lineHeight: 1,
                    marginBottom: 8,
                  }}>{stat.value}</div>

                  <div style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: '#ea2032',
                    marginBottom: 6,
                  }}>{stat.label}</div>

                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 12,
                    color: 'var(--gray)',
                  }}>{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive override */}
        <style>{`
          @media(max-width:900px){
            [data-about-intro] > div:first-child { grid-column: span 12 !important; }
            [data-about-intro] > div:last-child  { grid-column: span 12 !important; }
          }
        `}</style>
      </section>

      {/* ── CORE PILLARS ─────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        background: 'var(--white-2)',
        borderTop: '1px solid var(--white-3)',
        borderBottom: '1px solid var(--white-3)',
      }}>
        <div className="container">
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 40, height: 1, background: '#ea2032' }} />
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
                letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
              }}>Our Core Pillars</span>
              <div style={{ width: 40, height: 1, background: '#ea2032' }} />
            </div>
            <h2 className="display-sm" style={{ color: 'var(--black)', marginBottom: 16 }}>
              How We Operate
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.875rem, 1.1vw, 1rem)',
              color: 'var(--gray-2)',
              maxWidth: 460,
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              The principles driving our operations across Saudi Arabia.
            </p>
          </div>

          {/* Pillars grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  style={{
                    background: '#fff',
                    border: '1px solid var(--white-3)',
                    padding: 'clamp(2rem, 4vw, 3rem)',
                    clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))',
                    transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = '#ea2032';
                    el.style.transform = 'translateY(-4px)';
                    el.style.boxShadow = '0 20px 50px rgba(234,32,50,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'var(--white-3)';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: 52, height: 52,
                    background: '#ea2032',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 24,
                    clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))',
                  }}>
                    <Icon size={22} color="#fff" />
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.3rem, 2vw, 1.6rem)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                    color: 'var(--black)',
                    marginBottom: 14,
                  }}>{v.title}</h3>

                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    color: 'var(--gray-2)',
                    lineHeight: 1.7,
                  }}>{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        background: '#fff',
        borderBottom: '1px solid var(--white-3)',
      }}>
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(3.5rem, 7vw, 6rem)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 40, height: 1, background: '#ea2032' }} />
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
                letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
              }}>Our Journey</span>
              <div style={{ width: 40, height: 1, background: '#ea2032' }} />
            </div>
            <h2 className="display-sm" style={{ color: 'var(--black)', marginBottom: 16 }}>
              The Journey
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.875rem, 1.1vw, 1rem)',
              color: 'var(--gray-2)',
              maxWidth: 420,
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              A trajectory of growth, building local industrial expertise.
            </p>
          </div>

          {/* Timeline list */}
          <div style={{
            position: 'relative',
            maxWidth: 860,
            margin: '0 auto',
            paddingLeft: 'clamp(3rem, 6vw, 6rem)',
            borderLeft: '1px solid var(--white-3)',
          }}>
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{
                  position: 'relative',
                  marginBottom: i < timeline.length - 1 ? 'clamp(2.5rem, 5vw, 4rem)' : 0,
                }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: 'clamp(-3.75rem, -6.75vw, -6.75rem)',
                  top: 6,
                  width: 22, height: 22,
                  background: '#fff',
                  border: '2px solid #ea2032',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 2,
                }}>
                  <div style={{ width: 8, height: 8, background: '#ea2032', borderRadius: '50%' }} />
                </div>

                {/* Year */}
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 900,
                  color: '#ea2032',
                  lineHeight: 1,
                  marginBottom: 12,
                  letterSpacing: '-0.03em',
                }}>{item.year}</div>

                {/* Card */}
                <div style={{
                  background: 'var(--white-2)',
                  border: '1px solid var(--white-3)',
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = '#ea2032';
                    el.style.boxShadow = '0 12px 32px rgba(234,32,50,0.07)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'var(--white-3)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                    color: 'var(--black)',
                    marginBottom: 10,
                  }}>{item.title}</h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    color: 'var(--gray-2)',
                    lineHeight: 1.7,
                  }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION 2030 ──────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        background: 'var(--black)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.015) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{
          position: 'absolute', left: 0, top: 0, right: 0, bottom: 0,
          background: 'linear-gradient(135deg, rgba(234,32,50,0.12) 0%, transparent 55%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-12" style={{
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'center',
          }} data-vision-grid>
            {/* Left content */}
            <div className="col-span-7">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                <Landmark color="#ea2032" size={22} />
                <span style={{
                  fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
                  letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
                }}>Strategic Integration</span>
              </div>

              <h2 className="display-sm" style={{ color: '#fff', marginBottom: 28 }}>
                Driving Local Content in Alignment with{' '}
                <span style={{ color: '#ea2032' }}>Saudi Vision 2030</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.875rem, 1.1vw, 1rem)',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.75,
                }}>
                  Saudi Vision 2030 is reshaping the infrastructure, entertainment, and commercial
                  landscape of the Kingdom. iVision is positioned to support this growth by providing
                  comprehensive construction, modular housing, and media activation services.
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.875rem, 1.1vw, 1rem)',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.75,
                }}>
                  By maintaining a 100% in-house manufacturing process in our Dammam workshop, we
                  support national targets for local supply chain resilience, employment development,
                  and local technology integration.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {['Local Content Driven', 'Dammam Workshop', 'Kingdom-Wide Delivery'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      border: '1px solid rgba(234,32,50,0.4)',
                      background: 'rgba(234,32,50,0.08)',
                      color: '#FF3333',
                      fontFamily: 'var(--font-ui)',
                      fontSize: 10,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      padding: '10px 18px',
                    }}
                  >{tag}</span>
                ))}
              </div>
            </div>

            {/* Right card */}
            <div className="col-span-5" style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                border: '1px solid rgba(255,255,255,0.08)',
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                width: '100%',
                maxWidth: 380,
                clipPath: 'polygon(0 0,calc(100% - 24px) 0,100% 24px,100% 100%,24px 100%,0 calc(100% - 24px))',
                position: 'relative',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(6rem, 14vw, 10rem)',
                  fontWeight: 900,
                  color: 'rgba(234,32,50,0.07)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}>2030</div>

                <div style={{ marginTop: -16, position: 'relative', zIndex: 2 }}>
                  <Rocket size={52} color="#ea2032" style={{ marginBottom: 20 }} />
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    color: '#fff',
                    marginBottom: 12,
                    letterSpacing: '-0.02em',
                  }}>Kingdom Growth</div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: 1.7,
                  }}>
                    We coordinate closely with regional entities to deploy exhibitions,
                    commercial infrastructure, and fit-out programs at rapid pace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          [data-about-intro] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          [data-vision-grid] { grid-template-columns: 1fr !important; }
          [data-vision-grid] > div { grid-column: span 1 !important; }
        }
      `}</style>
    </main>
  );
}
