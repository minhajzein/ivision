"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "MEDIA PRODUCTION",
    desc: "Indoor & Outdoor cinematography with high-end equipment.",
    image: "/media_production_red_black_png_1770067832500.png",
  },
  {
    title: "EVENT MANAGEMENT",
    desc: "Exhibition stands and corporate events delivered across KSA.",
    image: "/event_management_red_black_png_1770067847667.png",
  },
  {
    title: "INTERIOR DESIGN",
    desc: "Luxury residential and commercial concepts for modern living.",
    image: "/interior_design_red_black_png_1770067816051.png",
  },
  {
    title: "DIGITAL PRINTING",
    desc: "Premium large format printing and signage solutions.",
    image: "/digital-printing.png",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="mb-20 uppercase">
          <span className="text-primary font-bold tracking-[0.3em] text-sm mb-4 block">
            WHAT WE DO
          </span>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
            MORE <span className="text-primary">SERVICES.</span>
            <br />
            LESS <span className="text-white">COMPROMISE.</span>
          </h2>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden border border-white/5 min-w-[85vw] md:min-w-0 snap-center"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

              <Link
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="absolute inset-0 z-20"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end uppercase">
                <div className="w-10 h-[2px] bg-primary mb-6 transition-all duration-500 group-hover:w-20" />
                <h3 className="text-2xl font-black mb-3 tracking-tighter">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed normal-case font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.desc}
                </p>
                <div className="mt-6">
                  <span className="text-[10px] font-black tracking-[0.2em] text-primary">
                    LEARN MORE —
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
