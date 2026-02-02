"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SubHero } from "@/components/sections/sub-hero";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <SubHero
        title="Get in Touch"
        subtitle="Let's discuss how we can bring your vision to life in any city across the Kingdom."
        variant="cinematic"
      />

      <section className="py-24">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Contact Form Placeholder */}
            <div className="flex-1 lg:max-w-2xl">
              <h2 className="text-4xl font-bold mb-10">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full h-14 bg-secondary/10 border border-border rounded-xl px-6 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full h-14 bg-secondary/10 border border-border rounded-xl px-6 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <select className="w-full h-14 bg-secondary/10 border border-border rounded-xl px-6 focus:border-primary outline-none transition-all">
                    <option>Interior Design Inquiry</option>
                    <option>Event Management Request</option>
                    <option>Media Production Proposal</option>
                    <option>General Support</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    className="w-full h-40 bg-secondary/10 border border-border rounded-xl p-6 focus:border-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white w-full h-14 text-lg">
                  Send Message <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Info Column */}
            <div className="flex-1 space-y-12">
              <div>
                <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Our Office</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        King Street, Business District
                        <br />
                        Riyadh, Kingdom of Saudi Arabia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Phone</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Office: +966 11 123 4567
                        <br />
                        Mobile: +966 50 123 4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Email</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        info@ivisionevents.com
                        <br />
                        projects@ivisionevents.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                <h4 className="text-2xl font-bold mb-4">Availability</h4>
                <p className="text-muted-foreground">
                  Our team is available across all major cities in Saudi Arabia,
                  including Riyadh, Jeddah, Dammam, and NEOM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
