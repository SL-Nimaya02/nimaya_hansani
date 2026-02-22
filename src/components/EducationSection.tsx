import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import {
  GraduationCapIcon,
  CalendarIcon
} from 'lucide-react';
interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  isCurrent: boolean;
}
const education: EducationItem[] = [
  {
    degree: 'BEng (Hons) Software Engineering (University of Westminster)',
    institution: 'Informatics Institute of Technology (IIT Campus)',
    period: '2022 — 2026',
    description:
      'Hands-on engineering program offered by the University of Westminster through IIT, focusing on industry-ready software development and computer science fundamentals.',
    highlights: [
      'Active IEEE Student Member',
      'Advanced Web Development',
      'Solid foundation in Data Structures and Algorithms',
      'Full-stack development projects using modern frameworks',
      'Collaboration on international engineering standards',
      'Emphasis on professional ethics and software quality'],

    isCurrent: true
  },
  {
    degree: 'O/L & A/L Education',
    institution: 'Nugawela Central College',
    period: 'Mar 2017 — Feb 2022',
    description:
      'Successfully balanced academic excellence with significant leadership responsibilities and extracurricular involvement.',
    highlights: [
      'Served as both Junior and Senior Prefect',
      'G.C.E. O/L Examination',
      'G.C.E. A/L Examination (Mathematics Stream)',
      'Developed strong leadership and organizational skills',
      'Focused on Problem Solving and effective Communication',
      'Coordinated various school events and tech societies'],

    isCurrent: false
  },
  {
    degree: 'Diploma in Information Technology',
    institution: 'ICBT Campus',
    period: 'Feb 2022 — Aug 2022',
    description:
      'Technical program covering the core building blocks of modern programming and web architecture.',
    highlights: [
      'Foundational Web Development (HTML, CSS, Frameworks)',
      'Programming proficiency in Python, Java, and JavaScript',
      'Completed project-based assessments with distinction'],

    isCurrent: false
  }];

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      {/* Subtle background accent */}
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/[0.03] blur-[100px] -translate-y-1/2"
        aria-hidden="true" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Education"
          title="Academic Background"
          description="The foundation that shaped my approach to engineering and design." />


        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-purple-500/10 to-transparent"
              aria-hidden="true" />


            <div className="space-y-8">
              {education.map((item, index) =>
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="relative pl-16 md:pl-20">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 ${index === 0 ? 'border-purple-500 bg-purple-500/20 shadow-[0_0_12px_rgba(168,85,247,0.4)]' : 'border-dark-600 bg-dark-900'}`} />


                    <div className="glass-card rounded-2xl p-6 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-display text-lg md:text-xl font-semibold text-white">
                              {item.degree}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <GraduationCapIcon className="w-3.5 h-3.5 text-purple-400" />
                            <span className="text-purple-300 font-medium">
                              {item.institution}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-dark-500 font-mono">
                          <CalendarIcon className="w-3 h-3" />
                          {item.period}
                        </div>
                      </div>

                      <p className="text-dark-400 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <ul className="space-y-2">
                        {item.highlights.map((highlight, i) =>
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-dark-300">

                            <span className="mt-2 w-1 h-1 rounded-full bg-purple-500 flex-shrink-0" />
                            {highlight}
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