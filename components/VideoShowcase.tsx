'use client';

const VIDEOS = [
  { src: '/videos/0.mov', title: 'Project Film 01' },
  { src: '/videos/1.mp4', title: 'Project Film 02' },
  { src: '/videos/2.mp4', title: 'Project Film 03' },
  { src: '/videos/3.mp4', title: 'Project Film 04' },
];

export default function VideoShowcase() {
  return (
    <section
      className="section-pad"
      style={{
        background: '#fff',
        borderTop: '1px solid var(--white-3)',
        borderBottom: '1px solid var(--white-3)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 40, height: 2, background: '#ea2032' }} />
            <span style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#ea2032',
            }}>In Action</span>
          </div>
          <h2 className="display-sm" style={{ color: 'var(--black)' }}>
            See Our Work <span style={{ color: '#ea2032' }}>Unfold</span>
          </h2>
        </div>

        <div className="video-showcase-grid">
          {VIDEOS.map((video, i) => (
            <div
              key={video.src}
              className="fade-up"
              style={{
                background: 'var(--black)',
                border: '1px solid var(--white-3)',
                clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))',
                overflow: 'hidden',
              }}
            >
              <video
                src={video.src}
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{
                  display: 'block',
                  width: '100%',
                  aspectRatio: '16 / 9',
                  objectFit: 'cover',
                  background: 'var(--black)',
                }}
              />
              <div style={{
                padding: '12px 16px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                background: 'var(--black)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: '#ea2032',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.55)',
                  marginLeft: 10,
                }}>
                  {video.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .video-showcase-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(1rem, 2vw, 1.25rem);
        }
        @media (max-width: 1100px) {
          .video-showcase-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .video-showcase-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
