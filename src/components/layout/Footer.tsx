'use client'

import { FadeIn } from '../animations/FadeIn'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 border-t border-white/10">
      <FadeIn>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Hakeen Yang. Contact me at realhakeen@outlook.com
          </p>
        </div>
      </FadeIn>
    </footer>
  )
}

