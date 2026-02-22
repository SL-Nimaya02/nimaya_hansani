import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface LoadingScreenProps {
  isLoading: boolean;
}
export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading &&
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-950"
        exit={{
          opacity: 0
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }}>

          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{
              background:
              'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }} />

          </div>

          {/* Logo / Name */}
          <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 0.2
          }}>

            <motion.div
            className="w-16 h-16 rounded-2xl border border-purple-500/30 flex items-center justify-center mb-8 bg-purple-500/5"
            initial={{
              scale: 0,
              rotate: -180
            }}
            animate={{
              scale: 1,
              rotate: 0
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 0.3
            }}>

              <span className="font-display text-2xl font-bold gradient-text">
                A
              </span>
            </motion.div>

            <motion.p
            className="font-display text-sm tracking-[0.3em] uppercase text-dark-500 mb-8"
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.6
            }}>

              Loading Portfolio
            </motion.p>

            {/* Progress bar */}
            <div className="w-48 h-[2px] bg-dark-800 rounded-full overflow-hidden">
              <motion.div
              className="h-full rounded-full"
              style={{
                background:
                'linear-gradient(90deg, #7e22ce, #a855f7, #c084fc)'
              }}
              initial={{
                width: '0%'
              }}
              animate={{
                width: '100%'
              }}
              transition={{
                duration: 2,
                ease: [0.25, 0.1, 0.25, 1]
              }} />

            </div>
          </motion.div>

          {/* Reveal curtain */}
          <motion.div
          className="absolute inset-0 bg-dark-950"
          initial={{
            scaleY: 1
          }}
          exit={{
            scaleY: 0
          }}
          style={{
            transformOrigin: 'top'
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2
          }} />

        </motion.div>
      }
    </AnimatePresence>);

}