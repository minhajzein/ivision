'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Landmark, FileCheck, Building2, ArrowRight, TrendingUp, CheckCircle, MapPin } from 'lucide-react';

const coreServices = [
  { icon: Landmark, title: 'Corporate Leasing', desc: 'Tenant mapping, contract drafting, rent collection workflows, and structural management coordination.' },
  { icon: TrendingUp, title: 'Investment Advisory', desc: 'Market feasibility study reports, yield calculations, and property portfolio evaluations.' },
  { icon: Building2, title: 'Commercial Management', desc: 'Facility coordinate maintenance, vendor management, and utility billing control.' },
  { icon: FileCheck, title: 'Regulatory Compliance', desc: 'Ejaar system integration, municipality clearance filings, and civil defense certification.' },
];

const processSteps = [
  { num: '01', title: 'Portfolio Assessment', desc: 'We review asset performance, tenant mix, lease terms, and regional market conditions across your holdings.' },
  { num: '02', title: 'Advisory & Strategy', desc: 'Feasibility studies, yield optimization models, and leasing strategies aligned with Vision 2030 objectives.' },
  { num: '03', title: 'Operations & Compliance', desc: 'Ejaar integration, municipality filings, facility management, and regulatory certification workflows.' },
  { num: '04', title: 'Ongoing Management', desc: 'Tenant coordination, rent collection, maintenance oversight, and portfolio performance reporting.' },
];

const specs = [
  'Dammam Commercial Zone',
  'Al Khobar Business District',
  'Jubail Industrial City',
  'Riyadh Project Portfolios',
  'Ejaar System Integration',
  'Vision 2030 Alignment',
];

export default function RealEstateService() {
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
        <div className="page-watermark" style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-display)', fontSize: 'clamp(8rem, 18vw, 20rem)', fontWeight: 900, color: 'rgba(255,255,255,0.03)', textTransform: 'uppercase', letterSpacing: '-0.05em', lineHeight: 1, userSelect: 'none', zIndex: 1, whiteSpace: 'nowrap' }}>ASSETS</div>

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
            <span style={{ color: '#ea2032' }}>Real Estate & Advisory</span>
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
                <Home size={18} color="#fff" />
              </div>
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700,
                letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
              }}>Division 04</span>
            </div>

            <h1 className="display-lg" style={{ color: '#fff', marginBottom: 24, lineHeight: 0.95 }}>
              Real Estate &{' '}
              <span style={{ color: '#ea2032' }}>Property</span>{' '}
              Advisory
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75,
              maxWidth: 580,
            }}>
              Commercial leasing management, yield optimization advisory, and comprehensive real
              estate facility workflows across the Eastern Province — aligned with Saudi Vision 2030
              development models.
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
          <div className="grid-12" style={{ gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'start' }}>
            <div className="col-span-5">
              <div style={{ width: 48, height: 3, background: '#ea2032', marginBottom: 24 }} />
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                color: 'var(--black)',
                marginBottom: 20,
              }}>Corporate Property Advisory</h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
                color: 'var(--gray-2)',
                lineHeight: 1.75,
              }}>
                Managing commercial real estate requires coordination between legal, operations, and
                facility teams. iVision provides integrated services, handling tenant positioning,
                regulatory compliance, and facility maintenance through a single point of contact.
              </p>
            </div>

            <div className="col-span-7 grid-2-col" style={{ gap: 20 }}>
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
          <div className="grid-split-2" style={{ gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'center' }}>
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
              }}>Aligned With</span>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.05)',
                textTransform: 'uppercase',
                lineHeight: 1,
                userSelect: 'none',
                marginBottom: 8,
              }}>VISION</div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                fontWeight: 900,
                color: '#ea2032',
                lineHeight: 1,
                marginBottom: 24,
              }}>2030</div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7,
                maxWidth: 340,
                margin: '0 auto',
              }}>
                Our real estate advisory practices align with Kingdom objectives, prioritizing
                sustainable commercial growth and smart city development.
              </p>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ flexShrink: 0, display: 'flex' }}><MapPin color="#ea2032" size={20} /></span>
                <span style={{
                  fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
                  letterSpacing: '3px', textTransform: 'uppercase', color: '#ea2032',
                }}>Market Focus</span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
              }}>Eastern Province Coverage</h2>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.75,
              }}>
                Our leasing and management teams operate primarily in the Dammam, Khobar, and Jubail
                commercial zones. We track regional demand patterns and regulatory requirements to
                help optimize asset performance.
              </p>
              <div className="grid-2-col" style={{ gap: 12 }}>
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
              The Advisory Lifecycle
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
              color: 'var(--gray-2)',
              maxWidth: 420,
              margin: '0 auto',
              lineHeight: 1.7,
            }}>A structured roadmap from portfolio assessment to ongoing property management.</p>
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
          }}>Looking for Property Management or Leasing Solutions?</h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: 520,
            margin: '0 auto 36px',
            lineHeight: 1.7,
          }}>
            Contact our property advisory group. We provide feasibility studies, lease assessments,
            and portfolio coordinate management models.
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
            Consult Our Real Estate Team <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
