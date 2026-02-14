"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

interface SubHeroProps {
  title: string;
  subtitle?: string;
  variant?: "default" | "organic" | "grid" | "network" | "cinematic";
}

export function SubHero({
  title,
  subtitle,
  variant = "cinematic",
}: SubHeroProps) {
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visualRef.current) return;

    const ctx = gsap.context(() => {
      const container = visualRef.current!;
      container.innerHTML = ""; // Clear previous animations

      const createGrid = (opacity = 0.2) => {
        const gridWrapper = document.createElement("div");
        gridWrapper.className = `absolute inset-0 grid grid-cols-12 gap-2 opacity-${Math.floor(opacity * 100)} p-4`;
        for (let i = 0; i < 48; i++) {
          const cell = document.createElement("div");
          cell.className = "border-[0.5px] border-primary/20 aspect-square";
          gridWrapper.appendChild(cell);
          gsap.to(cell, {
            backgroundColor: "rgba(255, 0, 0, 0.05)",
            duration: "random(2, 5)",
            repeat: -1,
            yoyo: true,
            delay: Math.random() * 2,
          });
        }
        container.appendChild(gridWrapper);
      };

      const createRings = (count = 5) => {
        for (let i = 0; i < count; i++) {
          const ring = document.createElement("div");
          ring.className =
            "absolute rounded-full border border-primary/40 bg-primary/2"; // Increased border opacity
          const size = 200 + i * 180;
          ring.style.width = `${size}px`;
          ring.style.height = `${size}px`;
          ring.style.left = "50%";
          ring.style.top = "50%";
          container.appendChild(ring);

          gsap.set(ring, {
            xPercent: -50,
            yPercent: -50,
            opacity: 0,
            scale: 0.8,
          });

          gsap.to(ring, {
            scale: 1,
            rotation: i % 2 === 0 ? 45 : -45,
            opacity: 0.5 - i * 0.05,
            duration: 8 + i * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      };

      const createDots = (count = 30) => {
        for (let i = 0; i < count; i++) {
          const dot = document.createElement("div");
          dot.className =
            "absolute w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(255,0,0,0.8)]";
          container.appendChild(dot);

          gsap.set(dot, {
            x: Math.random() * container.offsetWidth,
            y: Math.random() * container.offsetHeight,
            opacity: Math.random() * 0.5 + 0.2,
          });

          gsap.to(dot, {
            x: `random(0, ${container.offsetWidth})`,
            y: `random(0, ${container.offsetHeight})`,
            duration: "random(15, 30)",
            repeat: -1,
            yoyo: true,
            ease: "none",
          });
        }
      };

      if (variant === "cinematic") {
        createGrid(0.15);
        createRings(7);
        createDots(40);

        const scan = document.createElement("div");
        scan.className =
          "absolute left-0 right-0 h-[2px] bg-primary/40 blur-sm z-10 shadow-[0_0_15px_rgba(255,0,0,0.4)]";
        container.appendChild(scan);
        gsap.to(scan, {
          y: container.offsetHeight || 500,
          duration: 4,
          repeat: -1,
          ease: "none",
        });
      } else if (variant === "default") {
        createRings(8);
      } else if (variant === "organic") {
        createGrid(0.05);
        createRings(6);
        createDots(20);
        const core = document.createElement("div");
        core.className =
          "absolute w-[800px] h-[800px] bg-primary/10 blur-[180px] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2";
        container.appendChild(core);
      } else if (variant === "grid") {
        createGrid(0.4);
      } else if (variant === "network") {
        createDots(50);
      }
    }, visualRef);

    return () => ctx.revert();
  }, [variant]);

  return (
    <section className="min-h-[70vh] flex items-center bg-secondary/80 border-b border-white/5 relative overflow-hidden group py-16">
      {/* Cinematic Background Animation */}
      <div
        ref={visualRef}
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none z-0"
      />

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 blur-3xl rounded-full -mr-[25%] -mt-48 pointer-events-none" />

      {/* Edge Flourish: Corner Brackets */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l border-t border-white/10 pointer-events-none" />
      <div className="absolute top-10 right-10 w-20 h-20 border-r border-t border-white/10 pointer-events-none" />

      {/* Edge Flourish: Large Partially Hidden Background Text */}
      <div className="absolute -bottom-20 -left-10 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none uppercase leading-none z-0">
        {title.split(" ")[0]}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase relative z-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary font-bold tracking-[0.3em] text-xs">
                VISIONARY SOLUTIONS
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.8] tracking-tighter">
              {title.split(" ")[0]} <br />
              <span className="text-primary">
                {title.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed normal-case font-medium border-l border-primary/30 pl-6">
                {subtitle}
              </p>
            )}

            {/* Edge Flourish: Technical Coordinates */}
            <div className="mt-12 flex gap-8 text-[10px] font-mono text-white/20 tracking-widest hidden md:flex">
              <span>SEC_ID: {title.toUpperCase().replace(" ", "_")}</span>
              <span>COORD: 24.7136° N, 46.6753° E</span>
              <span>STATUS: ACTIVE</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Edge Flourish: Bottom Scanning Line */}
      <motion.div
        animate={{
          y: ["0%", "400%", "0%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none z-0"
      />
    </section>
  );
}
