'use client';
import Image from 'next/image';

const CLIENT_LOGOS = [
  { name: 'Aramco', src: '/companies/ARAMCO.png' },
  { name: 'Abu Dawood', src: '/companies/ABUDAWOOD.png' },
  { name: 'Arabian', src: '/companies/ARABIAN.png' },
  { name: 'Malabar', src: '/companies/MALABAR.png' },
  { name: 'Al Othman', src: '/companies/ALOTHMAN.png' },
  { name: 'Blue Print', src: '/companies/BLUE PRINT.png' },
  { name: 'Solas', src: '/companies/SOLAS.png' },
  { name: 'Over The Top', src: '/companies/OVER THE TOP.png' },
  { name: 'Environmental', src: '/companies/environmental.png' },
  { name: 'Up Lift', src: '/companies/UP LIFT.png' },
  { name: 'AV', src: '/companies/AV.png' },
  { name: 'Connect', src: '/companies/connect.png' },
  { name: 'Ayyan', src: '/companies/AYYAN.png' },
  { name: 'SSC', src: '/companies/SSC.png' },
  { name: 'NDTCCS', src: '/companies/NDTCCS-FINAL co.png' },
  { name: 'Nisha', src: '/companies/NISHA.png' },
  { name: 'Aesseal', src: '/companies/AESSEAL LOGO.png' },
  { name: 'Badr', src: '/companies/badr logo.png' },
  { name: 'Salvaje', src: '/companies/SALVAJE.png' },
  { name: 'ALMC', src: '/companies/almclogo.png' },
  { name: 'Bench', src: '/companies/BENCH_.png' },
  { name: 'Takween', src: '/companies/takween.png' },
  { name: 'Joyalukkas', src: '/companies/JOYALUKKAS.png' },
  { name: 'SSMS', src: '/companies/SSMS.png' },
  { name: 'Al Ambra', src: '/companies/AL_AMBRA.png' },
  { name: 'Kempinski Al Othman', src: '/companies/kempinski-al-othman.png' },
  { name: 'Reza Hygiene', src: '/companies/REZA HYGIENE.png' },
  { name: 'Bard', src: '/companies/BARD.png' },
  { name: 'Nada', src: '/companies/nada.png' },
];

function logoSrc(path: string) {
  const lastSlash = path.lastIndexOf('/');
  if (lastSlash === -1) return encodeURIComponent(path);
  return `${path.slice(0, lastSlash + 1)}${encodeURIComponent(path.slice(lastSlash + 1))}`;
}

export default function ClientLogosMarquee() {
  const track = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      style={{
        background: 'var(--white-2)',
        borderTop: '1px solid var(--white-3)',
        borderBottom: '1px solid var(--white-3)',
        padding: 'clamp(3rem, 6vw, 5rem) 0',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{ width: 40, height: 1, background: '#ea2032' }} />
          <span style={{
            fontFamily: 'var(--font-ui)',
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#ea2032',
          }}>Our Clients</span>
        </div>
        <h2 className="display-sm" style={{ color: 'var(--black)' }}>
          Trusted Across Saudi Arabia
        </h2>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 'clamp(2rem, 8vw, 6rem)',
          background: 'linear-gradient(to right, var(--white-2), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 'clamp(2rem, 8vw, 6rem)',
          background: 'linear-gradient(to left, var(--white-2), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        <div
          className="marquee-track marquee-track-logos"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(3rem, 6vw, 5rem)',
            width: 'max-content',
          }}
        >
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              style={{
                flexShrink: 0,
                width: 'clamp(100px, 12vw, 150px)',
                height: 'clamp(44px, 6vw, 64px)',
                position: 'relative',
              }}
            >
              <Image
                src={logoSrc(logo.src)}
                alt={`${logo.name} logo`}
                fill
                sizes="150px"
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track-logos {
          animation: marquee 55s linear infinite;
        }
      `}</style>
    </section>
  );
}
