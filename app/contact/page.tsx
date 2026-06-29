'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, ChevronRight, DollarSign } from 'lucide-react';

const divisions = [
  { id: 'arch', name: 'Architecture & Fit-out', desc: 'Design, structural engineering, and corporate interiors.' },
  { id: 'events', name: 'Events & Media Production', desc: 'LED setup, stage build, photography & staging.' },
  { id: 'cabins', name: 'Portable Cabins & Modular', desc: 'Site offices, custom storage, retail pods.' },
  { id: 'real', name: 'Real Estate & Advisory', desc: 'Property consultation, leasing, commercial development.' },
];

const scopes = [
  { id: 'small', name: 'Standard Scope', desc: 'Under 100K SAR' },
  { id: 'medium', name: 'Mid-Tier Venture', desc: '100K – 500K SAR' },
  { id: 'large', name: 'Major Commercial', desc: '500K – 2M+ SAR' },
];

const contactItems = [
  { icon: MapPin, label: 'Address', value: '4571, 9th Street, Al Adamah, 7758\nDammam 32242- K S A\nM : 0503913735' },
  { icon: Phone, label: 'Phone Support', value: '0503913735' },
  { icon: Mail, label: 'Email Inquiry', value: 'info@ivisionads.com' },
];

const territories = ['Eastern Province (HQ)', 'Riyadh Central Region', 'Western Province (Jeddah)', 'Northern & Southern Districts'];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    division: 'Architecture & Fit-out',
    scope: 'Mid-Tier Venture',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main style={{ background: '#fff', overflow: 'hidden' }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--black)',
        color: '#fff',
        paddingTop: 'clamp(9rem, 16vw, 13rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.015) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(234,32,50,0.1) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        {/* Giant bg watermark */}
        <div className="page-watermark" style={{
          position: 'absolute', right: '3%', bottom: '-8%',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(8rem,18vw,20rem)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.03)',
          textTransform: 'uppercase',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          userSelect: 'none',
          zIndex: 1,
          whiteSpace: 'nowrap',
        }}>TALK</div>

        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: 700 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div style={{ width: 32, height: 2, background: '#ea2032', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700,
                letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
              }}>Proposal Inquiry</span>
            </div>

            <h1 className="display-lg" style={{ color: '#fff', marginBottom: 24, lineHeight: 0.95 }}>
              Let's Partner on Your{' '}
              <span style={{ color: '#ea2032' }}>Next Project</span>
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75,
              maxWidth: 540,
            }}>
              Whether you need a full interior fit-out, modular site offices, or stages for a
              corporate exhibition anywhere in Saudi Arabia, our estimators are ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT GRID ─────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) 0',
        background: '#fff',
        borderBottom: '1px solid var(--white-3)',
      }}>
        <div className="container">
          <div className="grid-12" style={{
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'start',
          }}>
            {/* ── LEFT: Info panel ─────────────────────────────── */}
            <div className="col-span-5" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <div>
                <div style={{ width: 48, height: 3, background: '#ea2032', marginBottom: 24 }} />
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  color: 'var(--black)',
                  marginBottom: 14,
                }}>Direct Office Contact</h2>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
                  color: 'var(--gray-2)',
                  lineHeight: 1.75,
                }}>
                  Connect directly with our division heads or schedule an appointment to visit
                  our headquarters.
                </p>
              </div>

              {/* Contact items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {contactItems.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex', gap: 16,
                      borderLeft: '2px solid var(--white-3)',
                      paddingLeft: 18, paddingTop: 8, paddingBottom: 8,
                      transition: 'border-color 0.3s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = '#ea2032')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--white-3)')}
                  >
                    <div style={{
                      width: 40, height: 40,
                      background: 'var(--black)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      clipPath: 'polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))',
                    }}>
                      <Icon size={16} color="#ea2032" />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 10, fontWeight: 700,
                        letterSpacing: '3px', textTransform: 'uppercase',
                        color: 'var(--gray)',
                        marginBottom: 4,
                      }}>{label}</div>
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 14, fontWeight: 500,
                        color: 'var(--black)',
                        whiteSpace: 'pre-line',
                        lineHeight: 1.5,
                      }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Territory card */}
              <div style={{
                background: 'var(--white-2)',
                border: '1px solid var(--white-3)',
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  color: 'var(--black)',
                  marginBottom: 12,
                }}>Territory Operations</h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'var(--gray-2)',
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}>
                  Our team provides logistical delivery and structural setups across the entire Kingdom:
                </p>
                <div className="grid-2-col" style={{ gap: 10 }}>
                  {territories.map(t => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <ChevronRight size={12} color="#ea2032" style={{ flexShrink: 0 }} />
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 12, fontWeight: 600,
                        color: 'var(--black)',
                        lineHeight: 1.4,
                      }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: Form ───────────────────────────────────── */}
            <div className="col-span-7">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    style={{
                      background: 'var(--white-2)',
                      border: '1px solid var(--white-3)',
                      padding: 'clamp(3rem, 6vw, 5rem)',
                      textAlign: 'center',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      minHeight: 500,
                      clipPath: 'polygon(0 0,calc(100% - 24px) 0,100% 24px,100% 100%,24px 100%,0 calc(100% - 24px))',
                    }}
                  >
                    <CheckCircle size={56} color="#ea2032" style={{ marginBottom: 24 }} />
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      color: 'var(--black)',
                      marginBottom: 14,
                    }}>Proposal Request Logged</h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      color: 'var(--gray-2)',
                      maxWidth: 380,
                      lineHeight: 1.7,
                      marginBottom: 32,
                    }}>
                      Thank you, {form.name}. Our estimator coordinates with the corresponding
                      division head ({form.division}) and will follow up within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 11, fontWeight: 700,
                        letterSpacing: '2px', textTransform: 'uppercase',
                        border: '2px solid var(--black)',
                        background: 'transparent',
                        color: 'var(--black)',
                        padding: '14px 32px',
                        cursor: 'none',
                        transition: 'background 0.2s ease, color 0.2s ease',
                        clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLButtonElement;
                        el.style.background = 'var(--black)';
                        el.style.color = '#fff';
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLButtonElement;
                        el.style.background = 'transparent';
                        el.style.color = 'var(--black)';
                      }}
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form
                    key="form"
                    onSubmit={handleSubmit}
                    style={{
                      background: 'var(--white-2)',
                      border: '1px solid var(--white-3)',
                      padding: 'clamp(2rem, 4vw, 3.5rem)',
                      display: 'flex', flexDirection: 'column', gap: 36,
                      clipPath: 'polygon(0 0,calc(100% - 24px) 0,100% 24px,100% 100%,24px 100%,0 calc(100% - 24px))',
                    }}
                  >
                    {/* Form header */}
                    <div style={{ borderBottom: '1px solid var(--white-3)', paddingBottom: 24 }}>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.01em',
                        color: 'var(--black)',
                        marginBottom: 8,
                      }}>Interactive Project Estimator</h3>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 13,
                        color: 'var(--gray-2)',
                        lineHeight: 1.6,
                      }}>
                        Configure your requirements to direct your request to the correct division.
                      </p>
                    </div>

                    {/* Step 1: Division */}
                    <div>
                      <label style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 10, fontWeight: 700,
                        letterSpacing: '3px', textTransform: 'uppercase',
                        color: 'var(--gray-2)',
                        display: 'block', marginBottom: 16,
                      }}>1. Select Service Division *</label>
                      <div className="grid-2-col" style={{ gap: 12 }}>
                        {divisions.map((div) => (
                          <button
                            type="button"
                            key={div.id}
                            onClick={() => setForm({ ...form, division: div.name })}
                            style={{
                              textAlign: 'left',
                              padding: '16px',
                              border: '1px solid',
                              borderColor: form.division === div.name ? '#ea2032' : 'var(--white-3)',
                              background: form.division === div.name ? '#ea2032' : '#fff',
                              color: form.division === div.name ? '#fff' : 'var(--black)',
                              transition: 'all 0.2s ease',
                              clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))',
                              cursor: 'none',
                            }}
                          >
                            <span style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: 12, fontWeight: 900,
                              textTransform: 'uppercase',
                              letterSpacing: '0.01em',
                              display: 'block', marginBottom: 4,
                            }}>{div.name}</span>
                            <span style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: 11,
                              color: form.division === div.name ? 'rgba(255,255,255,0.75)' : 'var(--gray)',
                              lineHeight: 1.4,
                            }}>{div.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Scope */}
                    <div>
                      <label style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 10, fontWeight: 700,
                        letterSpacing: '3px', textTransform: 'uppercase',
                        color: 'var(--gray-2)',
                        display: 'block', marginBottom: 16,
                      }}>2. Project Scale Estimation *</label>
                      <div className="grid-3-col" style={{ gap: 12 }}>
                        {scopes.map((sc) => (
                          <button
                            type="button"
                            key={sc.id}
                            onClick={() => setForm({ ...form, scope: sc.name })}
                            style={{
                              textAlign: 'left',
                              padding: '16px',
                              border: '1px solid',
                              borderColor: form.scope === sc.name ? 'var(--black)' : 'var(--white-3)',
                              background: form.scope === sc.name ? 'var(--black)' : '#fff',
                              color: form.scope === sc.name ? '#fff' : 'var(--black)',
                              transition: 'all 0.2s ease',
                              clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))',
                              cursor: 'none',
                            }}
                          >
                            <span style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: 12, fontWeight: 900,
                              textTransform: 'uppercase',
                              display: 'block', marginBottom: 8,
                            }}>{sc.name}</span>
                            <span style={{
                              fontFamily: 'var(--font-ui)',
                              fontSize: 10, fontWeight: 600,
                              display: 'flex', alignItems: 'center', gap: 4,
                              color: form.scope === sc.name ? '#ea2032' : 'var(--gray-2)',
                            }}>
                              <DollarSign size={10} /> {sc.desc}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 3: Details */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      <label style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: 10, fontWeight: 700,
                        letterSpacing: '3px', textTransform: 'uppercase',
                        color: 'var(--gray-2)',
                        borderBottom: '1px solid var(--white-3)',
                        paddingBottom: 12,
                      }}>3. Your Representative Details</label>

                      <div className="grid-2-col" style={{ gap: 14 }}>
                        {[
                          { type: 'text', placeholder: 'Representative Name *', key: 'name', required: true },
                          { type: 'email', placeholder: 'Corporate Email *', key: 'email', required: true },
                        ].map(field => (
                          <input
                            key={field.key}
                            type={field.type}
                            required={field.required}
                            placeholder={field.placeholder}
                            value={(form as Record<string, string>)[field.key]}
                            onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                            style={{
                              width: '100%',
                              padding: '14px 16px',
                              background: '#fff',
                              border: '1px solid var(--white-3)',
                              fontFamily: 'var(--font-body)',
                              fontSize: 13,
                              color: 'var(--black)',
                              outline: 'none',
                              transition: 'border-color 0.2s ease',
                            }}
                            onFocus={e => (e.currentTarget.style.borderColor = '#ea2032')}
                            onBlur={e => (e.currentTarget.style.borderColor = 'var(--white-3)')}
                          />
                        ))}
                      </div>

                      <input
                        type="tel"
                        placeholder="Mobile / Office Number (e.g. +966 50 000 0000)"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          background: '#fff',
                          border: '1px solid var(--white-3)',
                          fontFamily: 'var(--font-body)',
                          fontSize: 13,
                          color: 'var(--black)',
                          outline: 'none',
                          transition: 'border-color 0.2s ease',
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = '#ea2032')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'var(--white-3)')}
                      />

                      <textarea
                        required
                        rows={5}
                        placeholder="Describe project specifications, layouts, or required timelines... *"
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          background: '#fff',
                          border: '1px solid var(--white-3)',
                          fontFamily: 'var(--font-body)',
                          fontSize: 13,
                          color: 'var(--black)',
                          outline: 'none',
                          resize: 'none',
                          transition: 'border-color 0.2s ease',
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = '#ea2032')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'var(--white-3)')}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                        fontFamily: 'var(--font-ui)',
                        fontSize: 12, fontWeight: 700,
                        letterSpacing: '2px', textTransform: 'uppercase',
                        background: '#ea2032', color: '#fff',
                        padding: '18px 32px',
                        border: 'none', cursor: 'none',
                        transition: 'background 0.2s ease',
                        clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'var(--black)')}
                      onMouseLeave={e => (e.currentTarget.style.background = '#ea2032')}
                    >
                      Submit Estimate Request <Send size={14} />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
