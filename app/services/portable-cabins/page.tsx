'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container, Hammer, Settings, ShieldAlert, ArrowRight, CheckCircle, Layers } from 'lucide-react';

const coreServices = [
  { icon: Layers, title: 'Site Office Units', desc: 'Sleek corporate-standard site offices with built-in networking, HVAC preparation, and executive areas.' },
  { icon: ShieldAlert, title: 'Anti-Vandal Cabins', desc: 'Secure modular cabins built with reinforced heavy-duty steel and multi-point lock systems.' },
  { icon: Settings, title: 'Retail Kiosks & Coffee Pods', desc: 'Custom architectural kiosks designed for pop-up shops, tourist spots, and parks.' },
  { icon: Hammer, title: 'Custom Prefabricated Designs', desc: 'Specialized modular units fabricated to match specific size, layouts, and accessory needs.' },
];

const processSteps = [
  { num: '01', title: 'Requirements & Layout', desc: 'We assess site conditions, capacity needs, and regulatory requirements before drafting floor plans and module dimensions.' },
  { num: '02', title: 'Frame & Panel Fabrication', desc: 'Structural steel frames and insulated sandwich panels are cut, welded, and assembled in our Dammam workshop.' },
  { num: '03', title: 'MEP & Interior Fit-out', desc: 'Electrical wiring, HVAC conduits, flooring, and interior finishes are installed under strict quality controls.' },
  { num: '04', title: 'Delivery & Site Installation', desc: 'Completed units are transported, positioned on-site, and connected for immediate operational use.' },
];

const specs = [
  'Structural Steel Frame',
  'Sandwich Panel Cladding',
  'SASO Electrical Systems',
  'Interior Finish Packages',
  'HVAC Preparation',
  'Transport-Ready Modules',
];

export default function PortableCabinsService() {
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
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.015) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(234,32,50,0.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)',
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
        }}>CABINS</div>

        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            marginBottom: 32,
            fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 600,
            letterSpacing: '3px', textTransform: 'uppercase',
          }}>
            <Link href="/services" style={{
              color: 'rgba(255,255,255,0.45)',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ea2032')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
            >Services</Link>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
            <span style={{ color: '#ea2032' }}>Portable Cabins</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: 800 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <div style={{
                width: 40, height: 40, background: '#ea2032',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                clipPath: 'polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))',
              }}>
                <Container size={18} color="#fff" />
              </div>
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700,
                letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
              }}>Division 03</span>
            </div>

            <h1 className="display-lg" style={{ color: '#fff', marginBottom: 24, lineHeight: 0.95 }}>
              Portable Cabins &{' '}
              <span style={{ color: '#ea2032' }}>Modular</span>{' '}
              Fabrication
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75,
              maxWidth: 580,
            }}>
              Heavy-duty site offices, custom accommodation cabins, pop-up commercial kiosks, and
              anti-vandal units — built entirely in-house at our workshop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES ────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        background: '#fff',
        borderBottom: '1px solid var(--white-3)',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'start',
          }}>
            <div style={{ gridColumn: 'span 5' }}>
              <div style={{ width: 48, height: 3, background: '#ea2032', marginBottom: 24 }} />
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                color: 'var(--black)',
                marginBottom: 20,
              }}>Dammam Workshop Built</h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
                color: 'var(--gray-2)',
                lineHeight: 1.75,
              }}>
                Many suppliers act as brokers, outsourcing fabrication to third-party yards, which
                can introduce delays and quality issues. iVision builds every cabin in-house. Our
                technicians assemble each unit from structural steel frame to final electrical wiring
                under strict quality controls.
              </p>
            </div>

            <div style={{
              gridColumn: 'span 7',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
            }}>
              {coreServices.map((srv, i) => {
                const Icon = srv.icon;
                return (
                  <motion.div
                    key={srv.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{
                      border: '1px solid var(--white-3)',
                      padding: 'clamp(1.5rem, 2.5vw, 2rem)',
                      background: 'var(--white-2)',
                      clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = '#ea2032';
                      el.style.boxShadow = '0 12px 32px rgba(234,32,50,0.08)';
                      el.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = 'var(--white-3)';
                      el.style.boxShadow = 'none';
                      el.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{
                      width: 40, height: 40, background: 'var(--black)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 16,
                      clipPath: 'polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))',
                    }}>
                      <Icon size={18} color="#ea2032" />
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      color: 'var(--black)',
                      letterSpacing: '0.01em',
                      marginBottom: 10,
                    }}>{srv.title}</h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 12,
                      color: 'var(--gray-2)',
                      lineHeight: 1.65,
                    }}>{srv.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECS ──────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        background: 'var(--black)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(234,32,50,0.1) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.015) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'center',
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                border: '1px solid rgba(234,32,50,0.2)',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                clipPath: 'polygon(0 0,calc(100% - 24px) 0,100% 24px,100% 100%,24px 100%,0 calc(100% - 24px))',
                textAlign: 'center',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
                letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
                display: 'block', marginBottom: 20,
              }}>Fabrication Standards</span>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.05)',
                textTransform: 'uppercase',
                lineHeight: 1,
                userSelect: 'none',
                marginBottom: 24,
              }}>MODULAR</div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7,
                maxWidth: 340,
                margin: '0 auto',
              }}>
                We fabricate frames and channel supports to handle standard transport loads, allowing
                modules to be repositioned across site projects with ease.
              </p>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ flexShrink: 0, display: 'flex' }}><Layers color="#ea2032" size={20} /></span>
                <span style={{
                  fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
                  letterSpacing: '3px', textTransform: 'uppercase', color: '#ea2032',
                }}>Material Specifications</span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
              }}>High-Grade Modular Elements</h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.75,
              }}>
                We build our modules using SASO-approved materials. Polyurethane insulation provides
                thermal protection for hot regions, and rockwool core options are available to meet
                fire safety requirements.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {specs.map((spec) => (
                  <div key={spec} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle size={14} color="#ea2032" style={{ flexShrink: 0 }} />
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.8)',
                    }}>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        background: '#fff',
        borderBottom: '1px solid var(--white-3)',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 40, height: 1, background: '#ea2032' }} />
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
                letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
              }}>Our Process</span>
              <div style={{ width: 40, height: 1, background: '#ea2032' }} />
            </div>
            <h2 className="display-sm" style={{ color: 'var(--black)', marginBottom: 16 }}>
              The Fabrication Lifecycle
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
              color: 'var(--gray-2)',
              maxWidth: 420,
              margin: '0 auto',
              lineHeight: 1.7,
            }}>A structured roadmap from requirements to workshop build and site delivery.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20,
          }}>
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: 'var(--white-2)',
                  border: '1px solid var(--white-3)',
                  padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                  clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))',
                  transition: 'border-color 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = '#ea2032';
                  el.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'var(--white-3)';
                  el.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 900,
                  color: '#ea2032',
                  lineHeight: 1,
                  marginBottom: 16,
                }}>{step.num}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  color: 'var(--black)',
                  marginBottom: 10,
                }}>{step.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'var(--gray-2)',
                  lineHeight: 1.65,
                }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────── */}
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
          }}>Need Modular Office or Housing Cabins?</h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: 520,
            margin: '0 auto 36px',
            lineHeight: 1.7,
          }}>
            Our modular production team can provide custom fabrication quotes, floor plans, and
            delivery timelines across the Eastern Province and beyond.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase',
              background: 'var(--black)', color: '#fff',
              padding: '16px 40px',
              clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))',
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = '#fff';
              el.style.color = '#ea2032';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = 'var(--black)';
              el.style.color = '#fff';
            }}
          >
            Request Cabin Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
