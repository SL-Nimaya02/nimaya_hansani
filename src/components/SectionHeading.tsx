import React from 'react';
import { ScrollReveal } from './ScrollReveal';
interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}
export function SectionHeading({
  label,
  title,
  description,
  align = 'center'
}: SectionHeadingProps) {
  const alignClass =
  align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <div className={`flex flex-col ${alignClass} mb-16 md:mb-20`}>
      <ScrollReveal>
        <span className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-purple-400 mb-4 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5">
          {label}
        </span>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          {title}
        </h2>
      </ScrollReveal>
      {description &&
      <ScrollReveal delay={0.2}>
          <p className="mt-4 text-dark-400 text-base md:text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        </ScrollReveal>
      }
    </div>);

}