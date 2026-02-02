"use client";

import { use } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SubHero } from "@/components/sections/sub-hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowLeft,
  Layout,
  Camera,
  Calendar,
  Brush,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceData {
  title: string;
  desc: string;
  features: string[];
  image: string;
  icon: typeof Layout; // Using Lucide icon type
}

const servicesData: Record<string, ServiceData> = {
  "media-production": {
    title: "Media Production",
    desc: "Premium indoor and outdoor media production services tailored for the Saudi market.",
    features: [
      "4K High-End Cinematography",
      "Professional Lighting Setup",
      "Drone Aerial Shots",
      "Post-Production & Grading",
    ],
    image: "/media_production_red_black_png_1770067832500.png",
    icon: Camera,
  },
  "interior-design": {
    title: "Interior Design",
    desc: "Transforming spaces into meaningful environments that reflect personality and lifestyle.",
    features: [
      "3D Conceptualization",
      "Material Selection",
      "Furniture Layout",
      "Lighting Design",
    ],
    image: "/interior_design_red_black_png_1770067816051.png",
    icon: Brush,
  },
  "event-management": {
    title: "Event Management",
    desc: "Corporate and social event planning with a focus on seamless execution and impact.",
    features: [
      "Exhibition Stand Design",
      "Catering Coordination",
      "AV Solutions",
      "On-site Supervision",
    ],
    image: "/event_management_red_black_png_1770067847667.png",
    icon: Calendar,
  },
  "digital-printing": {
    title: "Digital Printing",
    desc: "High-quality printing solutions for businesses across Saudi Arabia.",
    features: [
      "Large Format Printing",
      "UV Printing",
      "Signage Solutions",
      "Corporate Branding",
    ],
    image: "/digital-printing.png",
    icon: Layout,
  },
  marketing: {
    title: "Marketing",
    desc: "Strategic brand building and digital marketing services.",
    features: [
      "Social Media Management",
      "SEO & Content Strategy",
      "Brand Identity",
      "Campaign Planning",
    ],
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200",
    icon: Layout,
  },
  "personalized-gifts": {
    title: "Personalized Gifts",
    desc: "Custom corporate and social gifts that leave a lasting impression.",
    features: [
      "Corporate Gifting",
      "Custom Awards",
      "Event Giveaways",
      "Branded Merchandise",
    ],
    image:
      "https://images.unsplash.com/photo-1549465220-1d8c9d9c674a?q=80&w=1200",
    icon: Layout,
  },
  "design-art": {
    title: "Design & Art",
    desc: "Creative digital art and professional design services.",
    features: [
      "UI/UX Design",
      "Digital Illustrations",
      "Graphic Design",
      "Motion Graphics",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200",
    icon: Layout,
  },
  advertising: {
    title: "Advertising",
    desc: "Effective advertising solutions across multiple platforms.",
    features: [
      "OOH Advertising",
      "Digital Ad Campaigns",
      "Media Buying",
      "Public Relations",
    ],
    image:
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200",
    icon: Layout,
  },
  signage: {
    title: "Signage",
    desc: "Premium 3D and LED signage for buildings and interiors.",
    features: [
      "3D Lettering",
      "LED Illumination",
      "Wayfinding Systems",
      "Building Wraps",
    ],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
    icon: Layout,
  },
  "interactive-media": {
    title: "Interactive Media",
    desc: "Engaging digital and interactive media experiences.",
    features: [
      "AR/VR Experiences",
      "Interactive Installations",
      "Touchscreen Apps",
      "Digital Signage",
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    icon: Layout,
  },
  "large-format": {
    title: "Large Format Printing",
    desc: "Specialized printing services for large scale visuals.",
    features: [
      "Vinyl Printing",
      "Banner Production",
      "Canvas Displays",
      "Wall Decals",
    ],
    image:
      "https://images.unsplash.com/photo-1562654501-a0ccc0af3fb1?q=80&w=1200",
    icon: Layout,
  },
  // Default values for other slugs to avoid crashes
  default: {
    title: "Service Excellence",
    desc: "Professional solutions for your business needs in Saudi Arabia.",
    features: [
      "High Quality",
      "Expert Team",
      "Timed Delivery",
      "Value for Money",
    ],
    image: "/corporate-office.png",
    icon: Layout,
  },
};

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const data = servicesData[slug] || servicesData["default"];
  const TitleIcon = data.icon;

  return (
    <main className="bg-background min-h-screen text-foreground">
      <Navbar />
      <SubHero title={data.title} subtitle={data.desc} />

      <section className="py-24">
        <div className="container mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center text-primary mb-12 hover:underline"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Services
          </Link>

          <div className="flex flex-col lg:flex-row gap-20">
            <div className="flex-1">
              <div className="p-1 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-10">
                <TitleIcon size={40} />
              </div>

              <h2 className="text-4xl font-bold mb-8">What We Offer</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {data.features.map((feature: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-secondary/5"
                  >
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Our approach to {data.title} combines creativity, functionality,
                and a deep understanding of the Saudi Arabian market
                requirements. We ensure that every project we undertake not only
                looks stunning but also meets the specific business or lifestyle
                goals of our clients.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg font-semibold w-full">
                    Discuss Your Project
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="border-border hover:bg-secondary/20 h-14 px-8 text-lg font-semibold w-full"
                  >
                    Download Brochure
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative aspect-video lg:aspect-square rounded-sm overflow-hidden border border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10" />
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
