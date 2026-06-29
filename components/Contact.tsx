'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '', service: 'Architecture & Fit-out' });

  const SERVICES = ['Architecture & Fit-out', 'Events & Media Production', 'Portable Cabins & Modular', 'Real Estate & Advisory'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-pad" style={{ background: 'var(--white-2)', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 'clamp(2rem,5vw,4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 40, height: 2, background: '#ea2032' }} />
            <span style={{
              fontFamily: 'var(--font-ui)', fontSize: 10, fontWeight: 700,
              letterSpacing: '4px', textTransform: 'uppercase', color: '#ea2032',
            }}>Contact Us</span>
          </div>
          <h2 className="display-sm fade-up" style={{ color: 'var(--black)' }}>
            Let's Build<br /><span style={{ color: '#ea2032' }}>Something Great.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'clamp(2rem,5vw,5rem)', alignItems: 'start' }}>
          {/* Left: Info */}
          <div className="fade-up">
            {[
              { icon: MapPin, label: 'Address', value: '4571, 9th Street, Al Adamah, 7758\nDammam 32242- K S A\nM : 0503913735' },
              { icon: Phone, label: 'Phone', value: '0503913735' },
              { icon: Mail, label: 'Email', value: 'info@ivisionads.com' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} style={{
                display: 'flex', gap: 16, alignItems: 'flex-start',
                marginBottom: 28, paddingBottom: 28,
                borderBottom: '1px solid var(--white-3)',
              }}>
                <div style={{
                  width: 44, height: 44, background: 'var(--black)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  clipPath: 'polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))',
                }}>
                  <Icon size={16} color="#ea2032" />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-ui)', fontSize: 9, fontWeight: 700,
                    letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: 4,
                  }}>{label}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--black)',
                    fontWeight: 500, whiteSpace: 'pre-line', lineHeight: 1.5,
                  }}>{value}</div>
                </div>
              </div>
            ))}

            <Link href="/contact" className="btn-primary" style={{ fontSize: 12 }}>
              Full Contact Page <Send size={14} />
            </Link>
          </div>

          {/* Right: Quick Form */}
          <div className="fade-up delay-2">
            {submitted ? (
              <div style={{
                background: '#fff',
                border: '1px solid var(--white-3)',
                padding: 'clamp(2rem,4vw,3rem)',
                textAlign: 'center',
                clipPath: 'polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))',
              }}>
                <CheckCircle size={48} color="#ea2032" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 900, textTransform: 'uppercase', marginBottom: 12 }}>
                  Message Sent!
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gray-2)', lineHeight: 1.6, marginBottom: 24 }}>
                  Thanks, {form.name}. We'll reply to {form.email} within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline" style={{ fontSize: 11 }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: '#fff',
                  border: '1px solid var(--white-3)',
                  padding: 'clamp(2rem,4vw,3rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  clipPath: 'polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 900,
                  textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--black)',
                  borderBottom: '1px solid var(--white-3)', paddingBottom: 16,
                }}>Quick Inquiry</div>

                {/* Service Select */}
                <div>
                  <label style={{ fontFamily: 'var(--font-ui)', fontSize: 9, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--gray)', display: 'block', marginBottom: 8 }}>
                    Service Division
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {SERVICES.map(s => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setForm({ ...form, service: s })}
                        style={{
                          fontFamily: 'var(--font-ui)', fontSize: 9, fontWeight: 700,
                          letterSpacing: '2px', textTransform: 'uppercase',
                          padding: '6px 12px',
                          background: form.service === s ? '#ea2032' : 'var(--white-2)',
                          color: form.service === s ? '#fff' : 'var(--black)',
                          border: `1px solid ${form.service === s ? '#ea2032' : 'var(--white-3)'}`,
                          transition: 'all 0.2s ease',
                          clipPath: 'polygon(0 0,calc(100% - 4px) 0,100% 4px,100% 100%,4px 100%,0 calc(100% - 4px))',
                        }}
                      >{s}</button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <input
                    required
                    type="text"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: 'var(--white-2)', border: '1px solid var(--white-3)',
                      fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--black)',
                      outline: 'none', transition: 'border-color 0.2s',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#ea2032')}
                    onBlur={e => (e.target.style.borderColor = 'var(--white-3)')}
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: '100%', padding: '12px 16px',
                      background: 'var(--white-2)', border: '1px solid var(--white-3)',
                      fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--black)',
                      outline: 'none', transition: 'border-color 0.2s',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#ea2032')}
                    onBlur={e => (e.target.style.borderColor = 'var(--white-3)')}
                  />
                </div>

                <textarea
                  required
                  rows={4}
                  placeholder="Describe your project requirements *"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%', padding: '12px 16px',
                    background: 'var(--white-2)', border: '1px solid var(--white-3)',
                    fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--black)',
                    outline: 'none', transition: 'border-color 0.2s', resize: 'vertical',
                  }}
                  onFocus={e => (e.target.style.borderColor = '#ea2032')}
                  onBlur={e => (e.target.style.borderColor = 'var(--white-3)')}
                />

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', fontSize: 12 }}>
                  Send Inquiry <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          section > .container > div:nth-child(2){grid-template-columns:1fr !important;}
        }
      `}</style>
    </section>
  );
}
