"use client";

import { motion } from "framer-motion";

const clients = [
  "NEOM",
  "RIYADH AIR",
  "MINISTRY OF CULTURE",
  "SAUDI ARAMCO",
  "PUBLIC INVESTMENT FUND",
  "RED SEA GLOBAL",
  "AMAALA",
  "DIRIYAH GATE",
];

export function Clients() {
  return (
    <section className="py-24 bg-background border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <span className="text-[10px] font-black tracking-[0.4em] text-white/30 uppercase text-center block">
          TRUSTED BY VISIONARY LEADERS
        </span>
      </div>

      <div className="flex flex-nowrap gap-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center whitespace-nowrap"
        >
          {/* Double the list for infinite marquee */}
          {[...clients, ...clients].map((client, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-black text-white/10 hover:text-primary/40 transition-colors cursor-default tracking-tighter"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
