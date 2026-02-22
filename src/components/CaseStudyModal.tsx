import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, ExternalLinkIcon, GithubIcon } from 'lucide-react';
interface CaseStudy {
  title: string;
  category: string;
  problem: string;
  research: string;
  wireframes: string;
  designSystem: string;
  highFidelity: string;
  results: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}
interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}
export function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  if (!study) return null;
  return (
    <AnimatePresence>
      {study &&
      <motion.div
        className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}>

          {/* Backdrop */}
          <motion.div
          className="fixed inset-0 bg-dark-950/90 backdrop-blur-sm"
          onClick={onClose}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }} />


          {/* Modal content */}
          <motion.div
          className="relative z-10 w-full max-w-3xl mx-4 my-8 md:my-16"
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.98
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.98
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1]
          }}>

            <div className="glass-card rounded-3xl overflow-hidden">
              {/* Header image */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-dark-950/60 backdrop-blur-sm border border-white/10 text-white hover:bg-dark-950/80 transition-colors"
                aria-label="Close case study">

                  <XIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-10 space-y-8">
                {/* Title */}
                <div>
                  <span className="font-mono text-xs text-purple-400 uppercase tracking-wider">
                    {study.category}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-2">
                    {study.title}
                  </h2>
                  <div className="flex gap-3 mt-4">
                    {study.liveUrl &&
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-purple-300 hover:text-purple-200 transition-colors">

                        <ExternalLinkIcon className="w-3.5 h-3.5" /> Live Demo
                      </a>
                  }
                    {study.githubUrl &&
                  <a
                    href={study.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-dark-400 hover:text-white transition-colors">

                        <GithubIcon className="w-3.5 h-3.5" /> Source Code
                      </a>
                  }
                  </div>
                </div>

                {/* Sections */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-sm font-semibold text-purple-300 uppercase tracking-wider mb-2">
                      The Problem
                    </h3>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-purple-300 uppercase tracking-wider mb-2">
                      Research & Discovery
                    </h3>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      {study.research}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-purple-300 uppercase tracking-wider mb-2">
                      Wireframes & Information Architecture
                    </h3>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      {study.wireframes}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-purple-300 uppercase tracking-wider mb-2">
                      Design System
                    </h3>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      {study.designSystem}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-purple-300 uppercase tracking-wider mb-2">
                      High-Fidelity UI
                    </h3>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      {study.highFidelity}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-purple-300 uppercase tracking-wider mb-2">
                      Results & Impact
                    </h3>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      {study.results}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}