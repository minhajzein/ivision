"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-12 bg-muted/50 border-y border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden border border-white/10">
              <Image
                src="/interior_design_red_black_png_1770067816051.png"
                alt="Interior Design Concept"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            {/* Boxed accent like in reference image */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-primary/40 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 uppercase"
          >
            <span className="text-primary font-bold tracking-[0.3em] text-sm mb-4 block">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
              EVERY SPACE <br />
              <span className="text-primary">TELLS A STORY.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed normal-case font-medium">
              <p>
                At{" "}
                <span className="text-foreground font-bold">
                  i Vision Events, Media & Interior
                </span>
                , we believe that every space is a canvas. Our approach to
                interior design combines creativity, functionality, and a deep
                understanding of your unique needs.
              </p>
              <p>
                We carefully curate a blend of colors, textures, and furniture
                styles to create a space that reflects your personality,
                lifestyle, and aspirations across the major cities of KSA.
              </p>
              <div className="pt-8">
                <Link href="/about">
                  <Button className="bg-white text-black hover:bg-white/90 rounded-none h-14 px-10 font-black tracking-widest uppercase">
                    Our Approach
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
