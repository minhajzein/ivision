'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observed = new WeakSet<Element>();

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

    const observeEl = (el: Element) => {
      if (observed.has(el)) return;
      if (!el.classList.contains('fade-up') && !el.classList.contains('fade-in')) return;
      observed.add(el);
      io.observe(el);
    };

    const scan = (root: ParentNode) => {
      if (root instanceof Element) observeEl(root);
      root.querySelectorAll('.fade-up, .fade-in').forEach(observeEl);
    };

    scan(document.body);

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node instanceof Element) scan(node);
        });
      });
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
