'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '../animations/FadeIn'

const books = [
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
  },
  {
    title: 'The Hard Thing About Hard Things',
    author: 'Ben Horowitz',
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
  },
  {
    title: 'The Almanack of Naval Ravikant',
    author: 'Eric Jorgenson',
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
  },
  {
    title: 'The Bitcoin Standard',
    author: 'Saifedean Ammous',
  },
]

export function Bookshelf() {
  return (
    <section id="bookshelf" className="py-32">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Bookshelf
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-xl">
        Reviews of books that have profoundly affected my thinking in the past few years. Ordered by most recently completed.
        </p>
      </FadeIn>

      {/* Bookshelf display */}
      <div className="relative">
        {/* Shelf */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-zinc-800 rounded-sm" />
        
        {/* Books container */}
        <div className="flex items-end justify-start gap-4 pb-4 overflow-x-auto scrollbar-hide">
          {books.map((book, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -20, rotateZ: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative cursor-pointer group flex-shrink-0"
              >
                {/* Book */}
                <div
                  className="relative w-24 h-40 md:w-32 md:h-52 rounded-r-md bg-zinc-900 border border-zinc-800 transform perspective-1000"
                >
                  {/* Spine */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-4 bg-zinc-800 border-r border-zinc-700 rounded-l-sm"
                  />
                  
                  {/* Title on cover */}
                  <div className="absolute inset-0 p-4 pl-6 flex flex-col justify-end">
                    <h3 className="text-zinc-100 text-xs md:text-sm font-bold leading-tight mb-1 line-clamp-3">
                      {book.title}
                    </h3>
                    <p className="text-zinc-500 text-[10px] md:text-xs">
                      {book.author}
                    </p>
                  </div>

                  {/* Highlight effect */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                </div>

                {/* Hover tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-2 rounded-lg shadow-xl text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"
                >
                  {book.title}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-zinc-800 border-r border-b border-zinc-700" />
                </motion.div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

