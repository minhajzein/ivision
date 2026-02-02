"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";

const stats = [
  { label: "PROJECTS DELIVERED", value: 250, suffix: "+" },
  { label: "MAJOR CITIES", value: 12, suffix: " KSA" },
  { label: "TEAM EXPERTS", value: 45, suffix: "+" },
  { label: "YEARS EXP", value: 15, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView && countRef.current) {
      gsap.to(countRef.current, {
        innerText: value,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power2.out",
      });
    }
  }, [isInView, value]);

  return (
    <span className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter group-hover:text-primary transition-colors duration-500">
      <span ref={countRef}>0</span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-24 bg-background border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center group flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center">
                <Counter value={stat.value} suffix={stat.suffix} />
                <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Accent Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-white/[0.01] select-none pointer-events-none uppercase leading-none whitespace-nowrap">
        ACHIEVEMENTS EXCELLENCE VISIONARY
      </div>
    </section>
  );
}
