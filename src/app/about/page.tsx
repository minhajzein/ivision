"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SubHero } from "@/components/sections/sub-hero";
import { About as AboutSection } from "@/components/sections/about";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <SubHero
        title="Our Story"
        subtitle="Crafting experiences and transforming environments across the Kingdom of Saudi Arabia since our inception."
        variant="cinematic"
      />

      <AboutSection />

      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Creativity",
                desc: "We push boundaries to deliver unique design concepts that stand out.",
              },
              {
                title: "Functionality",
                desc: "Every design must serve a purpose, ensuring efficiency and comfort.",
              },
              {
                title: "Excellence",
                desc: "From massive events to minute interior details, quality is our hallmark.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-border bg-secondary/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
