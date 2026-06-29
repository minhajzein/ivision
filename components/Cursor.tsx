'use client';
import { useEffect, useRef, useState } from 'react';

function useFinePointer() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return enabled;
}

export default function Cursor() {
  const finePointer = useFinePointer();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!finePointer) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      ring.style.transform = `translate(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      dot.style.width = '14px';
      dot.style.height = '14px';
      dot.style.background = '#FF3333';
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = '#FF3333';
      ring.style.opacity = '0.6';
    };

    const onLeaveLink = () => {
      dot.style.width = '8px';
      dot.style.height = '8px';
      dot.style.background = '#ea2032';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = '#ea2032';
      ring.style.opacity = '1';
    };

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    const links = document.querySelectorAll('a, button');
    links.forEach(el => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    const observer = new MutationObserver(() => {
      const newLinks = document.querySelectorAll('a, button');
      newLinks.forEach(el => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [finePointer]);

  if (!finePointer) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          width: 8, height: 8,
          background: '#ea2032',
          borderRadius: '50%',
          position: 'fixed',
          top: 0, left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease',
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width: 36, height: 36,
          border: '1.5px solid #ea2032',
          borderRadius: '50%',
          position: 'fixed',
          top: 0, left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, opacity 0.3s ease',
          willChange: 'transform',
        }}
      />
    </>
  );
}
