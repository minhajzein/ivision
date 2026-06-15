'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    // Phase 0 → reveal logo (200ms)
    timerRef.current = setTimeout(() => setPhase(1), 200);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  useEffect(() => {
    if (phase === 1) {
      timerRef.current = setTimeout(() => setPhase(2), 1200);
    } else if (phase === 2) {
      timerRef.current = setTimeout(() => setPhase(3), 600);
    } else if (phase === 3) {
      timerRef.current = setTimeout(() => onComplete(), 700);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [phase, onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        opacity: phase === 3 ? 0 : 1,
        transition: phase === 3 ? 'opacity 0.7s ease' : 'none',
        pointerEvents: phase === 3 ? 'none' : 'all',
      }}
    >
      {/* Animated grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(to right,rgba(234,32,50,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(234,32,50,0.04) 1px,transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* iVision icon mark — large, animated */}
      <div
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)',
          position: 'relative',
          zIndex: 10,
          marginBottom: 28,
          filter: 'drop-shadow(0 0 32px rgba(234,32,50,0.5))',
        }}
      >
        <Image
          src="/logo-icon.png"
          alt="iVision icon"
          width={96}
          height={96}
          style={{ width: 96, height: 96, objectFit: 'contain' }}
          priority
        />
      </div>

      {/* iVision full wordmark */}
      <div
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.6s ease 0.15s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Image
          src="/logo-white.png"
          alt="iVision"
          width={220}
          height={70}
          style={{ height: 56, width: 'auto', objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Tagline */}
      <div
        style={{
          fontFamily: 'var(--font-ui,"Inter",sans-serif)',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '6px',
          color: '#888',
          textTransform: 'uppercase',
          marginTop: 20,
          opacity: phase >= 1 ? 1 : 0,
          transition: 'opacity 0.8s ease 0.4s',
          position: 'relative',
          zIndex: 10,
        }}
      >
        Build&nbsp;&nbsp;·&nbsp;&nbsp;Brand&nbsp;&nbsp;·&nbsp;&nbsp;Deliver
      </div>

      {/* Red line reveal wipe */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '3px',
          background: '#ea2032',
          width: phase >= 1 ? '100%' : '0%',
          transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s',
        }}
      />
    </div>
  );
}
