'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Film, Mic, Megaphone, Play, ArrowRight, CheckCircle, Monitor } from 'lucide-react';

const coreServices = [
  { icon: Mic, title: 'LED & Stage Production', desc: 'Custom structural stages, truss structures, high-definition LED displays, and custom audio engineering.' },
  { icon: Megaphone, title: 'Corporate Exhibitions', desc: 'Full coordination, layout zoning, shell scheme building, and brand activation pop-ups.' },
  { icon: Film, title: 'Media & Videography', desc: 'Professional event photography, 4K multi-camera filming, and rapid post-production delivery.' },
  { icon: Monitor, title: 'Brand Activations', desc: 'Interactive visual spaces designed to capture visitor attention and drive brand engagement at scale.' },
];

const processSteps = [
  { num: '01', title: 'Briefing & Concept', desc: 'We review event objectives, venue constraints, audience flow, and brand guidelines before any layout work begins.' },
  { num: '02', title: 'Stage Design & Fabrication', desc: 'Custom staging, backdrops, and exhibition elements are drafted and built in our Dammam workshop.' },
  { num: '03', title: 'On-site Setup & AV', desc: 'Our technicians deploy LED walls, truss systems, lighting rigs, and audio arrays with full on-site coordination.' },
  { num: '04', title: 'Live Production & Delivery', desc: 'Event execution, media capture, and post-production handover — all managed by a single in-house crew.' },
];

const specs = [
  'LED Wall Configurations',
  'Media Production Crews',
  'Staging Capabilities',
  'Exhibition Stands',
  'Truss & Rigging Systems',
  'Post-Production Delivery',
];

export default function EventsMediaService() {
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
        }}>MEDIA</div>

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
            <span style={{ color: '#ea2032' }}>Events & Media</span>
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
                <Calendar size={18} color="#fff" />
              </div>
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700,
                letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
              }}>Division 02</span>
            </div>

            <h1 className="display-lg" style={{ color: '#fff', marginBottom: 24, lineHeight: 0.95 }}>
              Events &{' '}
              <span style={{ color: '#ea2032' }}>Media</span>{' '}
              Production
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75,
              maxWidth: 580,
            }}>
              End-to-end event production, stage engineering, high-fidelity corporate brand setups,
              and professional videography — all executed in-house across Saudi Arabia.
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
              }}>Staging & Production Experts</h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
                color: 'var(--gray-2)',
                lineHeight: 1.75,
              }}>
                Exhibition coordination can be complex, often requiring different vendors for stage
                building, LED displays, signage, and video documentation. iVision manages the entire
                process — we fabricate staging and set pieces in our workshop and handle media
                production with our in-house team.
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
              }}>Staging Systems</span>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.05)',
                textTransform: 'uppercase',
                lineHeight: 1,
                userSelect: 'none',
                marginBottom: 24,
              }}>EVENTS</div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7,
                maxWidth: 340,
                margin: '0 auto',
              }}>
                We fabricate custom branding displays, backdrops, and exhibition elements in our
                Dammam workshop, ensuring quality assembly for every event.
              </p>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ flexShrink: 0, display: 'flex' }}><Play color="#ea2032" size={20} /></span>
                <span style={{
                  fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
                  letterSpacing: '3px', textTransform: 'uppercase', color: '#ea2032',
                }}>Technical Specifications</span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
              }}>Reliable Event Support</h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.75,
              }}>
                Our inventory of LED displays, truss systems, and AV gear is maintained and deployed
                by our own technicians. We handle all logistics and assembly, reducing coordination
                risks and keeping your event setups on schedule.
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
              The Production Lifecycle
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
              color: 'var(--gray-2)',
              maxWidth: 420,
              margin: '0 auto',
              lineHeight: 1.7,
            }}>A structured roadmap from event briefing to live production and delivery.</p>
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
          }}>Planning an Exhibition or Staging?</h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: 520,
            margin: '0 auto 36px',
            lineHeight: 1.7,
          }}>
            Contact our events team. We provide layout mockups, equipment lists, and pricing
            estimates for exhibitions and corporate stagings.
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
            Request Event Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
