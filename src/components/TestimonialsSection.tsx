import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { ScrollReveal } from './ScrollReveal';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react';
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}
const testimonials: Testimonial[] = [
  {
    quote:
      "Nimaya consistsently showed initiative, a willingness to learn, and the ability to quickly adapt to new challenges. They made meaningful contributions to several projects and always delivered work with attention to quality and detail. Nimaya will be a valuable asset to any software development team.",
    name: 'Rohan Wijesundara',
    role: 'Solutions Architect',
    company: 'Bisevo',
    avatar: '/images/testimonials/rohan_wijesundara.jpg'
  }];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const testimonial = testimonials[current];
  return (
    <section className="relative py-24 md:py-32">
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/[0.03] blur-[100px] -translate-y-1/2"
        aria-hidden="true" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading label="Testimonials" title="What People Say" />

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12 relative">
              <QuoteIcon
                className="absolute top-6 left-6 w-8 h-8 text-purple-500/20"
                aria-hidden="true" />


              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{
                    opacity: 0,
                    y: 10
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: -10
                  }}
                  transition={{
                    duration: 0.3
                  }}
                  className="text-center">

                  <p className="text-dark-200 text-base md:text-lg leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/20 mb-3" />

                    <p className="font-display font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-dark-400">
                      {testimonial.role} at{' '}
                      <span className="text-purple-300">
                        {testimonial.company}
                      </span>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="p-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-dark-400 hover:text-white hover:border-purple-500/20 transition-all"
                  aria-label="Previous testimonial">

                  <ChevronLeftIcon className="w-4 h-4" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, i) =>
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-purple-500 w-6' : 'bg-dark-700 hover:bg-dark-600'}`}
                      aria-label={`Go to testimonial ${i + 1}`} />

                  )}
                </div>

                <button
                  onClick={next}
                  className="p-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-dark-400 hover:text-white hover:border-purple-500/20 transition-all"
                  aria-label="Next testimonial">

                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>);

}