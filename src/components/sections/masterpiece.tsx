"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const masterpieces = [
  { id: 1, title: "Luxury Villa", subtitle: "Riyadh", image: "/interior_design_red_black_png_1770067816051.png", size: "tall" },
  { id: 2, title: "Exhibition Stand", subtitle: "Jeddah", image: "/event_management_red_black_png_1770067847667.png", size: "short" },
  { id: 3, title: "Media Studio", subtitle: "Dammam", image: "/media_production_red_black_png_1770067832500.png", size: "short" },
  { id: 4, title: "Corporate Office", subtitle: "NEOM", image: "/corporate-office.png", size: "tall" },
  { id: 5, title: "Gala Event", subtitle: "Riyadh", image: "/exibition-hall.png", size: "tall" },
  { id: 6, title: "3D Visualization", subtitle: "KSA", image: "/art-designer.png", size: "short" },
  { id: 7, title: "Interior Concept", subtitle: "Jeddah", image: "/interior-design.png", size: "short" },
  { id: 8, title: "Product Launch", subtitle: "Riyadh", image: "/brand-identity.png", size: "tall" },
];

const sizeClasses = {
  tall: "aspect-[3/5]",
  short: "aspect-square",
};

export function Masterpiece() {
  return (
    <section
      id="portfolio"
      className="py-16 bg-secondary/50 border-t border-white/5"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16 uppercase">
          <div>
            <span className="text-primary font-bold tracking-[0.3em] text-sm mb-4 block">
              PORTFOLIO
            </span>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
              OUR <span className="text-primary">MASTERPIECES.</span>
            </h2>
          </div>
        </div>

        <div className="columns-2 md:columns-4 gap-4 md:gap-6">
          {masterpieces.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden w-full break-inside-avoid mb-4 md:mb-6 ${sizeClasses[project.size as keyof typeof sizeClasses]}`}
            >
              <Link href="/portfolio" className="absolute inset-0 z-30" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark overlay at bottom for text - like the reference */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h4 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  {project.title}
                </h4>
                <p className="text-sm text-white/80 mt-1">{project.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
