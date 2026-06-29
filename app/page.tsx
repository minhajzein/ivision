'use client';
import { useState, useCallback, useLayoutEffect } from 'react';
import dynamic from 'next/dynamic';

import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import ClientLogosMarquee from '@/components/ClientLogosMarquee';
import Workshop from '@/components/Workshop';
import VideoShowcase from '@/components/VideoShowcase';
import CTABand from '@/components/CTABand';
import Contact from '@/components/Contact';

const IntroAnimation = dynamic(() => import('@/components/IntroAnimation'), {
  ssr: false,
});

const INTRO_SEEN_KEY = 'ivision-intro-seen';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useLayoutEffect(() => {
    if (sessionStorage.getItem(INTRO_SEEN_KEY)) {
      setShowIntro(false);
      setContentVisible(true);
    }
  }, []);

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem(INTRO_SEEN_KEY, '1');
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
        <ClientLogosMarquee />
        <Services />
        <Workshop />
        <VideoShowcase />
        <CTABand />
        <Contact />
      </main>
    </>
  );
}
