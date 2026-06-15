'use client';
import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.fade-up, .fade-in');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach(el => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
