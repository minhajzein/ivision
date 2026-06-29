'use client';

const ITEMS = [
  'Architecture & Fit-out',
  '·',
  'Events & Media Production',
  '·',
  'Portable Cabins & Modular',
  '·',
  'Real Estate Advisory',
  '·',
  'Saudi Vision 2030',
  '·',
  'Kingdom of Saudi Arabia',
  '·',
  'Turn-key Solutions',
  '·',
  'In-house Workshop',
  '·',
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      style={{
        background: '#ea2032',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '14px 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="marquee-track" style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: item === '·' ? 'rgba(255,255,255,0.4)' : '#fff',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
