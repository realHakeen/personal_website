'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '../animations/FadeIn'
import { ArrowUpRight, Layers, Code2, Palette, Database } from 'lucide-react'

const projects = [
  {
    title: 'Decentralized Governance',
    description: 'A novel approach to DAO voting mechanisms with quadratic funding.',
    tags: ['Solidity', 'React', 'The Graph'],
    icon: Layers,
    size: 'large',
    link: '#',
  },
  {
    title: 'AI Writing Assistant',
    description: 'Intelligent writing tool powered by LLMs.',
    tags: ['Python', 'GPT-4', 'FastAPI'],
    icon: Code2,
    size: 'small',
    link: '#',
  },
  {
    title: 'Design System',
    description: 'Comprehensive component library for modern web apps.',
    tags: ['TypeScript', 'Tailwind', 'Storybook'],
    icon: Palette,
    size: 'small',
    link: '#',
  },
  {
    title: 'Data Pipeline',
    description: 'Real-time analytics infrastructure for blockchain data.',
    tags: ['Rust', 'Kafka', 'ClickHouse'],
    icon: Database,
    size: 'medium',
    link: '#',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Projects
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-xl">
          Selected works from my journey as a builder.
        </p>
      </FadeIn>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const Icon = project.icon
          const isLarge = project.size === 'large'
          
          return (
            <FadeIn
              key={index}
              delay={index * 0.1}
              className={isLarge ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <motion.a
                href={project.link}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="block relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8 h-full min-h-[280px] group cursor-pointer hover:bg-zinc-900 transition-colors"
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 0 10 L 10 0 M -2 2 L 2 -2 M 8 22 L 22 8" stroke="currentColor" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                  </svg>
                </div>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300 font-medium border border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow icon */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-6 right-6 w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-zinc-700 transition-colors"
                >
                  <ArrowUpRight size={20} className="text-white" />
                </motion.div>
              </motion.a>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}

