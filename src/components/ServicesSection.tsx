import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import {
  MonitorIcon,
  PenToolIcon,
  SmartphoneIcon,
  ArrowUpRightIcon
} from
  'lucide-react';
export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What I Can Do For You"
          description="I offer end-to-end product development — from initial concept and design to production-ready code." />


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Web Development */}
          <ScrollReveal delay={0}>
            <div className="glass-card rounded-2xl p-8 h-full group glass-card-hover transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-purple-500/[0.04] blur-[40px] group-hover:bg-purple-500/[0.08] transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                  <MonitorIcon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  Website Development
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-6">
                  High-performance, SEO-optimized websites built with modern
                  frameworks. Fast, responsive, and designed to deliver a
                  premium user experience across all devices.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-dark-300">
                    <span className="w-1 h-1 rounded-full bg-purple-500" />
                    Custom Next.js & React Sites
                  </li>
                  <li className="flex items-center gap-2 text-sm text-dark-300">
                    <span className="w-1 h-1 rounded-full bg-purple-500" />
                    SEO & Performance Optimization
                  </li>
                  <li className="flex items-center gap-2 text-sm text-dark-300">
                    <span className="w-1 h-1 rounded-full bg-purple-500" />
                    Responsive & Adaptive Design
                  </li>
                  <li className="flex items-center gap-2 text-sm text-dark-300">
                    <span className="w-1 h-1 rounded-full bg-purple-500" />
                    Modern Tech Stack Integration
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm text-purple-300 hover:text-purple-200 transition-colors font-medium">

                  Discuss a project <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* UI/UX Design */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card rounded-2xl p-8 h-full group glass-card-hover transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-purple-500/[0.04] blur-[40px] group-hover:bg-purple-500/[0.08] transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                  <PenToolIcon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  UI/UX Design
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-6">
                  User-centered design from research to high-fidelity
                  prototypes. I create interfaces that are beautiful, intuitive,
                  and backed by real user data.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-dark-300">
                    <span className="w-1 h-1 rounded-full bg-purple-500" />
                    User research & testing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-dark-300">
                    <span className="w-1 h-1 rounded-full bg-purple-500" />
                    Wireframing & prototyping
                  </li>
                  <li className="flex items-center gap-2 text-sm text-dark-300">
                    <span className="w-1 h-1 rounded-full bg-purple-500" />
                    Design systems & components
                  </li>
                  <li className="flex items-center gap-2 text-sm text-dark-300">
                    <span className="w-1 h-1 rounded-full bg-purple-500" />
                    Interaction design
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm text-purple-300 hover:text-purple-200 transition-colors font-medium">

                  Discuss a project <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile App Design */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card rounded-2xl p-8 h-full group glass-card-hover transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-purple-500/[0.04] blur-[40px] group-hover:bg-purple-500/[0.08] transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                  <SmartphoneIcon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  Mobile App Design
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-6">
                  Native-feeling mobile experiences designed for iOS and
                  Android. From concept sketches to developer-ready specs with
                  complete design handoff.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-dark-300">
                    <span className="w-1 h-1 rounded-full bg-purple-500" />
                    iOS & Android patterns
                  </li>
                  <li className="flex items-center gap-2 text-sm text-dark-300">
                    <span className="w-1 h-1 rounded-full bg-purple-500" />
                    Gesture & motion design
                  </li>
                  <li className="flex items-center gap-2 text-sm text-dark-300">
                    <span className="w-1 h-1 rounded-full bg-purple-500" />
                    Responsive layouts
                  </li>
                  <li className="flex items-center gap-2 text-sm text-dark-300">
                    <span className="w-1 h-1 rounded-full bg-purple-500" />
                    Design-to-dev handoff
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm text-purple-300 hover:text-purple-200 transition-colors font-medium">

                  Discuss a project <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>);

}