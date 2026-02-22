import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDownIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon
} from 'lucide-react';
function TikTokIcon({ className }: { className?: string; }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">

      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.17v-3.44a4.85 4.85 0 01-3.77-1.47V6.69h3.77z" />
    </svg>);

}
export function HeroSection() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.95]);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Parallax gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: bgY
        }}>

        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-purple-600/[0.07] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-800/[0.05] blur-[100px]" />
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-purple-500/[0.03] blur-[80px]" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
        aria-hidden="true" />


      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{
          opacity,
          scale
        }}>

        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-8"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 2.4,
              duration: 0.6
            }}>

            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-sm text-dark-300 font-medium">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 2.5,
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}>

            <span className="text-white">Nimaya</span>{' '}
            <span className="gradient-text">Hansani</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 2.7,
              duration: 0.6
            }}>

            <span className="font-mono text-sm md:text-base text-purple-300">
              Software Engineer
            </span>
            <span className="w-1 h-1 rounded-full bg-dark-600" />
            <span className="font-mono text-sm md:text-base text-purple-300">
              UI/UX Designer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-dark-400 text-base md:text-lg max-w-xl leading-relaxed mb-10"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 2.9,
              duration: 0.6
            }}>

            Crafting intuitive digital experiences at the intersection of
            engineering and design. Currently building products at{' '}
            <span className="text-white font-medium">MOB</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 3.1,
              duration: 0.6
            }}>

            <a
              href="/Nimaya_Hansani.pdf"
              download="Nimaya_Hansani.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 hover:border-purple-500 hover:bg-purple-500/10 text-white font-medium rounded-full transition-all duration-300 text-sm group">
              Download CV
              <DownloadIcon className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 3.3,
              duration: 0.6
            }}>

            <a
              href="https://github.com/SL-Nimaya02"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-dark-400 hover:text-purple-400 hover:border-purple-500/20 transition-all duration-300"
              aria-label="GitHub">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nimaya-hansani/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-dark-400 hover:text-purple-400 hover:border-purple-500/20 transition-all duration-300"
              aria-label="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@octal_gal.l?_r=1&_t=ZS-944i6ck8TDD"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-dark-400 hover:text-purple-400 hover:border-purple-500/20 transition-all duration-300"
              aria-label="TikTok">
              <TikTokIcon className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 3.5
        }}>

        <motion.div
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="flex flex-col items-center gap-2">

          <span className="text-xs text-dark-500 font-mono tracking-wider">
            SCROLL
          </span>
          <ArrowDownIcon className="w-4 h-4 text-dark-500" />
        </motion.div>
      </motion.div>
    </section>);
}