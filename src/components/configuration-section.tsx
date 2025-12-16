"use client"

import { useState,useRef } from 'react';
import EnquireForm from './enquireform';
export function ConfigurationSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const configurations = [
    {
      type: "1 BHK",
      area: "441-472",
      unit: "SQ.FT.",
    },
    {
      type: "2 BHK",
      area: "565-662",
      unit: "SQ.FT.",
    },
    {
      type: "3 BHK",
      area: "950-963",
      unit: "SQ.FT.",
    },
  ]

  const scroll = (direction: 'left' | 'right')=> {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -scrollContainerRef.current.offsetWidth : scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  return (
    <>
      <section id="configuration" className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/project.webp"
            alt="Background"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <div className="text-sm text-white/80 mb-2 tracking-wider">Project</div>
            <h2 className="text-3xl md:text-5xl font-serif text-white">Configuration</h2>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {configurations.map((config, index) => (
              <div
                key={index}
                className="border-8 border-white bg-transparent text-center transition-all duration-300 hover:scale-105"
              >
                <div className="bg-black/60 p-8 pb-12">
                  <h3 className="text-3xl font-serif mb-6 text-white">{config.type}</h3>

                  <div className="w-12 h-[2px] bg-white mx-auto mb-6"></div>

                  <p className="text-4xl font-bold mb-2 text-white">{config.area}</p>
                  <p className="text-lg mb-6 text-white">{config.unit}</p>

                  <div className="w-12 h-[2px] bg-white mx-auto mb-6"></div>

                  <button 
                    onClick={() => setIsFormOpen(true)}
                    className="border-2 border-white cursor-pointer text-white px-8 py-3 transition-all duration-300 hover:bg-white hover:text-gray-900"
                  >
                    ₹ Check Price
                  </button>
                </div>

                <div className="bg-white h-12"></div>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden relative">
            <div 
              ref={scrollContainerRef}
              className="flex gap-0 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {configurations.map((config, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full snap-center border-8 border-white bg-transparent text-center px-4"
                >
                  <div className="bg-black/60 p-6 pb-10">
                    <h3 className="text-2xl font-serif mb-4 text-white">{config.type}</h3>

                    <div className="w-12 h-[2px] bg-white mx-auto mb-4"></div>

                    <p className="text-3xl font-bold mb-2 text-white">{config.area}</p>
                    <p className="text-base mb-4 text-white">{config.unit}</p>

                    <div className="w-12 h-[2px] bg-white mx-auto mb-4"></div>

                    <button 
                      onClick={() => setIsFormOpen(true)}
                      className="border-2 border-white cursor-pointer text-white px-6 py-2.5 text-sm transition-all duration-300 hover:bg-white hover:text-gray-900"
                    >
                      ₹ Check Price
                    </button>
                  </div>

                  <div className="bg-white h-10"></div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={() => scroll('left')}
                className="w-8 h-8 flex items-center justify-center text-white hover:text-white/70 transition-colors"
                aria-label="Previous"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-8 h-8 flex items-center justify-center text-white hover:text-white/70 transition-colors"
                aria-label="Next"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="text-right mt-6 md:mt-8 max-w-6xl mx-auto">
            <p className="text-xs md:text-sm text-white/70 italic">As per RERA Carpet Area*</p>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      <EnquireForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        headerType="price"
      />
    </>
  )
}