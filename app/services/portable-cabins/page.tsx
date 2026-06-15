'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container, Hammer, Settings, ShieldAlert, ArrowRight, CheckCircle, Layers } from 'lucide-react';

const coreServices = [
  { icon: Layers, title: 'Site Office Units', desc: 'Sleek corporate-standard site offices with built-in networking, HVAC preparation, and executive areas.' },
  { icon: ShieldAlert, title: 'Anti-Vandal Cabins', desc: 'Secure modular cabins built with reinforced heavy-duty steel and multi-point lock systems.' },
  { icon: Settings, title: 'Retail Kiosks & Coffee Pods', desc: 'Custom architectural kiosks designed for pop-up shops, tourist spots, and parks.' },
  { icon: Hammer, title: 'Custom Prefabricated Designs', desc: 'Specialized modular units fabricated to match specific size, layouts, and accessory needs.' },
];

const specifications = [
  { label: 'Structural Steel Frame', value: '4mm to 6mm thick cold-formed channel steel base and frame coordinates.' },
  { label: 'Wall Cladding', value: '50mm to 100mm Sandwich panels (Polyurethane or Rockwool insulation).' },
  { label: 'Electrical Systems', value: 'SASO certified wiring, distribution boards, LED lighting, and HVAC conduits.' },
  { label: 'Interior Finishes', value: 'Waterproof cement board flooring with vinyl sheets, composite wall board sheets.' },
];

export default function PortableCabinsService() {
  return (
    <main className="bg-white font-body">
      {/* Hero */}
      <section className="bg-brand-black text-white pt-32 pb-20 relative overflow-hidden noise">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent pointer-events-none" />
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 font-display text-[12vw] font-black text-white/5 uppercase select-none leading-none z-0 pointer-events-none">
          CABINS
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-8 text-[11px] font-ui font-semibold tracking-widest uppercase">
            <Link href="/services" className="text-brand-gray hover:text-brand-red transition-colors duration-200">Services</Link>
            <span className="text-brand-gray/40">/</span>
            <span className="text-brand-red">Portable Cabins</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 bg-brand-red flex items-center justify-center flex-shrink-0"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                <Container size={18} className="text-white" />
              </div>
              <span className="font-ui text-xs tracking-[4px] uppercase text-brand-red font-bold">Division 03</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-6">
              Portable Cabins &{' '}
              <span className="text-brand-red">Modular</span>{' '}
              Fabrication
            </h1>
            <p className="font-body text-brand-gray text-sm leading-relaxed max-w-xl">
              Heavy-duty site offices, custom accommodation cabins, pop-up commercial kiosks, and anti-vandal units — built entirely in-house at our Dammam workshop.
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
                Dammam Workshop Built
              </h2>
              <p className="font-body text-sm text-brand-gray-2 leading-relaxed">
                Many suppliers act as brokers, outsourcing fabrication to third-party yards, which can introduce delays and quality issues. iVision builds every cabin in-house. Our technicians assemble each unit from structural steel frame to final electrical wiring under strict quality controls.
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

      {/* Material Specifications — dark section */}
      <section className="py-20 bg-brand-black text-white relative overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/8 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Graphic panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="border border-brand-red/20 bg-brand-black-2 p-10 relative"
              style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(234,32,50,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(234,32,50,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="relative z-10 text-center py-6">
                <span className="font-ui text-[10px] tracking-[4px] text-brand-red uppercase font-bold block mb-4">Fabrication Standards</span>
                <div className="font-display text-5xl font-black text-white/10 uppercase select-none leading-none mb-6">MODULAR</div>
                <p className="font-body text-sm text-brand-gray leading-relaxed max-w-xs mx-auto">
                  We fabricate frames and channel supports to handle standard transport loads, allowing modules to be repositioned across site projects with ease.
                </p>
              </div>
            </motion.div>

            {/* Specs */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Layers className="text-brand-red flex-shrink-0" size={20} />
                <span className="font-ui text-xs tracking-[3px] uppercase text-brand-red font-bold">Material Specifications</span>
              </div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight leading-tight">
                High-Grade Modular Elements
              </h2>
              <p className="font-body text-sm text-brand-gray leading-relaxed">
                We build our modules using SASO-approved materials. Polyurethane insulation provides thermal protection for hot regions, and rockwool core options are available to meet fire safety requirements.
              </p>
              <div className="space-y-4">
                {specifications.map((spec) => (
                  <div key={spec.label} className="border-l-2 border-brand-red pl-4 py-1">
                    <div className="font-display text-xs font-bold uppercase text-brand-red tracking-wide mb-1">{spec.label}</div>
                    <div className="font-body text-xs text-brand-gray leading-relaxed">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red text-white py-16 relative overflow-hidden noise">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-3xl font-bold uppercase mb-4 tracking-tight">Need Modular Office or Housing Cabins?</h2>
          <p className="font-body text-sm text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Our modular production team can provide custom fabrication quotes, floor plans, and delivery timelines across the Eastern Province and beyond.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-widest bg-brand-black text-white px-8 py-4 hover:bg-white hover:text-brand-red transition-all duration-300"
            style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
          >
            Request Cabin Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}

