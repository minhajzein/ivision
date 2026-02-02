"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: x,
        y: y,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseEnterLink = () => setIsHovering(true);
    const onMouseLeaveLink = () => setIsHovering(false);

    const attachListeners = () => {
      const links = document.querySelectorAll("a, button, .cursor-pointer");
      links.forEach((link) => {
        link.addEventListener("mouseenter", onMouseEnterLink);
        link.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    attachListeners();

    // Re-attach listeners periodically or on DOM changes if needed
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      const links = document.querySelectorAll("a, button, .cursor-pointer");
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  useEffect(() => {
    if (isHovering) {
      gsap.to(cursorRef.current, {
        scale: 2,
        backgroundColor: "white",
        mixBlendMode: "difference",
        duration: 0.2,
      });
      gsap.to(followerRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.2,
      });
    } else {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: "#f21025",
        mixBlendMode: "normal",
        duration: 0.2,
      });
      gsap.to(followerRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
      });
    }
  }, [isHovering]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-primary/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
