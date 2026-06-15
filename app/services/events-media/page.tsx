'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Film, Mic, Megaphone, Play, ArrowRight, CheckCircle, Monitor } from 'lucide-react';

const coreServices = [
  { icon: Mic, title: 'LED & Stage Production', desc: 'Custom structural stages, truss structures, high-definition LED displays, and custom audio engineering.' },
  { icon: Megaphone, title: 'Corporate Exhibitions', desc: 'Full coordination, layout zoning, shell scheme building, and brand activation pop-ups.' },
  { icon: Film, title: 'Media & Videography', desc: 'Professional event photography, 4K multi-camera filming, and rapid post-production delivery.' },
  { icon: Monitor, title: 'Brand Activations', desc: 'Interactive visual spaces designed to capture visitor attention and drive brand engagement at scale.' },
];

const capabilities = [
  { label: 'LED Wall Configurations', desc: 'P2.5 / P3.9 indoor and outdoor rental LED displays.' },
  { label: 'Media Production Crews', desc: 'Experienced photographers and videographers on site.' },
  { label: 'Staging Capabilities', desc: 'Custom wood fabrication and steel frames for heavy load stages.' },
  { label: 'Exhibition Stands', desc: 'Modular and custom display options built in our workshop.' },
];

export default function EventsMediaService() {
  return (
    <main className="bg-white font-body">
      {/* Hero */}
      <section className="bg-brand-black text-white pt-32 pb-20 relative overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 font-display text-[12vw] font-black text-white/5 uppercase select-none leading-none z-0 pointer-events-none">
          MEDIA
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-8 text-[11px] font-ui font-semibold tracking-widest uppercase">
            <Link href="/services" className="text-brand-gray hover:text-brand-red transition-colors duration-200">Services</Link>
            <span className="text-brand-gray/40">/</span>
            <span className="text-brand-red">Events & Media</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 bg-brand-red flex items-center justify-center flex-shrink-0"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                <Calendar size={18} className="text-white" />
              </div>
              <span className="font-ui text-xs tracking-[4px] uppercase text-brand-red font-bold">Division 02</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-6">
              Events &{' '}
              <span className="text-brand-red">Media</span>{' '}
              Production
            </h1>
            <p className="font-body text-brand-gray text-sm leading-relaxed max-w-xl">
              End-to-end event production, stage engineering, high-fidelity corporate brand setups, and professional videography — all executed in-house with our Dammam-based crew.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="w-12 h-1 bg-brand-red mb-6" />
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-black mb-4">
                Staging & Production Experts
              </h2>
              <p className="font-body text-sm text-brand-gray-2 leading-relaxed">
                Exhibition coordination can be complex, often requiring different vendors for stage building, LED displays, signage, and video documentation. iVision manages the entire process — we fabricate staging and set pieces in our workshop and handle media production with our in-house team.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {coreServices.map((srv, i) => {
                const Icon = srv.icon;
                return (
                  <motion.div
                    key={srv.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="border border-brand-white-3 p-6 bg-brand-white-2 group hover:border-brand-red hover:shadow-lg transition-all duration-300"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
                  >
                    <div className="w-10 h-10 bg-brand-black flex items-center justify-center mb-4"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                      <Icon className="text-brand-red" size={18} />
                    </div>
                    <h3 className="font-display text-sm font-bold uppercase text-brand-black tracking-wide mb-2">{srv.title}</h3>
                    <p className="font-body text-xs text-brand-gray-2 leading-relaxed">{srv.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section className="py-20 bg-brand-black text-white relative overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/8 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text left */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Play className="text-brand-red flex-shrink-0" size={20} />
                <span className="font-ui text-xs tracking-[3px] uppercase text-brand-red font-bold">Technical Specifications</span>
              </div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight leading-tight">
                Reliable Event Support
              </h2>
              <p className="font-body text-sm text-brand-gray leading-relaxed">
                Our inventory of LED displays, truss systems, and AV gear is maintained and deployed by our own technicians. We handle all logistics and assembly, reducing coordination risks and keeping your event setups on schedule.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((cap) => (
                  <div key={cap.label} className="border-l-2 border-brand-red pl-4 py-2">
                    <div className="font-display text-xs font-bold uppercase text-white tracking-wide mb-1">{cap.label}</div>
                    <div className="font-body text-xs text-brand-gray leading-relaxed">{cap.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Graphic right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="border border-brand-red/20 bg-brand-black-2 p-10 relative"
              style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(234,32,50,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(234,32,50,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="relative z-10 text-center py-8">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <Play size={28} className="text-white ml-1" />
                </div>
                <span className="font-ui text-[10px] tracking-[4px] text-brand-red uppercase font-bold block mb-3">Staging Systems</span>
                <p className="font-body text-sm text-brand-gray leading-relaxed max-w-xs mx-auto">
                  We fabricate custom branding displays, backdrops, and exhibition elements in our Dammam workshop, ensuring quality assembly for every event.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red text-white py-16 relative overflow-hidden noise">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-3xl font-bold uppercase mb-4 tracking-tight">Planning an Exhibition or Staging?</h2>
          <p className="font-body text-sm text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Contact our events team. We provide layout mockups, equipment lists, and pricing estimates for exhibitions and corporate stagings.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-widest bg-brand-black text-white px-8 py-4 hover:bg-white hover:text-brand-red transition-all duration-300"
            style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
          >
            Request Event Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}

