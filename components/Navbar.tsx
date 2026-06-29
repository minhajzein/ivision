'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

// Pages whose hero starts with a dark background — navbar can be fully transparent on load
const DARK_HERO_PAGES = ['/', '/about', '/contact', '/services', '/portfolio', '/services/architecture', '/services/events-media', '/services/portable-cabins', '/services/real-estate'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const hasDarkHero = DARK_HERO_PAGES.includes(pathname);

  useEffect(() => {
    // Close menu on route change
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Determine nav appearance
  const isOpaque = scrolled || !hasDarkHero;

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'background 0.4s ease, box-shadow 0.4s ease, padding 0.4s ease',
          background: isOpaque ? 'rgba(10,10,10,0.95)' : 'transparent',
          backdropFilter: isOpaque ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isOpaque ? 'blur(16px)' : 'none',
          borderBottom: isOpaque ? '1px solid rgba(234,32,50,0.15)' : 'none',
          padding: scrolled ? '12px 0' : '20px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Image
              src="/logo-white.png"
              alt="iVision"
              width={180}
              height={56}
              style={{ height: 48, width: 'auto', objectFit: 'contain' }}
              priority
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Links */}
          <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: active ? '#ea2032' : 'rgba(255,255,255,0.75)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#ea2032')}
                  onMouseLeave={e => (e.currentTarget.style.color = active ? '#ea2032' : 'rgba(255,255,255,0.75)')}
                >
                  {label}
                  {active && (
                    <span style={{
                      position: 'absolute',
                      bottom: -4, left: 0,
                      width: '100%', height: 2,
                      background: '#ea2032',
                    }} />
                  )}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: 11 }}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-burger"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#fff',
              padding: 8,
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(10,10,10,0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 32,
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: '#fff', cursor: 'none' }}
          >
            <X size={28} />
          </button>

          {/* Brand in mobile menu */}
          <div style={{ position: 'absolute', top: 20, left: 28 }}>
            <Image
              src="/logo-white.png"
              alt="iVision"
              width={150}
              height={48}
              style={{ height: 40, width: 'auto', objectFit: 'contain' }}
            />
          </div>

          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                color: pathname === href ? '#ea2032' : '#fff',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ea2032')}
              onMouseLeave={e => (e.currentTarget.style.color = pathname === href ? '#ea2032' : '#fff')}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px',
              background: '#ea2032', color: '#fff',
              fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase',
              textDecoration: 'none', marginTop: 8,
              clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))',
            }}
          >
            Get a Quote
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
