'use client'

import { Navbar, Footer } from '@/components/layout'
import { ProfileCard } from '@/components/cards'
import { Hero, Roadmap, Projects, Writings, Bookshelf } from '@/components/sections'

export default function Home() {
  return (
    <>
      {/* Top Navigation */}
      <Navbar />

      {/* Main Layout: Two Columns */}
      <div className="min-h-screen">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Column - Sticky Profile Card */}
            <aside className="lg:w-[420px] flex-shrink-0 pt-24 lg:pt-32">
              <div className="lg:sticky lg:top-32">
                <ProfileCard />
              </div>
            </aside>

            {/* Right Column - Scrollable Content */}
            <main className="flex-1 pt-8 lg:pt-24 pb-16">
              {/* Hero Section */}
              <Hero />

              {/* Writings Section */}
              <Writings />

              {/* Projects Section */}
              <Projects />

              {/* Bookshelf Section */}
              <Bookshelf />

              {/* Roadmap Section */}
              <Roadmap />

              {/* Footer */}
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

