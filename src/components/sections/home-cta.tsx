"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function HomeCTA() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full" />

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-primary font-bold tracking-[0.3em] text-sm mb-8 block">
            READY TO START?
          </span>
          <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tighter uppercase">
            LET&apos;S CO-CREATE YOUR <br />
            <span className="text-primary">NEXT VISION.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white h-16 px-12 text-xl font-bold rounded-none w-full"
              >
                DISCUSS PROJECT <ChevronRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 h-16 px-12 text-xl font-bold rounded-none w-full"
              >
                OUR SERVICES
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative scanning line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
