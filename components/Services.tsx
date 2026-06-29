'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Building2, Calendar, Container, Home, ArrowRight, ChevronRight } from 'lucide-react';

const SERVICES = [
  {
    id: 'architecture',
    number: '01',
    icon: Building2,
    title: 'Architecture & Fit-out',
    href: '/services/architecture',
    short: 'Blueprint to build — structural planning, engineering, and premium interior fit-outs.',
    tags: ['Structural Design', 'Interior Fit-out', 'Project Management', 'Smart Systems'],
    stat: '250+ Projects',
    dark: true,
  },
  {
    id: 'events',
    number: '02',
    icon: Calendar,
    title: 'Events & Media Production',
    href: '/services/events-media',
    short: 'National exhibitions, corporate events, LED stages, photography & post-production.',
    tags: ['Stage Construction', 'LED Systems', 'Photography', 'Brand Activation'],
    stat: '180+ Events',
    dark: false,
  },
  {
    id: 'cabins',
    number: '03',
    icon: Container,
    title: 'Portable Cabins & Modular',
    href: '/services/portable-cabins',
    short: 'In-house prefabricated site offices, retail pods, and modular housing systems.',
    tags: ['Site Offices', 'Anti-Vandal Units', 'Retail Kiosks', 'Modular Housing'],
    stat: '70+ Units',
    dark: true,
  },
  {
    id: 'realestate',
    number: '04',
    icon: Home,
    title: 'Real Estate & Property',
    href: '/services/real-estate',
    short: 'Acquisition advisory, market evaluations, and commercial property management.',
    tags: ['Investment Advisory', 'Market Analysis', 'Commercial Leasing', 'Portfolio Mgmt'],
    stat: 'SAR 2B+ Managed',
    dark: false,
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState('architecture');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <section className="section-pad" style={{ background: 'var(--white-2)', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div className="services-header" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(2rem,5vw,4rem)', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 2, background: '#ea2032' }} />
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
                letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
              }}>Our Capabilities</span>
            </div>
            <h2 className="display-md fade-up" style={{ color: 'var(--black)' }}>
              Four Divisions.<br /><span style={{ color: '#ea2032' }}>One Team.</span>
            </h2>
          </div>
          <Link href="/services" className="btn-outline fade-up delay-2" style={{ fontSize: 12 }}>
            All Services <ArrowRight size={14} />
          </Link>
        </div>

        {/* Desktop: Accordion-style cards */}
        <div className="services-accordion" style={{ display: 'flex', gap: 0, minHeight: 480, border: '1px solid var(--white-3)' }}>
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            const isActive = isMobile || activeId === svc.id;
            return (
              <div
                key={svc.id}
                onMouseEnter={() => !isMobile && setActiveId(svc.id)}
                style={{
                  flex: isActive ? 4 : 1,
                  background: svc.dark ? 'var(--black)' : '#fff',
                  color: svc.dark ? '#fff' : 'var(--black)',
                  padding: isActive ? 'clamp(2rem,4vw,3rem)' : '2rem 1.5rem',
                  transition: 'flex 0.6s cubic-bezier(0.16,1,0.3,1), padding 0.4s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                  cursor: 'default',
                  borderRight: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative',
                }}
              >
                {/* BG grid on dark cards */}
                {svc.dark && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.015) 1px,transparent 1px)',
                    backgroundSize: '24px 24px',
                    pointerEvents: 'none',
                  }} />
                )}

                {/* Red accent on active */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, width: 3,
                  height: isActive ? '100%' : '0%',
                  background: '#ea2032',
                  transition: 'height 0.5s ease',
                }} />

                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* Number */}
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: isActive ? 'clamp(4rem,8vw,6rem)' : '1.5rem',
                    fontWeight: 900,
                    color: svc.dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                    lineHeight: 1,
                    transition: 'font-size 0.4s ease',
                    userSelect: 'none',
                    position: 'absolute',
                    top: 0, right: 0,
                  }}>{svc.number}</div>

                  {/* Icon */}
                  <div style={{
                    width: isActive ? 52 : 36,
                    height: isActive ? 52 : 36,
                    background: '#ea2032',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: isActive ? 20 : 12,
                    transition: 'all 0.4s ease',
                    clipPath: 'polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))',
                  }}>
                    <Icon size={isActive ? 22 : 16} color="#fff" />
                  </div>

                  {/* Title */}
                  <h3 className="service-card-title" style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: isActive ? 'clamp(1.4rem,2.5vw,2rem)' : '0.85rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: isActive ? '-0.02em' : '0.02em',
                    color: svc.dark ? '#fff' : 'var(--black)',
                    lineHeight: 1.1,
                    transition: 'all 0.4s ease',
                    marginBottom: isActive ? 16 : 0,
                    writingMode: isActive ? 'horizontal-tb' : 'vertical-lr',
                    transform: isActive ? 'none' : 'rotate(180deg)',
                  }}>{svc.title}</h3>

                  {/* Expanded content */}
                  <div style={{
                    opacity: isActive ? 1 : 0,
                    height: isActive ? 'auto' : 0,
                    overflow: 'hidden',
                    transition: 'opacity 0.4s ease 0.1s',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'clamp(0.85rem,1.1vw,1rem)',
                      color: svc.dark ? 'rgba(255,255,255,0.55)' : 'var(--gray-2)',
                      lineHeight: 1.7,
                      marginBottom: 24,
                      maxWidth: 420,
                    }}>{svc.short}</p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                      {svc.tags.map(tag => (
                        <span key={tag} style={{
                          fontFamily: 'var(--font-ui)',
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          color: '#ea2032',
                          background: 'rgba(234,32,50,0.1)',
                          border: '1px solid rgba(234,32,50,0.2)',
                          padding: '4px 10px',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 0.3s ease 0.2s',
                  position: 'relative', zIndex: 2,
                  paddingTop: 20,
                  borderTop: `1px solid ${svc.dark ? 'rgba(255,255,255,0.08)' : 'var(--white-3)'}`,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-ui)', fontSize: 9, fontWeight: 700,
                    letterSpacing: '3px', textTransform: 'uppercase', color: '#ea2032',
                  }}>{svc.stat}</span>
                  <Link
                    href={svc.href}
                    style={{
                      width: 36, height: 36,
                      background: '#ea2032',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      clipPath: 'polygon(0 0,calc(100% - 4px) 0,100% 4px,100% 100%,4px 100%,0 calc(100% - 4px))',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#FF3333')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#ea2032')}
                  >
                    <ArrowRight size={14} color="#fff" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
