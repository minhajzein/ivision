"use client";

import { motion } from "framer-motion";

const steps = [
  {
    no: "01",
    title: "VISIONARY BRIEF",
    desc: "We dive deep into your requirements to understand the soulful vision behind the project.",
  },
  {
    no: "02",
    title: "STRATEGIC DESIGN",
    desc: "Our architects and creators draft masterpieces that balance luxury with functionality.",
  },
  {
    no: "03",
    title: "PRECISE EXECUTION",
    desc: "Using high-end technology and expert craftsmanship, we bring the design to life across KSA.",
  },
  {
    no: "04",
    title: "FINAL DELIVERY",
    desc: "Rigorous quality checks ensure every pixel, corner, and detail exceeds international standards.",
  },
];

export function Process() {
  return (
    <section className="py-16 bg-muted/30 relative">
      <div className="container mx-auto">
        <div className="mb-24 uppercase">
          <span className="text-primary font-bold tracking-[0.3em] text-sm mb-4 block">
            WORKFLOW
          </span>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
            OUR <br />
            <span className="text-primary">PROCESS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 border bg-primary/5 border-white/30 hover:border-primary/60 transition-all duration-500 rounded-2xl"
            >
              <div className="text-4xl font-black text-white/10 group-hover:text-primary/20 transition-colors mb-8">
                {step.no}
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight uppercase group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Connector line for large screens */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-white/5 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
