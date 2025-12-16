'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, url: 'https://github.com/realHakeen', label: 'GitHub' },
  { icon: Twitter, url: 'https://x.com/realHakeen', label: 'Twitter' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/hakeen-yang-79324922a/', label: 'LinkedIn' },
  { icon: Mail, url: 'realhakeen@outlook.com', label: 'Email', isEmail: true },
]

export function ProfileCard() {
  const [copied, setCopied] = useState(false)

  const handleEmailClick = async (email: string) => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative bg-white rounded-3xl p-8 w-full max-w-[380px] shadow-2xl"
    >
      {/* Decorative dashed curve - SVG */}
      <svg
        className="absolute -top-8 -left-8 w-48 h-48 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M 180 20 Q 20 20 20 180"
          stroke="#e85d04"
          strokeWidth="3"
          strokeDasharray="10 10"
          fill="none"
          className="dashed-curve"
        />
      </svg>

      {/* Avatar section */}
      <div className="relative mx-auto w-64 h-64 mb-6">
        {/* Orange background for avatar */}
        <div className="absolute inset-0 bg-accent-orange rounded-2xl overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/86/7d/ac/867dacb9c8fa0b0783f96f90f990f85e.jpg"
            alt="Hakeen Yang"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Corner decorative curve */}
        <svg
          className="absolute -top-4 -left-4 w-24 h-24 pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M 90 10 Q 10 10 10 90"
            stroke="#e85d04"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
        </svg>
      </div>

      {/* Name */}
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-4 font-display">
        Hakeen Yang
      </h1>

      {/* Fire icon with decorative curve */}
      <div className="relative flex justify-center mb-4">
        <svg
          className="absolute w-full h-16 pointer-events-none"
          viewBox="0 0 200 60"
          fill="none"
        >
          <path
            d="M 20 50 Q 60 10 100 30"
            stroke="#e85d04"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
        </svg>
        <div className="relative z-10 w-10 h-10 bg-accent-orange rounded-full flex items-center justify-center">
          <span className="text-white text-lg">🔥</span>
        </div>
      </div>

      {/* Bio */}
      <p className="text-gray-700 text-center text-sm leading-relaxed mb-6 italic font-medium">
        A builder has endless innovation and creativity—and the discipline to execute.
      </p>

      {/* Social links */}
      <div className="flex justify-center gap-4 relative">
        {socialLinks.map(({ icon: Icon, url, label, isEmail }) => {
          if (isEmail) {
            return (
              <motion.button
                key={label}
                onClick={() => handleEmailClick(url)}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border-2 border-accent-orange text-accent-orange flex items-center justify-center hover:bg-accent-orange hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.button>
            )
          }
          return (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full border-2 border-accent-orange text-accent-orange flex items-center justify-center hover:bg-accent-orange hover:text-white transition-colors"
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          )
        })}
        {/* Copy notification */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap"
            >
              realhakeen@outlook.com has copied
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

