"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { Aperture } from "lucide-react";

export function CameraExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  useEffect(() => {
    // Periodic Flash Animation
    const triggerFlash = () => {
      if (!flashRef.current) return;

      const tl = gsap.timeline();
      tl.to(flashRef.current, {
        opacity: 0.8,
        duration: 0.05,
        ease: "power4.out",
      }).to(flashRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });

      // Schedule next flash (random interval)
      const nextFlash = Math.random() * 3000 + 2000;
      setTimeout(triggerFlash, nextFlash);
    };

    const flashTimeout = setTimeout(triggerFlash, 2000);
    return () => clearTimeout(flashTimeout);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-40 bg-black relative overflow-hidden flex items-center justify-center min-h-[80vh]"
    >
      {/* Full Screen Flash Overlay */}
      <div
        ref={flashRef}
        className="absolute inset-0 bg-white opacity-0 pointer-events-none z-50 transition-opacity"
      />

      {/* Viewfinder UI Overlay */}
      <div className="absolute inset-10 border border-white/10 pointer-events-none z-20">
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" />
          <span className="text-red-600 font-mono text-sm font-bold tracking-widest">
            REC
          </span>
        </div>
        <div className="absolute top-4 right-4 text-white/40 font-mono text-xs">
          4K RAW | 60 FPS
        </div>
        <div className="absolute bottom-4 left-4 text-white/40 font-mono text-xs">
          ISO 800 | F2.8 | 1/125
        </div>
        <div className="absolute bottom-4 right-4 text-white/40 font-mono text-xs flex items-center gap-2">
          <div className="w-10 h-4 border border-white/20 p-[2px]">
            <div className="h-full bg-white/40 w-[85%]" />
          </div>
          85%
        </div>

        {/* Focus Brackets */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 flex items-center justify-center">
          <div className="w-4 h-4 border-l-2 border-t-2 border-primary absolute top-0 left-0" />
          <div className="w-4 h-4 border-r-2 border-t-2 border-primary absolute top-0 right-0" />
          <div className="w-4 h-4 border-l-2 border-b-2 border-primary absolute bottom-0 left-0" />
          <div className="w-4 h-4 border-r-2 border-b-2 border-primary absolute bottom-0 right-0" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div style={{ scale, rotate }} className="mb-12 relative">
            {/* Camera Lens Visual */}
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-8 border-white/10 flex items-center justify-center bg-zinc-900 shadow-[0_0_100px_rgba(255,0,0,0.1)] overflow-hidden relative group">
              {/* Lens Flare Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-blue-500/10 opacity-50" />

              {/* Aperture Blades logic (visual) */}
              <Aperture className="w-[80%] h-[80%] text-white/5 animate-[spin_20s_linear_infinite]" />

              {/* The "Eye" of the camera */}
              <div className="absolute w-[40%] h-[40%] rounded-full bg-black border-4 border-zinc-800 flex items-center justify-center shadow-inner overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-zinc-700/20 to-transparent absolute inset-0" />
                <div className="w-4 h-4 bg-primary rounded-full blur-sm animate-pulse" />
              </div>
            </div>

            {/* Glowing Ring around camera */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255,0,0,0.2)",
                  "0 0 60px rgba(255,0,0,0.4)",
                  "0 0 20px rgba(255,0,0,0.2)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 rounded-full pointer-events-none"
            />
          </motion.div>

          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-[0.5em] text-xs mb-6 block uppercase">
              Cinematic Excellence
            </span>
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter uppercase text-white">
              We capture <br />
              <span className="text-primary">the soul of ksa.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed normal-case font-medium">
              From breathtaking desert landscapes to the high-tech skyline of
              NEOM, our media production captures every frame with visionary
              precision.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Text in Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none uppercase leading-none whitespace-nowrap">
        PRODUCTION MEDIA FILM
      </div>

      {/* Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />
    </section>
  );
}
