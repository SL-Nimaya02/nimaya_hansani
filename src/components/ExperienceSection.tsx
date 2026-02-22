import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { BriefcaseIcon, CalendarIcon } from 'lucide-react';
interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  description: string;
  achievements: string[];
  isCurrent: boolean;
}
const experiences: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'MOB',
    type: 'Full-time',
    period: 'Dec 2025 — Present',
    description:
      'Developing end-to-end digital solutions including e-commerce platforms and mobile applications, bridging the gap between design and engineering.',
    achievements: [
      'Leading UI/UX design and frontend development for complex web dashboards',
      'Implementing scalable backend architectures and API integrations',
      'Designing and prototyping mobile app interfaces with a focus on user experience',
      'Managing e-commerce development projects from concept to deployment'],

    isCurrent: true
  },
  {
    role: 'UI/UX Designer',
    company: 'CodeGen International (The Rise Tech Village)',
    type: 'Training',
    period: 'May 2025 — Nov 2025',
    description:
      'Assisted in designing and improving user interfaces for web dashboards and internal tools in a professional tech environment.',
    achievements: [
      'Created wireframes, prototypes, and responsive layouts using Figma',
      'Collaborated with developers to ensure smooth implementation of design components',
      'Redesigned existing components to enhance usability and accessibility',
      'Applied real-world design principles like color theory and design systems'],

    isCurrent: false
  },
  {
    role: 'Software Developer Intern',
    company: 'Crowderia AB',
    type: 'Internship',
    period: 'Jun 2024 — Jun 2025',
    description:
      'Contributed to web-based application development at a Stockholm-based digital solutions partner, working in a remote international team.',
    achievements: [
      'Wrote clean, efficient code for various web-based projects',
      'Participated in agile development processes and cross-functional team collaborations',
      'Strengthened time management and problem-solving skills in a remote environment',
      'Gained experience with global development standards and tools'],

    isCurrent: false
  }];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      {/* Subtle background accent */}
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/[0.03] blur-[100px] -translate-y-1/2"
        aria-hidden="true" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Experience"
          title="Career Journey"
          description="From design studios to engineering teams — each role shaped how I approach building products." />


        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-purple-500/10 to-transparent"
              aria-hidden="true" />


            <div className="space-y-8">
              {experiences.map((exp, index) =>
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="relative pl-16 md:pl-20">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 ${exp.isCurrent ? 'border-purple-500 bg-purple-500/20 shadow-[0_0_12px_rgba(168,85,247,0.4)]' : 'border-dark-600 bg-dark-900'}`} />


                    <div className="glass-card rounded-2xl p-6 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-display text-lg md:text-xl font-semibold text-white">
                              {exp.role}
                            </h3>
                            {exp.isCurrent &&
                              <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                                Current
                              </span>
                            }
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <BriefcaseIcon className="w-3.5 h-3.5 text-purple-400" />
                            <span className="text-purple-300 font-medium">
                              {exp.company}
                            </span>
                            <span className="text-dark-600">·</span>
                            <span className="text-dark-500">{exp.type}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-dark-500 font-mono">
                          <CalendarIcon className="w-3 h-3" />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-dark-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) =>
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-dark-300">

                            <span className="mt-2 w-1 h-1 rounded-full bg-purple-500 flex-shrink-0" />
                            {achievement}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}