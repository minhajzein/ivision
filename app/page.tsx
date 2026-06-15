'use client';
import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Workshop from '@/components/Workshop';
import CTABand from '@/components/CTABand';
import Contact from '@/components/Contact';

const IntroAnimation = dynamic(() => import('@/components/IntroAnimation'), {
  ssr: false,
});

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
    setTimeout(() => setContentVisible(true), 100);
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      <main
        style={{
          opacity: contentVisible ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Services />
        <Workshop />
        <CTABand />
        <Contact />
      </main>
    </>
  );
}
