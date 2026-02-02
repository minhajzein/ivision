"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SubHero } from "@/components/sections/sub-hero";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    category: "Interior",
    title: "Luxury Villa",
    location: "Riyadh",
    image: "/interior_design_red_black_png_1770067816051.png",
    isLocal: true,
  },
  {
    id: 2,
    category: "Events",
    title: "Corporate Summit",
    location: "Jeddah",
    image: "/event_management_red_black_png_1770067847667.png",
    isLocal: true,
  },
  {
    id: 3,
    category: "Media",
    title: "TV Commercial",
    location: "Dammam",
    image: "/media_production_red_black_png_1770067832500.png",
    isLocal: true,
  },
  {
    id: 4,
    category: "Interior",
    title: "Modern Office",
    location: "NEOM",
    image: "/corporate-office.png",
    isLocal: true,
  },
  {
    id: 5,
    category: "Events",
    title: "Gala Dinner",
    location: "Riyadh",
    image:
      "https://images.unsplash.com/photo-1540575861501-7ad05823123d?q=80&w=800",
    isLocal: false,
  },
  {
    id: 6,
    category: "Media",
    title: "Product Launch",
    location: "Riyadh",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800",
    isLocal: false,
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Interior", "Events", "Media"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="bg-background min-h-screen text-foreground">
      <Navbar />
      <SubHero
        title="Our Portfolio"
        subtitle="A showcase of our masterpiece projects delivered across the Kingdom."
        variant="cinematic"
      />

      <section className="py-24">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  filter === cat
                    ? "bg-primary text-white"
                    : "bg-secondary/20 hover:bg-secondary/40 text-muted-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square rounded-3xl overflow-hidden border border-border"
              >
                <Image
                  src={
                    project.isLocal
                      ? project.image
                      : project.image.startsWith("http")
                        ? project.image
                        : `https://images.unsplash.com/photo-${project.image}?q=80&w=800`
                  }
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10">
                  <span className="text-primary font-bold text-sm mb-2 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground">
                    {project.location}, KSA
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
