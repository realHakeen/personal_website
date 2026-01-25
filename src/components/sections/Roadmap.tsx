'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '../animations/FadeIn'
import { Briefcase, GraduationCap, Rocket, Building2 } from 'lucide-react'

const experiences = [
  {
    year: '2024 - 2025',
    role: 'Senior Investor',
    company: 'Gate Ventures',
    description: 'Early-stage investments in Web3 and AI startups.',
    icon: Building2,
    color: 'bg-accent-orange',
  },
  {
    year: '2023 - 2024',
    role: 'Researcher',
    company: 'First.vip',
    description: 'The famous blockchain research institution in China. I am responsible for the infra sector such as ZK-based Applications and Layer2 or Layer1 . We successfully invested in Solana、Bigtime、AAVE etc.',
    icon: Briefcase,
    color: 'bg-purple-500',
  },
  {
    year: '2022 - 2023',
    role: 'Researcher',
    company: 'W3Hitchhiker',
    description: 'We successfully invested in the Celestia in Series A and Pancake、Stepn etc.',
    icon: GraduationCap,
    color: 'bg-accent-cyan',
  },
  {
    year: '2018 - 2022',
    role: 'Thinker and Student',
    company: 'Tianjin University of Technology',
    description: 'Bachelor of Cybersecurity',
    icon: Briefcase,
    color: 'bg-purple-500',
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-32">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Roadmap
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-xl">
          My journey through tech, research, and entrepreneurship.
        </p>
      </FadeIn>

      <div className="relative">
        {/* Timeline line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-orange via-accent-cyan to-accent-lime origin-top"
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="flex gap-8 group">
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`relative z-10 w-10 h-10 rounded-full ${exp.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <Icon size={20} className="text-gray-900" />
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all cursor-default"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-accent-orange font-mono text-sm font-semibold">
                        {exp.year}
                      </span>
                      <div className="h-[1px] flex-1 bg-white/10" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{exp.company}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

