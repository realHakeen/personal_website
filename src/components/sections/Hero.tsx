'use client'

import { motion } from 'framer-motion'
import { TypeWriter } from '../animations/TypeWriter'

const roles = ['Writer', 'Investor', 'Researcher', 'Hacker']

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative">
      {/* Background outline text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span className="text-[20vw] font-bold text-outline opacity-10 whitespace-nowrap">
          BUILDER
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10"
      >
        {/* Main title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 tracking-tight">
          <TypeWriter
            words={roles}
            typingSpeed={120}
            deletingSpeed={80}
            pauseDuration={2500}
            className="text-accent-orange"
          />
        </h1>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mt-8"
        >
          Passionate about creating intuitive and engaging
          experiences. Specialize in transforming ideas
          into beautifully crafted products.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex gap-12 mt-16"
        >
          <div>
            <span className="text-5xl md:text-6xl font-bold text-white">+5</span>
            <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">
              Years of<br />Experience
            </p>
          </div>
          <div>
            <span className="text-5xl md:text-6xl font-bold text-white">+20</span>
            <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">
              Projects<br />Completed
            </p>
          </div>
          <div>
            <span className="text-5xl md:text-6xl font-bold text-white">+50</span>
            <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">
              Articles<br />Published
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

