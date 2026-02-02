"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SubHero } from "@/components/sections/sub-hero";
import NextImage from "next/image";
import {
  Camera,
  Printer,
  Megaphone,
  Calendar,
  Layout,
  Monitor,
  Gift,
  ChevronRight,
  MousePointer2,
  Brush,
  Tv,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const allServices = [
  {
    slug: "media-production",
    title: "Indoor & Outdoor Media Production",
    icon: Camera,
    image: "/media_production_red_black_png_1770067832500.png",
  },
  {
    slug: "digital-printing",
    title: "Digital Printing Solutions",
    icon: Printer,
    image: "/digital-printing.png",
  },
  {
    slug: "marketing",
    title: "Brand Identity & Digital Marketing",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200",
  },
  {
    slug: "personalized-gifts",
    title: "Personalized Gift",
    icon: Gift,
    image:
      "https://images.unsplash.com/photo-1549465220-1d8c9d9c674a?q=80&w=1200",
  },
  {
    slug: "event-management",
    title: "Exhibition & Event Management",
    icon: Calendar,
    image: "/event_management_red_black_png_1770067847667.png",
  },
  {
    slug: "design-art",
    title: "Design Services / Digital Art",
    icon: Layout,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200",
  },
  {
    slug: "advertising",
    title: "Advertising Solutions",
    icon: Tv,
    image:
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200",
  },
  {
    slug: "signage",
    title: "3D Buildup & LED Signage",
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
  },
  {
    slug: "interactive-media",
    title: "Digital | Interactive media",
    icon: MousePointer2,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
  },
  {
    slug: "large-format",
    title: "Small & Large Format Printing",
    icon: Printer,
    image:
      "https://images.unsplash.com/photo-1562654501-a0ccc0af3fb1?q=80&w=1200",
  },
  {
    slug: "interior-design",
    title: "Interior Design Concepts",
    icon: Brush,
    image: "/interior_design_red_black_png_1770067816051.png",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <SubHero
        title="Our Services"
        subtitle="Comprehensive solutions for media, events, and interior design across Saudi Arabia."
      />

      <section className="py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col items-start p-10 rounded-[40px] border border-white/5 bg-secondary/10 hover:border-primary/30 transition-all duration-500 h-[450px] overflow-hidden"
                >
                  {/* Background Image with Overlay */}
                  <NextImage
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />

                  <div className="relative z-20 h-full flex flex-col w-full">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase leading-none group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="mt-auto flex items-center text-primary font-bold tracking-widest text-xs uppercase">
                      Learn More —
                      <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
