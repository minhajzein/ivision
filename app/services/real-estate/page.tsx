'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Landmark, FileCheck, Building2, ArrowRight, TrendingUp, CheckCircle, MapPin } from 'lucide-react';

const coreServices = [
  { icon: Landmark, title: 'Corporate Leasing', desc: 'Tenant mapping, contract drafting, rent collection workflows, and structural management coordination.' },
  { icon: TrendingUp, title: 'Investment Advisory', desc: 'Market feasibility study reports, yield calculations, and property portfolio evaluations.' },
  { icon: Building2, title: 'Commercial Management', desc: 'Facility coordinate maintenance, vendor management, and utility billing control.' },
  { icon: FileCheck, title: 'Regulatory Compliance', desc: 'Ejaar system integration, municipality clearance filings, and civil defense certification.' },
];

const highlights = [
  { metric: '10+', label: 'Commercial Buildings Managed' },
  { metric: '94%', label: 'Average Lease Renewal Rate' },
  { metric: 'Dammam / Khobar', label: 'Primary Target Territories' },
  { metric: '2030', label: 'Vision-Aligned Models' },
];

export default function RealEstateService() {
  return (
    <main className="bg-white font-body">
      {/* Hero */}
      <section className="bg-brand-black text-white pt-32 pb-20 relative overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 font-display text-[12vw] font-black text-white/5 uppercase select-none leading-none z-0 pointer-events-none">
          ASSETS
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-8 text-[11px] font-ui font-semibold tracking-widest uppercase">
            <Link href="/services" className="text-brand-gray hover:text-brand-red transition-colors duration-200">Services</Link>
            <span className="text-brand-gray/40">/</span>
            <span className="text-brand-red">Real Estate & Advisory</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 bg-brand-red flex items-center justify-center flex-shrink-0"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                <Home size={18} className="text-white" />
              </div>
              <span className="font-ui text-xs tracking-[4px] uppercase text-brand-red font-bold">Division 04</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-6">
              Real Estate &{' '}
              <span className="text-brand-red">Property</span>{' '}
              Advisory
            </h1>
            <p className="font-body text-brand-gray text-sm leading-relaxed max-w-xl">
              Commercial leasing management, yield optimization advisory, and comprehensive real estate facility workflows across the Eastern Province — aligned with Saudi Vision 2030 development models.
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
                Corporate Property Advisory
              </h2>
              <p className="font-body text-sm text-brand-gray-2 leading-relaxed">
                Managing commercial real estate requires coordination between legal, operations, and facility teams. iVision provides integrated services, handling tenant positioning, regulatory compliance, and facility maintenance through a single point of contact.
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

      {/* Stats + Focus Section */}
      <section className="py-20 bg-brand-black text-white relative overflow-hidden noise">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/8 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-brand-white-3/20 p-6 text-center"
                style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
              >
                <div className="font-display text-3xl font-black text-brand-red mb-2">{h.metric}</div>
                <div className="font-ui text-[10px] text-brand-gray tracking-wider uppercase font-semibold">{h.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Market Focus */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <MapPin className="text-brand-red flex-shrink-0" size={20} />
                <span className="font-ui text-xs tracking-[3px] uppercase text-brand-red font-bold">Market Focus</span>
              </div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight leading-tight">
                Eastern Province Coverage
              </h2>
              <p className="font-body text-sm text-brand-gray leading-relaxed">
                Our leasing and management teams operate primarily in the Dammam, Khobar, and Jubail commercial zones. We track regional demand patterns and regulatory requirements to help optimize asset performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {['Dammam Commercial Zone', 'Al Khobar Business District', 'Jubail Industrial City', 'Riyadh Project Portfolios'].map((zone) => (
                  <div key={zone} className="flex items-center gap-2 text-sm font-semibold text-brand-white-2">
                    <CheckCircle size={14} className="text-brand-red flex-shrink-0" />
                    {zone}
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="border border-brand-red/20 bg-brand-black-2 p-10 relative"
              style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(234,32,50,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(234,32,50,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="relative z-10 text-center py-6">
                <span className="font-ui text-[10px] tracking-[4px] text-brand-red uppercase font-bold block mb-4">Aligned With</span>
                <div className="font-display text-5xl font-black text-white/10 uppercase select-none leading-none mb-4">VISION</div>
                <div className="font-display text-6xl font-black text-brand-red leading-none mb-6">2030</div>
                <p className="font-body text-sm text-brand-gray leading-relaxed max-w-xs mx-auto">
                  Our real estate advisory practices align with Kingdom objectives, prioritizing sustainable commercial growth and smart city development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red text-white py-16 relative overflow-hidden noise">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-3xl font-bold uppercase mb-4 tracking-tight">Looking for Property Management or Leasing Solutions?</h2>
          <p className="font-body text-sm text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Contact our property advisory group. We provide feasibility studies, lease assessments, and portfolio coordinate management models.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-widest bg-brand-black text-white px-8 py-4 hover:bg-white hover:text-brand-red transition-all duration-300"
            style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
          >
            Consult Our Real Estate Team <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}

