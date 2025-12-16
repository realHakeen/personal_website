'use client'

import { motion } from 'framer-motion'
import { Home, FolderOpen, BookOpen, Briefcase, Library } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home', href: '#hero' },
  { icon: FolderOpen, label: 'Projects', href: '#projects' },
  { icon: Briefcase, label: 'Roadmap', href: '#roadmap' },
  { icon: BookOpen, label: 'Writings', href: '#writings' },
  { icon: Library, label: 'Bookshelf', href: '#bookshelf' },
]

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 bg-gray-900/90 backdrop-blur-md rounded-full px-4 py-3 border border-white/10 shadow-2xl">
        {navItems.map(({ icon: Icon, label, href }) => (
          <motion.a
            key={label}
            href={href}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            title={label}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  )
}

