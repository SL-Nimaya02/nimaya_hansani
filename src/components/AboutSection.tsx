import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { LayoutIcon, ServerIcon, PaletteIcon } from 'lucide-react';
export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Where Engineering Meets Design"
          description="I believe the best digital products are born when technical precision meets creative empathy." />


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Story */}
          <div className="space-y-6">
            <ScrollReveal>
              <p className="text-dark-300 text-base leading-relaxed">
                I am a Software Engineer working at a growing startup while
                completing my final year in Software Engineering. With 1.5 years
                of experience across development and design - including
                collaboration with a Sweden - based company and design experience
                at CodeGen - I combine academic knowledge with real industry
                practice to build reliable, production-ready solutions.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-dark-300 text-base leading-relaxed">
                I specialize in full-stack development using React, Next.js,
                HTML, CSS, JavaScript, .NET, Node.js, and Python (Flask), with
                MySQL for data management. From responsive frontend interfaces
                to structured backend systems, I focus on creating scalable,
                secure, and high - performance web applications supported by
                efficient testing, hosting, and version control workflows.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-dark-300 text-base leading-relaxed">
                I am driven by clean code, thoughtful design, and continuous
                growth. With strong interests in UI/UX, cybersecurity, and
                research - driven innovation, I aim to evolve into a system
                architect building large-scale digital systems. Beyond
                engineering, I enjoy creative design, event management,
                traveling, and sharing tech insights that connect innovation
                with real-world impact.
              </p>
            </ScrollReveal>
          </div>

          {/* Focus areas */}
          <div className="space-y-4">
            <ScrollReveal delay={0.1} direction="right">
              <div className="glass-card rounded-2xl p-6 group glass-card-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <LayoutIcon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white mb-1">
                      Frontend Development
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed">
                      Crafting immersive, responsive user interfaces using React, Next.js, and Tailwind CSS. I focus on performance, accessibility, and pixel-perfect implementation.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="right">
              <div className="glass-card rounded-2xl p-6 group glass-card-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <ServerIcon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white mb-1">
                      Backend Development
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed">
                      Architecting robust, scalable server-side systems with .NET, Node.js, and Python (Flask). I specialize in API design, database management with MySQL, and secure workflows.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="right">
              <div className="glass-card rounded-2xl p-6 group glass-card-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <PaletteIcon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white mb-1">
                      UI/UX Design
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed">
                      From user research and wireframing to high-fidelity prototypes and design systems. I design with empathy and validate with data.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>);

}